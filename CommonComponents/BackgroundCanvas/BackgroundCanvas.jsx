import { useEffect, useRef } from "react/cjs/react.development";
import { Color } from "three";
import { PointLight } from "three";
import {
  Mesh,
  MeshNormalMaterial,
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function BackgroundCanvas() {
  const canvasRef = useRef();
  useEffect(() => {
    const scene = new Scene();
    scene.background = new Color(0xffffff);
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);
    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshNormalMaterial();
    const cube = new Mesh(geometry, material);
    scene.add(cube);
    const controls = new OrbitControls(camera, renderer.domElement);
    const pointLight = new PointLight(0xff0000, 1, 100);
    pointLight.position.set(10, 30, 30);
    scene.add(pointLight);
    camera.position.set(2, 2, 2);
    controls.update();
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();
  }, []);

  return <canvas ref={canvasRef}></canvas>;
}
