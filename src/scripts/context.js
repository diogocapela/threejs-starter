import * as THREE from 'three';
import dat from 'dat.gui';

// Canvas Wrapper
const wrapper = document.getElementById('canvas-wrapper');
const width = wrapper.offsetWidth;
const height = wrapper.offsetHeight;

// GUI
const gui = new dat.GUI();

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
    75, // fov
    width / height, // aspect
    0.1, // near
    1000 // far
);
camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);

document.getElementById('canvas-wrapper').appendChild(renderer.domElement);

export { gui, scene, camera, renderer };
