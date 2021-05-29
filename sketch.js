const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg;

function preload() {
    bg = loadImage("sunrise1.png")
    getBackgroundImg()
}

function setup() {
    var canvas = createCanvas(1200, 700);
    engine = Engine.create();
    world = engine.world;

}

function draw() {
    background(bg)

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg() {

    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON = await response.json()
    var datetime = responseJSON.datetime;
    var hr = datetime.slice(11, 13)
    console.log(hr);


    // add conditions to change the background images from sunrise to sunset
    if (hr > 6 && hr < 8) {
        bg = loadImage("sunrise1.png")
    }
    else if (hr > 8 && hr < 10) {
        bg = loadImage("sunrise2.png")
    }
    else if (hr > 10 && hr < 12) {
        bg = loadImage("sunrise3.png")
    }
    else if (hr > 12 && hr < 14) {
        bg = loadImage("sunrise4.png")
    }
    else if (hr > 14 && hr < 16) {
        bg = loadImage("sunrise5.png")
    }
    else if (hr > 16 && hr < 18) {
        bg = loadImage("sunrise6.png")
    }
    else if (hr > 18 && hr < 20) {
        bg = loadImage("sunset7.png")
    }
    else if (hr > 20 && hr < 22) {
        bg = loadImage("sunset8.png")
    }
    else if (hr > 22 && hr < 0) {
        bg = loadImage("sunset9.png")
    }
    else if (hr > 0 && hr < 3) {
        bg = loadImage("sunset10.png")
    }
    else if (hr > 3 && hr < 6) {
        bg = loadImage("sunset11.png")
    }
    else if (hr > 6 && hr < 8) {
        bg = loadImage("sunset12.png")
    }
}