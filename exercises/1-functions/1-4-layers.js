"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawLayers();

function drawLayers() {
    context.beginPath();
    context.fillStyle = 'lightblue';
    context.rect(50, 50, 250, 250);
    context.rect(50, 50, 200, 200);
    context.rect(100, 50, 150, 150);
    context.rect(150, 100, 100, 100);
    context.rect(150, 140, 60, 60);
    context.fill();
    context.stroke();
}