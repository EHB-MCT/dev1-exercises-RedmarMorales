"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawCircle();

function drawCircle() {
    context.beginPath();
    context.fillStyle = 'orange';
    context.rect(50, 50, 300, 300);
    context.fill();

    context.beginPath();
    context.fillStyle = 'yellow';
    context.ellipse(200, 250, 100, 100, 0, 0, 2 * Math.PI);
    context.fill();

    context.beginPath();
    context.fillStyle = 'blue';
    context.rect(50, 250, 300, 150);
    context.fill();
}