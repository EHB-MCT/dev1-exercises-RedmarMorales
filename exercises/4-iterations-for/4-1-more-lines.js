'use strict';
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let horizontalLines = 60;
let verticalLines = 30;

let width = 600;
let height = 300;

draw();

function draw() {
    context.fillStyle = 'orange';
    context.rect(0, 0, width, height);
    context.strokeStyle = 'white';
    context.lineWidth = '2';
    context.stroke();
    context.fill();
    drawLines();
}

function drawLines() {
    let step = width / horizontalLines;
    for (let i = 0; i < horizontalLines; i++) {
        Utils.drawLine(step * i, 0, width - (step * i), height);
    }

    for (let i = 0; i <= verticalLines; i++) {
        Utils.drawLine(0, step * i, width, height - (step * i));
    }
}