import { describe, expect, it } from 'vitest'
import { WebGLState } from 'three/src/renderers/webgl/WebGLState.js'

import { syncWebGLPixelStoreCache, type PixelStoreTarget } from '../rendering/syncWebGLPixelStoreCache'

const createWebGLState = WebGLState as unknown as (
  gl: unknown,
  extensions: { has: (name?: string) => boolean }
) => PixelStoreTarget

function context() {
  let flip = false
  const gl: any = new Proxy({
    pixelStorei: (name: string, value: boolean) => { if (name === 'UNPACK_FLIP_Y_WEBGL') flip = value },
    getParameter: (name: string) => name === 'VERSION' ? 'WebGL 2.0' : name === 'UNPACK_FLIP_Y_WEBGL' ? flip : [0, 0, 1, 1],
  } as Record<string, any>, {
    get: (target, key: string) => key in target ? target[key] : /^[A-Z_0-9]+$/.test(key) ? key : () => {},
  })
  return { gl, state: createWebGLState(gl, { has: () => false }) }
}

describe('WebGL pixel store cache sync', () => {
  it('keeps Canvas upload orientation after a raw third-party UNPACK_FLIP_Y write', () => {
    const { gl, state } = context()
    syncWebGLPixelStoreCache(gl, state)

    state.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true)
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false)
    state.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true)

    expect(gl.getParameter(gl.UNPACK_FLIP_Y_WEBGL)).toBe(true)
  })

  it('still applies Three.js-initiated flip changes', () => {
    const { gl, state } = context()
    syncWebGLPixelStoreCache(gl, state)

    state.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true)
    expect(gl.getParameter(gl.UNPACK_FLIP_Y_WEBGL)).toBe(true)
    state.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false)
    expect(gl.getParameter(gl.UNPACK_FLIP_Y_WEBGL)).toBe(false)
  })
})
