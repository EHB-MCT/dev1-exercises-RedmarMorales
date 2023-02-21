"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawName();

function drawName() {
    context.lineWidth = 10;

    //f
    context.beginPath();
    context.strokeStyle = 'red';
    context.moveTo(50, 50);
    context.lineTo(50, 200);
    context.moveTo(55, 55);
    context.lineTo(125, 55);
    context.moveTo(50, 100);
    context.lineTo(100, 100);
    context.stroke();

    //r
    context.beginPath();
    context.strokeStyle = 'blue';
    context.moveTo(150, 130);
    context.lineTo(150, 200);
    context.moveTo(150, 150);
    context.lineTo(200, 140);
    context.stroke();

    //a
    context.beginPath();
    context.strokeStyle = 'green';
    context.moveTo(310, 130);
    context.lineTo(310, 200);
    context.moveTo(310, 140);
    context.lineTo(275, 140);
    context.lineTo(255, 165);
    context.lineTo(275, 190);
    context.lineTo(310, 190);
    context.stroke();

    //n
    context.beginPath();
    context.strokeStyle = 'orange';
    context.moveTo(410, 130);
    context.lineTo(410, 200);
    context.moveTo(410, 140);
    context.lineTo(460, 140);
    context.lineTo(460, 200);
    context.stroke();

    //c
    context.beginPath();
    context.strokeStyle = 'yellow';
    context.moveTo(570, 130);
    context.lineTo(570, 200);
    context.moveTo(570, 135);
    context.lineTo(620, 135);
    context.moveTo(570, 195);
    context.lineTo(620, 195);
    context.stroke();

    //i
    context.beginPath();
    context.strokeStyle = 'purple';
    context.moveTo(725, 130);
    context.lineTo(725, 140);
    context.moveTo(725, 150);
    context.lineTo(725, 200);
    context.stroke();

    //s
    context.beginPath();
    context.strokeStyle = 'black';
    context.moveTo(890, 135);
    context.lineTo(830, 135);
    context.lineTo(830, 165);
    context.lineTo(885, 165);
    context.lineTo(885, 195);
    context.lineTo(825, 195);
    context.stroke();
}