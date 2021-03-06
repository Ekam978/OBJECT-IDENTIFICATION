img = "";
status ="";

function preload() {
    img = loadImage("background.jpg");
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
    text("Bed", 260 , 200);
    noFill();
    stroke("#FF0000");
    rect(240,180,380,220);

    fill("#FF0000");
    text("Desk" , 40 , 120);
    noFill();
    stroke("#FF0000");
    rect(20,100,250,300);
    
    fill("#FF0000");
    text("Chair" , 60 , 220);
    noFill();
    stroke("#FF0000");
    rect(40,200,120,200);
}