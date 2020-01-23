import * as THREE from 'three';
import { scene } from '../context';

const startAxesHelper = () => {
    scene.add(new THREE.AxesHelper(50));
};

export default startAxesHelper;
