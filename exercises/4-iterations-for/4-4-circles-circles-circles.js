'use strict';
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

drawCircles3();

function drawCircles1() {
    for (let i = 0; i < 20; i++) {
        for (let h = 0; h < 11; h++) {
            let x = i * 100;
            let y = h * 100;
            context.fillStyle = Utils.hsl(150, 20, 20);
            Utils.fillCircle(x, y, 50);
        }
    }
}

function drawCircles2() {
    for (let i = 0; i < 20; i++) {
        for (let o = 0; o < 10; o++) {
            let x = i * 100;
            let y = o * 100;
            context.fillStyle = Utils.hsla(150, 80, 20, 20);
            Utils.fillCircle(x, y, Math.random() * 100);
        }
    }
}

function drawCircles3() {
    for (let i = 0; i < 20; i++) {
        for (let o = 0; o < 10; o++) {
            let x = i * 100;
            let y = o * 100;
            context.fillStyle = Utils.hsla(150, 80, 20, 20);
            Utils.fillCircle(x, y, 15 + y / 15);
        }
    }
}

function drawCircles4() {
    for (let i = 0; i < 20; i++) {
        for (let o = 0; o < 10; o++) {
            let x = i * 100;
            let y = o * 100;
            context.fillStyle = Utils.hsla(150, 80, 20, 20);
            Utils.fillCircle(x, y, 50);
        }
    }
}

function drawCircles5() {
    for (let i = 0; i < 20; i++) {
        for (let o = 0; o < 10; o++) {
            let x = i * 100;
            let y = o * 100;
            context.fillStyle = Utils.hsla(150, 80, 20, 20);
            Utils.fillCircle(x, y, 50);
        }
    }
}

function drawCircles6() {
    for (let i = 0; i < 20; i++) {
        for (let o = 0; o < 10; o++) {
            let x = i * 100;
            let y = o * 100;
            context.fillStyle = Utils.hsla(150, 80, 20, 20);
            Utils.fillCircle(x, y, 50);
        }
    }
}