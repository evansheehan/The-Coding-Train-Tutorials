var randParam1;
var randParam2;
var randParam3;
var scale;
var red;
var green;
var blue;

function setup() {
    createCanvas(500, 500);
    red = getRandomInt(0, 50);
    green = getRandomInt(0, 50);
    blue = getRandomInt(0, 50);
}

function draw() {
    background(red, green, blue);
    for (var i = 100; i > 0; i--) {
        scale = i*2;
        generateRands();
        fill(red, green, blue);
        circle(randParam1, randParam2, randParam3);
    }
    noloop();
}

function generateRands() {
    randParam1 = Math.random()*scale;
    randParam2 = Math.random()*scale;
    randParam3 = Math.random()*scale;

    red = getRandomInt(0, 255);
    green = getRandomInt(0, 255);
    blue = getRandomInt(0, 255);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}