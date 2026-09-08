# Spark 纹理上传绕过 Three.js 状态缓存

适用范围：2026-09-06 首次定位；2026-09-08 改为 Tellux WebGL 渲染器同步，不再把正式修法绑在 Spark 的 pnpm patch 上。Three.js 0.184.0、Spark 2.1.0 ESM、WebGL。

## 结论与证据

底图瓦片出现上下错接，不是 ArcGIS URL 中 x/y 顺序写反。模板为 `/tile/{z}/{y}/{x}`，与 level/row/column 一致；XYZImageSource 按名称替换参数，tiling.flipY=true 表示北侧起算行号。不要因图像错缝就交换模板参数。

Spark 的排序纹理、LOD 索引和分页索引三处上传直接执行 `gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false)`。Three.js r184 的 `WebGLState.pixelStorei` 缓存最近值：原缓存为 true，Spark 原生写入 false 后缓存仍为 true，后续 Canvas 纹理请求 true 时 Three.js 跳过了写入，实际仍为 false，造成上下翻转失效。

2026-09-08 高斯案例再次复现。运行时探针记录到原生 `gl.pixelStorei(..., false)` 之后连续 `{ requested: true, actual: false }`。本机 `node_modules` 中的 Spark 未带 lockfile 声明的 patch（目录名无 `_pat_`），Vite 预构建仍是未修补源码。pnpm patch 只覆盖本仓库 examples / 开发安装，**不会随 npm 包 `tellux` 发给下游用户**。

## 修复

正式修法在 Tellux 自己的 WebGL 渲染器：[`syncWebGLPixelStoreCache`](../../src/rendering/syncWebGLPixelStoreCache.ts) 于 `WebGLRendererAdapter` 构造时包装 `gl.pixelStorei` 与 `renderer.state.pixelStorei`，第三方直写 GL 时同步 Three.js 缓存。使用 Tellux Viewer 的应用无需给 Spark 打补丁。

本仓库仍保留 [pnpm patch](../../patches/@sparkjsdev__spark@2.1.0.patch) 作为示例依赖的额外对齐，不是用户环境的必要条件。

可重复测试：

- [webglPixelStoreCache.test.ts](../../src/test/webglPixelStoreCache.test.ts)：用真实 Three.js WebGLState 模拟未打补丁的 Spark 直写，验证后续 `flipY=true` 上传生效。
- [sparkPixelStore.test.ts](../../examples/gaussian-splat/sparkPixelStore.test.ts)：仍覆盖 ArcGIS URL 行号，以及本仓库 Spark 补丁写入点。

## 容易误判的缓存层

首次只装补丁时用户仍可能看到错乱：`node_modules/.vite/deps` 的旧预构建可继续带原生 `gl.pixelStorei`。不能只检查 node_modules 包源就声称浏览器已运行新实现。库侧修法不再依赖这一层。

升级 Spark / Three.js 时跑上述测试。上游若改走缓存接口，可评估是否缩小 shim；不要把 Spark 2.1.0 dist 行号补丁当成 Tellux 用户的修复面。

ImageBitmap 的预翻转、Canvas 的上传翻转、XYZ 行号方向是不同层次。该根因不证明所有错缝都由 Spark 引起。
