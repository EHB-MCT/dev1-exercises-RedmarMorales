"use strict";

drawCircle();

function drawCircle() {
    let canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext('2d');

    context.fillStyle = 'orange';
    context.fillRect(50, 50, 300, 300);

    context.beginPath();
    context.fillStyle = 'yellow';
    context.arc(200, 250, 100, Math.PI, true);
    context.fill();

    context.fillStyle = 'blue';
    context.fillRect(50, 250, 300, 100);
}