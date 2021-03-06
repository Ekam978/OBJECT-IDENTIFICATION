img = "";
status ="";

function preload() {
    img = loadImage("desk.jpg");
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
    text("Desk", 420 , 140);
    noFill();
    stroke("#FF0000");
    rect(20,120,440,260);

    fill("#FF0000");
    text("Laptop" , 180 , 70);
    noFill();
    stroke("#FF0000");
    rect(160,50,170,100);
    
    fill("#FF0000");
    text("Books" , 40 , 150);
    noFill();
    stroke("#FF0000");
    rect(30,130,120,40);
}