import { camera, renderer } from '../context';

function onWindowResize() {
    const wrapper = document.getElementById('canvas-wrapper');
    const width = wrapper.offsetWidth;
    const height = wrapper.offsetHeight;

    console.log('width', width);
    console.log('height', height);

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
}

window.addEventListener('resize', onWindowResize);
