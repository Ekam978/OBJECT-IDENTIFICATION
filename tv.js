img = "";
status ="";

function preload() {
    img = loadImage("tv.jpg");
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
    text("Television", 150 , 95);
    noFill();
    stroke("#FF0000");
    rect(145,80,350,250);

    fill("#FF0000");
    text("Pot" , 520 , 220);
    noFill();
    stroke("#FF0000");
    rect(510,200,80,170);
    
    fill("#FF0000");
    text("Books" , 30 , 330);
    noFill();
    stroke("#FF0000");
    rect(10,310,120,60);
}