import * as THREE from 'three'
import Cube from './Cube.js';

const app = document.querySelector('#cube-animation-container');

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({
  alpha: true
});
renderer.setSize(500,400);
app?.appendChild(renderer.domElement);

camera.position.z = 6;
camera.position.y = 5;
camera.lookAt(new THREE.Vector3(0,0,0))

const cube = new Cube({
  width: 4,
  height: 4,
  cubeColor: 0x0E0E0E,
  lineColor: 0x21A5EF,
  position: {
    x: -6,
    y: -4,
    z: 0
  }
}).start();

const cube2 = new Cube({
  width: 4,
  height: 4,
  cubeColor: 0x0E0E0E,
  lineColor: 0x21EF4E,
  position: {
    x: 5,
    y: 1,
    z: -5
  }
}).start();

const cube3 = new Cube({
  width: 4,
  height: 4,
  cubeColor: 0x0E0E0E,
  lineColor: 0xFFF50E,
  position: {
    x: 7,
    y: -7,
    z: -2
  }
}).start();

const cube4 = new Cube({
  width: 4,
  height: 4,
  cubeColor: 0x0E0E0E,
  lineColor: 0xFF0000,
  position: {
    x: -4,
    y: 1,
    z: -8
  }
}).start();

scene.add(cube);
scene.add(cube2);
scene.add(cube3);
scene.add(cube4);

function cubeAnimation() {
  cube.rotation.x += -0.01;
  cube.rotation.y += 0.005;

  cube2.rotation.x += 0.01;
  cube2.rotation.y += -0.005;

  cube3.rotation.x += 0.005;
  cube3.rotation.y += -0.01;
  cube3.rotation.z += -0.005;

  cube4.rotation.x += 0.005;
  cube4.rotation.y += -0.01;
  cube4.rotation.z += -0.005;
};

function animate() {
  renderer.render(scene, camera);

  cubeAnimation();

  requestAnimationFrame(animate);
};

animate();