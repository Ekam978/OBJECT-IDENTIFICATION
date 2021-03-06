img = "";
status ="";

function preload() {
    img = loadImage("bottle 1.jpg");
}

function setup() {
    canvas = createCanvas(470,420);
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
    image(img,0,0,470,420);
    fill("#FF0000");
    text("Yellow Bottle", 300 , 80);
    noFill();
    stroke("#FF0000");
    rect(280,60,120,320);

    fill("#FF0000");
    text("Blue Bottle" , 180 , 70);
    noFill();
    stroke("#FF0000");
    rect(160,50,120,340);
    
    fill("#FF0000");
    text("Books" , 60 , 80);
    noFill();
    stroke("#FF0000");
    rect(40,50,120,320);
}