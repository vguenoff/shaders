import { WebGLRenderer } from "three"

export function onWindowResize(three: WebGLRenderer) {
    three.setSize(window.innerWidth, window.innerHeight)
}
