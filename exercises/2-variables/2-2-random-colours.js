"use strict";
/** @type {CanvasRenderingContext2D} */
let context;

setup();
drawPyramid();

function setup() {
    let canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context = canvas.getContext('2d');
}

function drawPyramid() {
    drawSquares(0, 800);
    drawSquares(50, 700);
    drawSquares(100, 600);
    drawSquares(150, 500);
    drawSquares(200, 400);
    drawSquares(250, 300);
    drawSquares(300, 200);
    drawSquares(350, 100);
}

function drawSquares(p, s) {
    let orange = Math.random() * 255;
    let yellow = Math.random() * 255;
    let brown = Math.random() * 255;

    context.fillStyle = "rgb(" + orange + "," + yellow + "," + brown + ")";
    context.fillRect(50 + p, 50 + p, s, s);
}