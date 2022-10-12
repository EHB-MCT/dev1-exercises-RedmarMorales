"use strict";
drawSunset();

function drawSunset() {
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    let canvasWidth = context.canvas.width;
    let canvasHeight = context.canvas.height;

    context.fillStyle = "yellow";
    context.fillRect(0, 0, canvasWidth, canvasHeight / 4);
    context.fillStyle = "orange";
    context.fillRect(0, canvasHeight / 4, canvasWidth, canvasHeight / 4);
    context.fillStyle = "red";
    context.fillRect(0, canvasHeight / 2, canvasWidth, canvasHeight / 4);
    context.fillStyle = "blue";
    context.fillRect(0, canvasHeight * 3 / 4, canvasWidth, canvasHeight / 4);
    context.fillStyle = "white";
    context.arc(canvasWidth / 2, canvasHeight * 3 / 4, canvasWidth / 4, Math.PI, 0);
    context.fill();
}