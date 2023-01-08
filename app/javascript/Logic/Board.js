// --------------------------- Imports
import { generate, erase, simplify } from './Additional.js';
import * as S from "../Settings/_SETTINGS.js";


// --------------------------- Variables
let len = 9;


// --------------------------- Class
export class Board {
    constructor(scene, label, mess, diff) {
        this.scene = scene;
        this.matrix = generate();
        this.all = simplify(this.matrix);
        this.show = erase(this.matrix, diff);

        this.planes = [];

        this.label = label;
        this.mess = mess;
        this.errors = 0;

        this.generate();
    }

    generate() {
        for (let i = 0; i < len; i++)
            for (let j = 0; j < len; j++) {

                let x = -.5, y = -.5, width = 1, height = 1, radius = S.radius;

                let shape = new THREE.Shape();
                shape.moveTo( x, y + radius );
                shape.lineTo( x, y + height - radius );
                shape.quadraticCurveTo( x, y + height, x + radius, y + height );
                shape.lineTo( x + width - radius, y + height );
                shape.quadraticCurveTo( x + width, y + height, x + width, y + height - radius );
                shape.lineTo( x + width, y + radius );
                shape.quadraticCurveTo( x + width, y, x + width - radius, y );
                shape.lineTo( x + radius, y );
                shape.quadraticCurveTo( x, y, x, y + radius );

                let geometry = new THREE.ShapeBufferGeometry( shape );

                let plane = new THREE.Mesh(geometry,
                    new THREE.MeshBasicMaterial( {color: S.calmPlate[0], side: THREE.DoubleSide} ));
                plane.add(this.show[i][j]);

                this.show[i][j].position.set(0, 0, .1);
                this.scene.add(plane);

                plane.position.set(j * 1.2 - 2, -i * 1.2 + 5, 0);

                this.planes.push(plane);

            }
    }

    find(elem, number) {
        let pos = -1;
        for (let i = 0; i < this.all.length; i++)
            if (this.all[i].uuid === elem.uuid ) {
                pos = i;
                break;
            }

        if (pos !== -1) {
            if (this.matrix[Math.floor(pos / len)][pos % len].text !== this.all[pos]._text) {

                if (number === 0) {
                    this.show[Math.floor(pos / len)][pos % len].text = '';
                    this.mess.textContent = '';
                }

                if (this.all[pos]._text === String(number)) {
                    this.show[Math.floor(pos / len)][pos % len].text = String(number);
                    this.show[Math.floor(pos / len)][pos % len].color = S.userNumber;
                    this.mess.textContent = '';
                } else {
                    this.errors++;
                    this.update( String(number) );
                }

            }
        }
    }

    isSolved() {
        for (let i = 0; i < this.all.length; i++)
            if (this.all[i]._text !== this.show[Math.floor(i / 9)][i % 9]._text)
                return false;

        return true;
    }

    update(num) {
        this.mess.textContent = num + ' - is a mistake';
        this.label.textContent = 'Errors:' + String(this.errors);
    }
}