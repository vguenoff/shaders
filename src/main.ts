import {
    WebGLRenderer,
    Scene,
    OrthographicCamera,
    ShaderMaterial,
    PlaneGeometry,
    Mesh,
} from "three"

import vertexShader from "./shaders/vertex-shader.glsl"
import fragmentShader from "./shaders/fragment-shader.glsl"

import "./style.css"

function onWindowResize(three: WebGLRenderer) {
    three.setSize(window.innerWidth, window.innerHeight)
}

class SimonDevGLSLCourse {
    #three = new WebGLRenderer()
    #scene = new Scene()
    #camera = new OrthographicCamera(0, 1, 1, 0, 0.1, 1000)

    constructor() {
        document.body.appendChild(this.#three.domElement)
        this.#raf()
        this.#render()
    }

    #raf() {
        requestAnimationFrame(() => {
            this.#three.render(this.#scene, this.#camera)
            this.#raf()
        })
    }

    #render() {
        onWindowResize(this.#three)
        window.addEventListener("resize", () => onWindowResize(this.#three))

        this.#camera.position.set(0, 0, 1)

        const plane = new Mesh(
            new PlaneGeometry(1, 1),
            new ShaderMaterial({ uniforms: {}, vertexShader, fragmentShader }),
        )

        plane.position.set(0.5, 0.5, 0)
        this.#scene.add(plane)
    }
}

new SimonDevGLSLCourse()
