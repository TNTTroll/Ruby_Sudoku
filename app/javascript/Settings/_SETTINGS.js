// ------------------ World
let size = window.innerWidth / 1000 * 1;
let up = size * -5;
let left = size * 5;
let radius = .2;

export { left, up, radius };


// ------------------ Colors
let calmPlate = [new THREE.Color('#d3d3d3'),
    new THREE.Color('#cd8043'),
    new THREE.Color('#579aa6')]

let pickPlate = [new THREE.Color('#c1c1c1'),
    new THREE.Color('#e89755'),
    new THREE.Color('#4b7b84')]
let defaultNumber = '#263538';
let userNumber = '#eee';

export { defaultNumber, userNumber, calmPlate, pickPlate };


// ------------------ Camera
let width = window.innerWidth;
let height = window.innerHeight;
let FOV = 75;
let ASPECT_RATIO = window.innerWidth / window.innerHeight;
let MIN_LEN = 0.1;
let MAX_LEN = 1000;

let camera_pos = 10;

let camera_enabled = false;  // Prevent camera rotation
let camera_zoom = false;    // Prevent from zooming
let camera_pan = false;     // Prevent Right_Mouse_Button - grab

let rotation_speed = 2;

export { width, height, FOV, ASPECT_RATIO, MIN_LEN, MAX_LEN,
    camera_pan, camera_enabled, camera_pos, camera_zoom,
    rotation_speed };


// ------------------ Light
let spot_Light_Color1 = 0xeeeece;  // Color: warn yellow
let sl1_pos = 1000;

let spot_Light_Color2 = 0xffffff;  // Color: Black
let sl2_pos = -200;

export {spot_Light_Color1, sl1_pos,
    spot_Light_Color2, sl2_pos};