var gameState = "home";
var home;
var how;
var settings, gameT;
var gameTime;

function preload() {

  
  
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  home=new Home();
  how=new How();
  settings=new Settings;
  
}

function draw() {
  console.log(gameState);
  if(gameState==="home"){
    home.display();
    how.hide();
  };
  if(gameState==="how"){
    how.display();
    home.hide();
  };



  drawSprites()
}
