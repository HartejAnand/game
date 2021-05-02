var gameState = "game";
var home;
var how;
var game;
var end;

var aim;

var redStar,yellowStar,orangeStar,whiteStar;
var asteroid1,asteroid2,asteroid3,asteroid4,asteroid5;
var ufo1,ufo2,ufo3,ufo4;
var rocket;
var ice;
var shootingStar;

var shuttleG;
var asteroidG;
var ufoG;
var cometG;
var starG;

var projectile;
var freeze=false;
var frozen=150;
var doublePoints=false;
var shot=false;
var score=0;
var time=60;
var Time=30;

function preload() {

  aim=loadImage("aim.png");

  redStar=loadImage("redStar.png");
  orangeStar=loadImage("orangeStar.png");
  yellowStar=loadImage("yellowStar.png");
  whiteStar=loadImage("whiteStar.png");
  
  asteroid1=loadImage("asteroid1.png");
  asteroid2=loadImage("asteroid2.png");
  asteroid3=loadImage("asteroid3.png");
  asteroid4=loadImage("asteroid4.png");
  asteroid5=loadImage("asteroid5.png");

  ufo1=loadImage("ufo1.png");
  ufo2=loadImage("ufo2.png");
  ufo3=loadImage("ufo3.png");
  ufo4=loadImage("ufo4.png");
  
  rocket=loadAnimation("shuttle7.png","shuttle6.png","shuttle5.png","shuttle4.png","shuttle3.png","shuttle2.png","shuttle1.png");

  ice=loadAnimation("comet1.png","comet2.png","comet3.png","comet4.png","comet5.png");

  shootingStar=loadImage("shootingStar.png")

}

function setup() {
  createCanvas(windowWidth,windowHeight);

  home=new Home();
  how=new How();
  game=new Game();
  end=new End();
  
  projectile=createSprite(mouseX,mouseY,windowWidth/100,windowWidth/100);
  projectile.addImage(aim);
  projectile.scale=windowWidth/20000;
  projectile.debug=true;
  //projectile.setCollider("circle",0,0,windowWidth/10);
  projectile.setCollider("circle",0,0,windowWidth/5);

  shuttleG=new Group();
  asteroidG=new Group();
  ufoG=new Group();
  cometG=new Group();
  starG=new Group();

}

function draw() {
  cursor("crosshair");
  console.log(gameState);
  if(gameState==="home"){
    home.display();
    how.hide();
  };

  if(gameState==="how"){
    how.display();
    home.hide();
  };

  if(gameState==="game"){
    game.display();

    projectile.x=mouseX;
    projectile.y=mouseY;


    //ufo
    if(frameCount%100===0){
      game.UFO();
    }
    if(shot===true && ufoG.isTouching(projectile) && doublePoints===false){
      score+=7;
      ufoG.destroyEach();
  }
  if(shot===true && ufoG.isTouching(projectile) && doublePoints===true){
      score+=14;
      doublePoints=false;
      ufoG.destroyEach();
  }

    //asteroid
    if(frameCount%70===0){
      game.Asteroid();
    }
    if(shot===true && asteroidG.isTouching(projectile) && doublePoints===false){
      score+=3;
      asteroidG.destroyEach();
  }
  if(shot===true && asteroidG.isTouching(projectile) && doublePoints===true){
      score+=6;
      doublePoints=false;
      asteroidG.destroyEach();
  }

  //shuttle
    if(frameCount%80===0){
      game.Shuttle();
    }
    if(shot===true && shuttleG.isTouching(projectile) && doublePoints===false){
      score=score-7;
      shuttleG.destroyEach();
  }
  if(shot===true && shuttleG.isTouching(projectile) && doublePoints===true){
      score=score-14;
      doublePoints=false;
      shuttleG.destroyEach();
  }

  //comet
    if(frameCount%85===0){
      game.Comet();
    }
    
    if(shot===true && cometG.isTouching(projectile)){
      freeze=true;
      frozen=200;
      cometG.destroyEach();
  }

  //shooting star
    if(frameCount%115===0){
      game.ShootingStar();
    }
    if(shot===true && starG.isTouching(projectile)){
      doublePoints=true;
      starG.destroyEach();
  }

    Time--;
    if(Time<0){
      time-=1;
      Time=30;
    }
    if(time===0){
      gameState="end";
    }
  }

  if(gameState==="end"){
    end.display();
  }


  drawSprites()

  frozen--;
  if(freeze===true){
    background(100,100,255,240);
    if(frozen<0){
      freeze=false;
    }
  }
}
