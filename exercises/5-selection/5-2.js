'use strict';

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawColormaze();

function drawMaze() {
    context.fillStyle = "darkgray";
    context.lineWidth = 5;
    let space = 10;

    context.fillRect(0, 0, width, height);

    for (let i = 0; i < width / space; i++) {
        for (let p = 0; p < height / space; p++) {
            let r = Math.round(Math.random());

            if (r == 0) {
                Utils.drawLine(i * space, p * space, (i + 1) * space, (p + 1) * space);
            } else {
                Utils.drawLine(i * space, (p + 1) * space, (i + 1) * space, p * space);
            }
        }
    }
}

function drawColormaze() {
    context.fillStyle = "black";
    context.lineWidth = 5;
    let space = 10;

    context.fillRect(0, 0, width, height);

    for (let i = 0; i < width / space; i++) {
        for (let p = 0; p < height / space; p++) {
            let r = Math.round(Math.random());
            context.strokeStyle = Utils.hsl(Math.random() * 360, 50, 50);

            if (r == 0) {
                Utils.drawLine(i * space, p * space, (i + 1) * space, (p + 1) * space);
            } else {
                Utils.drawLine(i * space, (p + 1) * space, (i + 1) * space, p * space);
            }
        }
    }
}