"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawStarrynight();

function drawStarrynight() {
    context.lineWidth = '5';

    //box
    context.beginPath();
    context.rect(50, 50, 350, 350);
    context.stroke();

    //circles
    context.beginPath();
    context.stroke();

    //lines
    context.beginPath();
    context.stroke();
}