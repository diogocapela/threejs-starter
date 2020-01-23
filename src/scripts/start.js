import * as THREE from 'three';
import { scene, camera, renderer, gui } from './context';

import startAxesHelper from './helpers/startAxesHelper';

import buildFloor from './builders/buildFloor';

/*
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);
*/

function GUIModel() {
    this.rotationX = 0;
    this.rotationY = 0;
    this.rotationZ = 0;
    this.positionX = 0;
    this.positionY = 0;
    this.positionZ = 0;
}

const model = new GUIModel();

gui.add(model, 'rotationX', 0, 360);
gui.add(model, 'rotationY', 0, 360);
gui.add(model, 'rotationZ', 0, 360);

gui.add(model, 'positionX', 0, 360);
gui.add(model, 'positionY', 0, 360);
gui.add(model, 'positionZ', 0, 360);

const floor = buildFloor();

floor.position.set(0, -1, 0);

scene.add(floor);

startAxesHelper();

const animate = () => {
    window.requestAnimationFrame(animate);

    // plane.rotation.y += 0.01;

    /*
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    */
    floor.rotation.x = THREE.Math.degToRad(model.rotationX);
    floor.rotation.y = THREE.Math.degToRad(model.rotationY);
    floor.rotation.z = THREE.Math.degToRad(model.rotationZ);

    floor.position.x = THREE.Math.degToRad(model.positionX);
    floor.position.y = THREE.Math.degToRad(model.positionY);
    floor.position.z = THREE.Math.degToRad(model.positionZ);

    renderer.render(scene, camera);
};

animate();
