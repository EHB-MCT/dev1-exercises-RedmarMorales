"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let size = 80;
let x = Utils.randomNumber(size, width - size);
let y = Utils.randomNumber(size, height - size);
let speedX = 40;
let speedY = 40;
let isMoving = true;


window.onmousedown = ceaseMovement;


/**
 * 
 * @param {MouseEvent} p 
 */
function ceaseMovement(p) {
    if (Utils.calculateDistance(p.pageX, p.pageY, x, y) < size) {
        isMoving = false;
        context.fillStyle = "white";
        Utils.fillCircle(p.pageX, p.pageY, size / 4);
    }
}

bouncingBall();

function bouncingBall() {
    if (isMoving) {
        context.fillStyle = "black";
        context.fillRect(0, 0, width, height);
        context.fillStyle = "yellow";
        Utils.fillCircle(x, y, size);
        x += speedX;
        y += speedY;
        if (x >= width - size || x <= size) {
            speedX *= -1;
        } else if (y >= height - size || y <= size) {
            speedY *= -1;
        }
        requestAnimationFrame(bouncingBall);
    }
}