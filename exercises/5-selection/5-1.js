'use strict';

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawDots1();

function drawDots1() {
    context.fillRect(0, 0, width, height);

    for (let i = 0; i < 10000; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;

        if (x < width / 2) {
            context.fillStyle = 'green';
        } else {
            context.fillStyle = 'red';
        }
        Utils.fillCircle(x, y, 6);
    }
}

function drawDots2() {
    context.fillRect(0, 0, width, height);

    for (let i = 0; i < 10000; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;

        if (y < height / 4 * 1.3) {
            context.fillStyle = 'red';
        } else if (y < height / 6 * 4.2) {
            context.fillStyle = 'white';
        } else {
            context.fillStyle = 'blue';
        }
        Utils.fillCircle(x, y, 6);
    }
}

function drawDots3() {
    context.fillRect(0, 0, width, height);

    for (let i = 0; i < 10000; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;

        if (x < width / 6) {
            context.fillStyle = 'red';
        } else if (x < width / 7 * 5.8) {
            context.fillStyle = 'white';
        } else {
            context.fillStyle = 'yellow';
        }
        Utils.fillCircle(x, y, 6);
    }
}

function drawDots4() {
    context.fillRect(0, 0, width, height);

    for (let i = 0; i < 10000; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;

        if (x < width * 2 / 3 && y < height * 2 / 3) {
            context.fillStyle = 'green';
        } else {
            context.fillStyle = 'white';
        }
        Utils.fillCircle(x, y, 6);
    }
}

function drawDots5() {
    context.fillRect(0, 0, width, height);

    for (let i = 0; i < 10000; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;

        if (x < width / 4 * 3 && y < height / 4 * 3 && x > width / 4 && y > height / 4) {
            context.fillStyle = 'white';
        } else {
            context.fillStyle = 'blue';
        }
        Utils.fillCircle(x, y, 6);
    }
}

function drawDots6() {
    context.fillRect(0, 0, width, height);

    for (let i = 0; i < 10000; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;
        let distance = Utils.calculateDistance(width / 2, height / 2, x, y);

        if (distance > 450) {
            context.fillStyle = 'white';
        } else {
            context.fillStyle = 'red';
        }
        Utils.fillCircle(x, y, 6);
    }
}