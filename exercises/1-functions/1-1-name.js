"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawName();

function drawName() {
    context.lineWidth = 8;

    //r
    context.beginPath();
    context.strokeStyle = 'red';
    context.moveTo(50, 25);
    context.lineTo(50, 180);
    context.lineTo(50, 25);
    context.lineTo(150, 50);
    context.lineTo(58, 100);
    context.lineTo(150, 175);
    context.stroke();

    //e
    context.beginPath();
    context.strokeStyle = 'blue';
    context.moveTo(180, 140);
    context.lineTo(220, 100);
    context.lineTo(260, 140);
    context.lineTo(182, 140);
    context.moveTo(182, 140);
    context.lineTo(220, 180);
    context.lineTo(250, 180);
    context.stroke();

    //d
    context.beginPath();
    context.strokeStyle = 'green';
    context.moveTo(380, 25);
    context.lineTo(380, 180);
    context.lineTo(300, 140);
    context.lineTo(380, 100);
    context.stroke();

    //m
    context.beginPath();
    context.strokeStyle = 'orange';
    context.moveTo(440, 100);
    context.lineTo(440, 186);
    context.moveTo(440, 120);
    context.lineTo(500, 120);
    context.moveTo(500, 120);
    context.lineTo(520, 185);
    context.moveTo(500, 120);
    context.lineTo(580, 120);
    context.moveTo(580, 120);
    context.lineTo(610, 185);
    context.stroke();

    //a
    context.beginPath();
    context.strokeStyle = 'yellow';
    context.moveTo(720, 100);
    context.lineTo(740, 180);
    context.moveTo(740, 160);
    context.lineTo(690, 180);
    context.moveTo(690, 180);
    context.lineTo(650, 140);
    context.moveTo(650, 140);
    context.lineTo(690, 110);
    context.moveTo(690, 110);
    context.lineTo(720, 120);
    context.stroke();

    //r
    context.beginPath();
    context.strokeStyle = 'purple';
    context.moveTo(800, 100);
    context.lineTo(800, 185);
    context.moveTo(800, 120);
    context.lineTo(830, 110);
    context.moveTo(830, 110);
    context.lineTo(860, 120);
    context.stroke();
}