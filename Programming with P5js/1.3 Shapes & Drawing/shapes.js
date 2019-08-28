var randParam1;
var randParam2;
var randParam3;
var scale;

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(220, 0, 200);
    for (var i = 100; i > 0; i--) {
        scale = i*2;
        generateRands();
        circle(randParam1, randParam2, randParam3);
    }
    noloop();
}

function generateRands() {
    randParam1 = Math.random()*scale;
    //document.write(randParam1, "\n");
    randParam2 = Math.random()*scale;
    //document.write(randParam2, "\n");
    randParam3 = Math.random()*scale;
    //document.write(randParam3, "\n");
}