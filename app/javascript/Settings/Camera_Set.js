// --------------------------- Imports
import * as S from './_SETTINGS.js';


// --------------------------- Variables
// --- Scene
let scene = new THREE.Scene();

// --- Camera
let camera = new THREE.PerspectiveCamera(S.FOV, S.ASPECT_RATIO, S.MIN_LEN, S.MAX_LEN);
camera.position.set(0, 0, 8);

// --- Canvas
let canvas = document.querySelector('#c');
const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setViewport(-window.innerWidth*.3, 0, window.innerWidth, window.innerHeight);

// --- Control
const controls = new THREE.OrbitControls( camera, canvas );

controls.target.set(0, 0, 0);

controls.enabled = S.camera_enabled;
controls.enableZoom = S.camera_zoom;
controls.enablePan = S.camera_pan;

controls.update();

// --------------------------- Exports
export { scene, camera, renderer, canvas };