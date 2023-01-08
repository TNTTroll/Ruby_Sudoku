// --------------------------- Imports
import * as S from "../Settings/_SETTINGS.js";


// --------------------------- Helpers
function rand(min, max) {
    return Math.floor( min + Math.random() * (max + 1 - min) );
}


// --------------------------- Shafles
function swipeRow(matrix, row1, row2) {
    row1--; row2--;

    let saveRow = matrix[row1];
    matrix[row1] = matrix[row2];
    matrix[row2] = saveRow;

    return matrix;
}

function swipeColumn(matrix, col1, col2) {
    col1--; col2--;

    for (let i = 0; i < matrix.length; i++) {
        let saveCol = matrix[i][col1];
        matrix[i][col1] = matrix[i][col2];
        matrix[i][col2] = saveCol;
    }

    return matrix;
}

function swipeTripleRow(matrix, row1, row2) {
    row1 = (row1 - 1) * 3;
    row2 = (row2 - 1) * 3;

    let saveRow1 = matrix[row1];
    let saveRow2 = matrix[row1+1];
    let saveRow3 = matrix[row1+2];

    matrix[row1] = matrix[row2];
    matrix[row1+1] = matrix[row2+1];
    matrix[row1+2] = matrix[row2+2];

    matrix[row2] = saveRow1;
    matrix[row2+1] = saveRow2;
    matrix[row2+2] = saveRow3;

    return matrix;
}

function swipeTripleColumn(matrix, col1, col2) {
    col1 = (col1 - 1) * 3;
    col2 = (col2 - 1) * 3;

    for (let i = 0; i < matrix.length; i++) {
        let saveRow1 = matrix[i][col1];
        let saveRow2 = matrix[i][col1+1];
        let saveRow3 = matrix[i][col1+2];

        matrix[i][col1] = matrix[i][col2];
        matrix[i][col1+1] = matrix[i][col2+1];
        matrix[i][col1+2] = matrix[i][col2+2];

        matrix[i][col2] = saveRow1;
        matrix[i][col2+1] = saveRow2;
        matrix[i][col2+2] = saveRow3;
    }

    return matrix;
}

function transposing(matrix) {
    return matrix[0].map((col, i) => matrix.map(row => row[i]));
}


// --------------------------- Functions
export function generate() {
    let matrix = new Array(9);
    for (let i = 0; i < 9; i++)
        matrix[i] = new Array(9);

    for (let i = 0; i < 9; i++)
        for (let j = 0; j < 9; j++)
            matrix[i][j] = new SpriteText( Math.floor((i*3 + i/3 + j) % 9 + 1),
                .5, S.defaultNumber);



    for (let i = 0; i < rand(40, 50); i++) {
        let pos = [0, 3, 6];
        let triple = pos[rand(0, 2)];
        switch (rand(1, 5)) {
            case 1:
                matrix = swipeRow(matrix, triple+rand(1, 3), triple+rand(1, 3));
                break;
            case 2:
                matrix = swipeColumn(matrix, triple+rand(1, 3), triple+rand(1, 3));
                break;
            case 3:
                matrix = swipeTripleRow(matrix, rand(1, 3), rand(1, 3));
                break;
            case 4:
                matrix = swipeTripleColumn(matrix, rand(1, 3), rand(1, 3));
                break;
            case 5:
                matrix = transposing(matrix);
                break;
        }
    }

    return matrix;
}

export function erase(matrix, difficult) {
    let count;
    switch (difficult) {
        case 'easy':
            count = 43;
            break;
        case 'medium':
            count = 57;
            break;
        case 'hard':
            count = 73;
            break;
    }

    let show = new Array(9);
    for (let i = 0; i < 9; i++)
        show[i] = new Array(9);

    for (let i = 0; i < 9; i++)
        for (let j = 0; j < 9; j++)
            show[i][j] = matrix[i][j];

    for (let i = 0; i < count; i++)
        show[rand(0, 8)][rand(0, 8)].text = '';

    return show;
}

export function simplify(matrix) {
    let arr = [];
    for (let i = 0; i < matrix.length; i++) {
        let row = [...matrix[i]];
        for (let j = 0; j < row.length; j++)
            arr.push(row[j]);
    }

    const copy = arr.map(object => ({ ...object }))
    return copy;
}