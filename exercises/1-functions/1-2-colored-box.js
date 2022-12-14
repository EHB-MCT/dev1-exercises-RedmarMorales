"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawBox();

function drawBox() {
    context.lineWidth = 6;

    context.beginPath();
    context.moveTo(50, 50);
    context.lineTo(250, 50);
    context.lineTo(250, 250);
    context.lineTo(50, 250);
    context.lineTo(50, 50);
    context.stroke();

    context.beginPath();
    context.strokeStyle = 'red';
    context.moveTo(50, 50);
    context.lineTo(250, 250);
    context.moveTo(250, 50);
    context.lineTo(50, 250);
    context.stroke();
}