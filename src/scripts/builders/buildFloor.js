import * as THREE from 'three';

const buildFloor = () => {
    const loader = new THREE.TextureLoader();
    const loadedTexture = loader.load(
        './assets/textures/wood-01.jpg',
        texture => {
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.offset.set(0, 0);
            texture.repeat.set(6, 6);
        }
    );

    const geometry2 = new THREE.PlaneGeometry(5, 5, 5);
    const material2 = new THREE.MeshBasicMaterial({
        color: 0xffff00,
        side: THREE.DoubleSide,
        map: loadedTexture,
    });
    const floor = new THREE.Mesh(geometry2, material2);

    return floor;
};

export default buildFloor;
