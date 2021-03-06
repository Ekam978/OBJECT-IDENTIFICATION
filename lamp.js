img = "";
status ="";

function preload() {
    img = loadImage("lamp.jpg");
}

function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object";
}


function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error , results) {
    if (error) {
        console.error(error);
    }
    console.log(results);
}

function draw() {
    image(img,0,0,640,420);
    fill("#FF0000");
    text("Lamp", 320 , 50);
    noFill();
    stroke("#FF0000");
    rect(300,30,150,300);

    fill("#FF0000");
    text("Pot" , 150 , 210);
    noFill();
    stroke("#FF0000");
    rect(130,190,80,80);
    
    fill("#FF0000");
    text("Books" , 100 , 275);
    noFill();
    stroke("#FF0000");
    rect(90,255,120,60);
    
    fill("#FF0000");
    text("Cup" , 220 , 265);
    noFill();
    stroke("#FF0000");
    rect(190,245,80,80);
}