/**
 * 把第三方对 `gl.pixelStorei` 的直写同步进 Three.js `WebGLState` 缓存。
 *
 * Spark 等库会直接改 `UNPACK_FLIP_Y_WEBGL`。Three.js r184 只在缓存值变化时
 * 才真正写入 GL；缓存被绕过后，后续 Canvas 影像上传会跳过翻转，瓦片上下错缝。
 *
 * Sync raw `gl.pixelStorei` writes into Three.js `WebGLState`. Libraries such as
 * Spark set `UNPACK_FLIP_Y_WEBGL` on the GL context. Three.js r184 skips the
 * next cached write when it believes the value is unchanged, so later Canvas
 * imagery uploads can keep the wrong flip.
 */
export interface PixelStoreTarget {
  pixelStorei(name: number, value: number | boolean): void
}

export function syncWebGLPixelStoreCache(gl: PixelStoreTarget, state: PixelStoreTarget): void {
  const origGl = gl.pixelStorei.bind(gl)
  const origState = state.pixelStorei.bind(state)
  let syncing = false

  gl.pixelStorei = (name: number, value: number | boolean) => {
    origGl(name, value)
    if (syncing) return
    syncing = true
    try {
      origState(name, value)
    } finally {
      syncing = false
    }
  }

  state.pixelStorei = (name: number, value: number | boolean) => {
    syncing = true
    try {
      origState(name, value)
    } finally {
      syncing = false
    }
  }
}
