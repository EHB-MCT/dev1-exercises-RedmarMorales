"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawRect();

function drawRect() {
    context.lineWidth = 4;

    context.beginPath();
    context.strokeStyle = 'red';
    context.rect(50, 50, 150, 150);
    context.rect(200, 200, 150, 150);
    context.stroke();

    context.beginPath();
    context.rect(130, 130, 150, 150);
    context.fill();

    context.beginPath();
    context.rect(60, 330, 20, 20);
    context.rect(330, 60, 20, 20);
    context.fill();

    context.beginPath();
    context.strokeStyle = 'gray';
    context.rect(80, 280, 50, 50);
    context.rect(280, 80, 50, 50);
    context.stroke();
}