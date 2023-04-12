//variables
let maincanvas; 
let map;
let exitButton;
let button1;
let button2;
let infoBox;
let artistsCanvas;
let canvasActive = false;
let hideallpins = true;


//celebrate
const fireworks = [];
let gravity;
let celebrate = false;

let palms;
let palmsImg;
let d2;
let gym;
let baraha;
let marketplace;
let artscenter;
let artists

let pinpoints = [];
let currentPinpoint = 0;

let mapX;
let mapY;
let mapH;
let mapW;

let palmsAudio;
let gymAudio;
let artsAudio;
let barahaAudio;
let mpAudio;
let d2Audio;
let song1;
let song2;

let fireworksound;

let amplitude;

let canvasY;
let canvasX;
function preload(){
  palmsAudio = loadSound("sounds/palms.mp3");
  d2Audio = loadSound("sounds/d2.mp3");
  barahaAudio = loadSound("sounds/Baraha.mp3");
  mpAudio = loadSound("sounds/MP.mp3");
  gymAudio = loadSound("sounds/Gym.mp3");
  artsAudio = loadSound("sounds/artscenter.m4a");
  song1 = loadSound("sounds/jiire.mp3");
  song2 = loadSound("sounds/Yerk.mp3");
  fireworksound = loadSound("sounds/firework.mp3");
}

function setup() {
  
  //create canvas element
  maincanvas = createCanvas(1440, 747);
  background(255);
  

  //canvas x and y positions
  canvasX = maincanvas.position().x;
  canvasY = maincanvas.position().y;
  
  mapW = 1100;
  mapH = 550;
  //map image on canvas
  map = createImg("images/campus_map.jpeg", "image_of_campus_map");
  map.size(mapW, mapH);
  map.position(canvasX+ 50, 150 + canvasY);
  
  mapX = map.position().x;
  mapY = map.position().y;
  
  //pinpoint on the map;
  //palms
  palmsImg = createImg("images/palms.png", "image_of_palms");
  palms = createImg("images/pinpoint.png", "point_of_palms");
  palms.size(70, 80);
  palmsImg.size(60, 60);
  palms.position(mapX + mapW/2 - 90, mapY + mapH/2 - 30);
  palmsImg.position(mapX + mapW/2 - 90, mapY + mapH/2 + 20);
  palms.mousePressed(palmsinferface);
  
  
  
  //baraha
  baraha = createImg("images/pinpoint.png", "point_of_baraha");
  baraha.size(70, 80);
  baraha.position(mapX + mapW/2 - 20, mapY + mapH/2 - 140);
  baraha.mousePressed(barahainferface);
  baraha.hide();
  
  //marketplace
  marketplace = createImg("images/pinpoint.png", "point_of_marketplace");
  marketplace.size(70, 80);
  marketplace.position(mapX + mapW/2 - 160, mapY + mapH/2 - 140);
  marketplace.mousePressed(mpinferface);
  marketplace.hide();
  
  //gym
  gym = createImg("images/pinpoint.png", "point_of_gym");
  gym.size(70, 80);
  gym.position(mapX + mapW/2 - 90, mapY + mapH/2 - 180);
  gym.mousePressed(gyminferface);
  gym.hide();
  
  //d2
  d2 = createImg("images/pinpoint.png", "point_of_d2");
  d2.size(70, 80);
  d2.position(mapX + mapW/2 + 280, mapY + mapH/2 - 60);
  d2.mousePressed(d2inferface);
  d2.hide();
  
  //artscenter
  artscenter = createImg("images/pinpoint.png", "point_of_palms");
  artscenter.size(70, 80);
  artscenter.position(mapX + mapW/2 + 210, mapY + mapH/2 - 170);
  artscenter.mousePressed(artsinferface);
  artscenter.hide();
  
  /*artists = createImg("images/blue.png", "point_of_palms");
  artists.size(40, 50);
  artists.position(mapX + mapW/2 + 280, mapY + mapH/2 - 120);
  artists.mousePressed(artistsinterface);
  artists.hide();*/
  
  header = createP('Popular Student Venues On Campus');
  header.position(canvasX+ 60, canvasY+10);
  header.style("width: 1000px");
  header.style("font-size: 45px");

  instruction = createP('Click on the pinpoint to begin audio tour');
  instruction.position(canvasX+1180, canvasY+140);
  instruction.style("width: 200px");
  instruction.style("font-size: 20px");
  instruction.style("color: #2158F7");
  instruction.style("height: 100px");
  instruction.style("padding: 15px");
  instruction.style("background-color: #d8d8d7");
  
  infoBox = createP('Ready whenever you are!');
  infoBox.position(canvasX+1180, canvasY+300);
  infoBox.style("width: 200px");
  infoBox.style("height: 300px");
  infoBox.style("background-color: #d8d8d7");
  infoBox.style("padding: 15px");
  infoBox.style("font-size: 20px");
  infoBox.style("z-index: 5");
  
}

function draw() {
  if(celebrate){
    clear();
    colorMode(RGB);
    background(0,0,0, 200);
    if (random(1) < 0.04) {
      fireworks.push(new Firework());
    }
    
    for (let i = fireworks.length - 1; i >= 0; i--) {
      fireworks[i].update();
      fireworks[i].show();
      
      if (fireworks[i].done()) {
        fireworks.splice(i, 1);
      }
    }

  }
}

function palmsinferface(){
  // Create a new canvas at the position of the palms image
  let palmsCanvas = createCanvas(1440, 747);
  background(200,200, 200,200);
  palmsCanvas.style("z-index: 1");
  //palmsCanvas.position(mapX + mapW/2- 300, mapY + mapH/2 - 300);
  palmsCanvas.position(canvasX, canvasY);
  canvasActive = true;
  

  let img = createImg("images/palms.jpg", "image_of _palms");
  img.style("z-index: 2");
  img.position(canvasX+10, canvasY + 50);
  img.size(1000, 667);
  
  // Play the palms audio
  palmsAudio.play();
  infoBox.html("John Sexton Square (Palms)");
  
  exitButton = createButton("EXIT");
  exitButton.style("z-index: 2");
  exitButton.style("width: 80px");
  exitButton.style("height: 30px");
  exitButton.style("background-color: #ff3578");
  exitButton.position(canvasX + 1300, canvasY+ 50);
  exitButton.mousePressed(() => {
    palmsAudio.stop();
    palmsCanvas.remove();
    hidepins()
    marketplace.show();
    exitButton.remove();
    img.remove();
    infoBox.html("If food is art, then Marketplace is the Louvre of dining halls.")
    mainCanvas();
    canvasActive= false;
  });
  
  if(canvasActive){
    palmsTimeout = setTimeout(function() {
      palmsCanvas.remove();
      hidepins()
      marketplace.show();
      infoBox.html("If food is art, then Marketplace is the Louvre of dining halls.")
      mainCanvas();
      exitButton.remove(); 
      img.remove();
      canvasActive = false;
    }, palmsAudio.duration() * 1000); 
  }
  
  palmsCanvas.remove = function() {
    clearTimeout(palmsTimeout);
  }
}

function barahainferface(){
  let barahaCanvas = createCanvas(1440, 747);
  background(200,200, 200,200);
  barahaCanvas.style("z-index: 1");
  barahaCanvas.position(canvasX, canvasY);
  canvasActive = true;
  
  
  let img = createImg("images/baraha.jpg", "image_of _palms");
  img.style("z-index: 2");
  img.position(canvasX+ 10, canvasY + 50);
  img.size(1000, 667);
  
  barahaAudio.play();
  infoBox.html("Baraha - Student Activity Center");
  
  exitButton = createButton("EXIT");
  exitButton.style("z-index: 2");
  exitButton.style("width: 80px");
  exitButton.style("height: 30px");
  exitButton.style("background-color: #ff3578");
  exitButton.position(canvasX + 1300, canvasY+ 50);
  exitButton.mousePressed(() => {
    barahaAudio.stop();
    barahaCanvas.remove();
    hidepins()
    d2.show();
    exitButton.remove();
    infoBox.html("D2 is the ultimate foodie paradise, where every meal is a gourmet experience.")
    mainCanvas();
    img.remove();
    canvasActive = false;
  });
  
  if(canvasActive){
    barahaTimeout = setTimeout(function() {
      barahaCanvas.remove();
      hidepins()
      d2.show();
      infoBox.html("D2 is the ultimate foodie paradise, where every meal is a gourmet experience.")
      mainCanvas();
      exitButton.remove();
      canvasActive = false;
      img.remove();
    }, barahaAudio.duration() * 1000); 
  }
  
  barahaCanvas.remove = function() {
    clearTimeout(barahaTimeout);
  }
}

function gyminferface(){
  
  let gymCanvas = createCanvas(1440, 747);
  background(200,200, 200,200);
  gymCanvas.style("z-index: 1");
  gymCanvas.position(canvasX, canvasY);
  canvasActive = true;
  
  let img = createImg("images/gym.jpg", "image_of _palms");
  img.style("z-index: 2");
  img.position(canvasX+ 10, canvasY + 50);
  img.size(1000, 667);
  
  gymAudio.play();

  infoBox.html("Performance Gym");
  
  exitButton = createButton("EXIT");
  exitButton.style("z-index: 2");
  exitButton.style("width: 80px");
  exitButton.style("height: 30px");
  exitButton.style("background-color: #ff3578");
  exitButton.position(canvasX + 1300, canvasY+ 50);
  exitButton.mousePressed(() => {
    gymAudio.stop();
    gymCanvas.remove();
    hidepins()
    baraha.show();
    exitButton.remove();
    infoBox.html("When it comes to socializing, Baraha is the campus hotspot. Who needs a coffee shop when you can catch up with friends over a game of pool?");
    mainCanvas();
    img.remove();
    canvasActive = false;
  });
  
  if(canvasActive){
    gymTimeout = setTimeout(function() {
      gymCanvas.remove();
      hidepins()
      baraha.show();
      infoBox.html("When it comes to socializing, tBaraha is the campus hotspot. Who needs a coffee shop when you can catch up with friends over a game of pool?");
      mainCanvas();
      exitButton.remove();
      canvasActive = false;
      img.remove();
    }, gymAudio.duration() * 1000); 
  }
  
  gymCanvas.remove = function() {
    clearTimeout(gymTimeout);
  }
}

function mpinferface(){
  let mpCanvas = createCanvas(1440, 747);
  background(200,200, 200,200);
  mpCanvas.style("z-index: 1");
  mpCanvas.position(canvasX, canvasY);
  canvasActive = true;
  
  let img = createImg("images/marketplace.jpg", "image_of _palms");
  img.style("z-index: 2");
  img.position(canvasX+ 10, canvasY + 50);
  img.size(1000, 667);
  
  mpAudio.play();
  infoBox.html("Marketplace - Urban Eatery");
  
  exitButton = createButton("EXIT");
  exitButton.style("z-index: 2");
  exitButton.style("width: 80px");
  exitButton.style("height: 30px");
  exitButton.style("background-color: #ff3578");
  exitButton.position(canvasX + 1300, canvasY+50);
  exitButton.mousePressed(() => {
    mpAudio.stop();
    mpCanvas.remove();
    hidepins()
    gym.show();
    exitButton.remove();
    infoBox.html("At the NYUAD Performance Gym, we're not just pumping iron, we're sculpting masterpieces!");
    mainCanvas();
    img.remove();
    canvasActive = false;
  });
  
  if(canvasActive){
    mpTimeout =setTimeout(function() {
      mpCanvas.remove();
      hidepins()
      gym.show();
      infoBox.html("At the NYUAD Performance Gym, we're not just pumping iron, we're sculpting masterpieces!");
      mainCanvas();
      exitButton.remove();
      canvasActive = false;
      img.remove();
    }, mpAudio.duration() * 1000); 
  }
  
  mpCanvas.remove = function() {
    clearTimeout(mpTimeout);
  }
}

function d2inferface(){
  let d2Canvas = createCanvas(1440, 747);
  background(200,200, 200,200);
  d2Canvas.style("z-index: 1");
  d2Canvas.position(canvasX, canvasY);
  canvasActive = true;
  
  let img = createImg("images/d2.jpg", "image_of _palms");
  img.style("z-index: 2");
  img.position(canvasX+ 10, canvasY + 50);
  img.size(1000, 667);
  

  d2Audio.play();
  infoBox.html("D2 - East Dining Hall");
  
  exitButton = createButton("EXIT");
  exitButton.style("z-index: 2");
  exitButton.style("width: 80px");
  exitButton.style("height: 30px");
  exitButton.style("background-color: #ff3578");
  exitButton.position(canvasX + 1300, canvasY+ 50);
  exitButton.mousePressed(() => {
    d2Audio.stop();
    d2Canvas.remove();
    hidepins()
    artscenter.show();
    exitButton.remove();
    infoBox.html("The earth without art is just 'eh'.");
    mainCanvas();
    img.remove();
    canvasActive = false;
  });
  
  if(canvasActive){
    d2Timeout = setTimeout(function() {
      d2Canvas.remove();
      hidepins()
      artscenter.show();
      infoBox.html("The earth without art is just 'eh'.");
      mainCanvas();
      exitButton.remove();
      canvasActive = false;
      img.remove();
    }, d2Audio.duration() * 1000); 
  }
  
  d2Canvas.remove = function() {
    clearTimeout(d2Timeout);
  }
}

function artsinferface(){
  let artsCanvas = createCanvas(1440, 747);
  background(200,200, 200,200);
  artsCanvas.style("z-index: 1");
  artsCanvas.position(canvasX, canvasY);
  canvasActive = true;
  
  let img = createImg("images/arts.jpg", "image_of _palms");
  img.style("z-index: 2");
  img.position(canvasX+ 10, canvasY + 50);
  img.size(1000, 667);
  
  artsAudio.play();
  infoBox.html("Arts Center");

  
  exitButton = createButton("NEXT");
  exitButton.style("z-index: 2");
  exitButton.style("width: 80px");
  exitButton.style("height: 30px");
  exitButton.style("background-color: #0000ff");
  exitButton.position(canvasX + 1300, canvasY+ 50);
  exitButton.mousePressed(() => {
    artsAudio.stop();
    artsCanvas.remove();
    hidepins()
    exitButton.remove();
    infoBox.html("Student Music Recordings.");
    mainCanvas();
    img.remove();
    canvasActive = false;
    artistsinterface();
  });


  if(canvasActive){
    artsTimeout = setTimeout(function() {
      artsCanvas.remove();
      mainCanvas();
      exitButton.remove();
      exitButton.remove();
      canvasActive = false;
      artistsinterface();
      img.remove();
    }, artsAudio.duration() * 1000); 
  }
  
  artsCanvas.remove = function() {
    clearTimeout(artsTimeout);
  }
}


function artistsinterface(){
  artistsCanvas = createCanvas(800, 650);
  background(200,200, 200,180);
  artistsCanvas.style("z-index: 1");
  artistsCanvas.position(canvasX+ 300, canvasY+ 50);
  
  infoBox.html("Student Music Recordings");

  let img = createImg("images/Jiire.png", "image_of _palms");
  img.style("z-index: 2");
  img.position(artistsCanvas.position().x + 50, canvasY + 200);
  img.size(300, 300);

  let img2 = createImg("images/Yerk.png", "image_of _palms");
  img2.style("z-index: 2");
  img2.position(artistsCanvas.position().x + 450, canvasY + 200);
  img2.size(300, 300);

  
  button1 = createButton('19 - Jiire');
  button1.style("z-index: 2");
  button1.style("width: 220px");
  button1.style("height: 50px");
  button1.style("background-color: #ff2399");
  button1.position(artistsCanvas.position().x + 80, artistsCanvas.position().y+ 550);
  button1.mousePressed(() => {
    if (song1.isPlaying()) {
      song1.pause();
    } else {
      song1.play();
      song2.pause();
    }
  });
  
  button2 = createButton('Disco - Yerk');
  button2.style("z-index: 2");
  button2.style("width: 220px");
  button2.style("height: 50px");
  button2.style("background-color: #00ff00");
  button2.position(artistsCanvas.position().x + 500, artistsCanvas.position().y+ 550);
  button2.mousePressed(() => {
    if (song2.isPlaying()) {
      song2.pause();
    } else {
      song2.play();
      song1.pause()
    }
  });
  
  exitButton = createButton("Exit");
  exitButton.style("z-index: 2");
  exitButton.style("width: 50px");
  exitButton.style("background-color: #ff0000");
  exitButton.position(artistsCanvas.position().x + 700, artistsCanvas.position().y+ 10);
  exitButton.mousePressed(() => {
    artistsCanvas.remove();
    exitButton.remove();
    button1.remove();
    button2.remove();
    mainCanvas();
    song1.stop();
    song2.stop();
    img.remove();
    img2.remove();
    if(hideallpins == true){
      celebration();
    }
    infoBox.html("You made it to the end. Hurray! <br><br> Click 'Explore' to see all locations  <br><br>'Tour' to start the tour");
    
  });
  
  
}

function mainCanvas(){
  maincanvas = createCanvas(1440, 747);
  maincanvas.position(canvasX, canvasY);
  maincanvas.style("z-index: -2");
  background(255);
}

function hidepins(){
  if(hideallpins){
    d2.hide();
    gym.hide();
    baraha.hide();
    marketplace.hide();
    artscenter.hide();
    palms.hide();
  }
}


function exploreFunction() {
  hideallpins = false;
  d2.show();
  gym.show();
  baraha.show();
  marketplace.show();
  artscenter.show();
  palms.show();
  infoBox.html("Time to explore the various locations!");
  colorMode(RGB);
}

function tourFunction(){
  hideallpins = true;
  d2.hide();
  gym.hide();
  baraha.hide();
  marketplace.hide();
  artscenter.hide();
  palms.show();
  colorMode(RGB);
  infoBox.html("Ready whenever you are!");
}


function celebration(){
  artistsCanvas = createCanvas(windowWidth, windowHeight);
  background(0,0, 0,200);
  artistsCanvas.style("z-index: 6");
  artistsCanvas.position(canvasX, canvasY);
  colorMode(HSB);
  gravity = createVector(0, 0.099);
  stroke(255);
  strokeWeight(7);
  celebrate = true;

  header = createP('Hurray! Done With The Tour!');
  header.position(artistsCanvas.position().x + 500, artistsCanvas.position().y +300);
  header.style("width: 1000px");
  header.style("color: white");
  header.style("z-index: 6");
  header.style("font-size: 35px");

  fireworksound.loop();
  exitButton = createButton("EXIT");
  exitButton.style("z-index: 6");
  exitButton.style("width: 80px");
  exitButton.style("height: 30px");
  exitButton.style("background-color: #ff3578");
  exitButton.position(canvasX + 1300, canvasY+ 50);
  exitButton.mousePressed(() => {
    fireworksound.stop();
    artistsCanvas.remove();
    celebrate = false;
    header.remove();
    mainCanvas();
    exitButton.remove();
  });
  

}


//fireworks
// Daniel Shiffman
// http://codingtra.in
// https://youtu.be/CKeyIbT3vXI

class Firework {
  constructor() {
    this.hu = random(255);
    this.firework = new Particle(random(width), height, this.hu, true);
    this.exploded = false;
    this.particles = [];
  }

  done() {
    if (this.exploded && this.particles.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  update() {
    if (!this.exploded) {
      this.firework.applyForce(gravity);
      this.firework.update();

      if (this.firework.vel.y >= 0) {
        this.exploded = true;
        this.explode();
      }
    }

    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].applyForce(gravity);
      this.particles[i].update();

      if (this.particles[i].done()) {
        this.particles.splice(i, 1);
      }
    }
  }

  explode() {
    for (let i = 0; i < 100; i++) {
      const p = new Particle(this.firework.pos.x, this.firework.pos.y, this.hu, false);
      this.particles.push(p);
    }
  }

  show() {
    if (!this.exploded) {
      this.firework.show();
    }

    for (var i = 0; i < this.particles.length; i++) {
      this.particles[i].show();
    }
  }
}


//particles
// Daniel Shiffman
// http://codingtra.in
// https://youtu.be/CKeyIbT3vXI

class Particle {
  constructor(x, y, hu, firework) {
    this.pos = createVector(x, y);
    this.firework = firework;
    this.lifespan = 255;
    this.hu = hu;
    this.acc = createVector(0, 0);
    if (this.firework) {
      this.vel = createVector(0, random(-12, -8));
    } else {
      this.vel = p5.Vector.random2D();
      this.vel.mult(random(2, 10));
    }
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    if (!this.firework) {
      this.vel.mult(0.9);
      this.lifespan -= 4;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  done() {
    if (this.lifespan < 0) {
      return true;
    } else {
      return false;
    }
  }

  show() {
    colorMode(HSB);

    if (!this.firework) {
      strokeWeight(2);
      stroke(this.hu, 255, 255, this.lifespan);
    } else {
      strokeWeight(4);
      stroke(this.hu, 255, 255);
    }

    point(this.pos.x, this.pos.y);
  }
}