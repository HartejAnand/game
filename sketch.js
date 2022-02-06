var gameState = "home";
var home;
var how;
var settings;
var game;
var end;

var title, titleI;
var howB, playB, settingsB;
var howI, playI, settingsI;
var playHover=0;
var playTilt=2;

var howBack, settingBack, endBack;
var back, back2;

var gameT=60;

var aim;

var redStar,yellowStar,orangeStar,whiteStar;
var asteroid1,asteroid2,asteroid3,asteroid4,asteroid5;
var ufo1,ufo2,ufo3,ufo4;
var rocket;
var ice;
var shootingStar;

var shuttleG;
var shuttleG1;
var shuttleG2;
var shuttleG3;
var asteroidG;
var asteroidG1;
var asteroidG2;
var asteroidG3;
var ufoG;
var ufoG1;
var ufoG2;
var ufoG3;
var cometG;
var cometG1;
var cometG2;
var cometG3;
var starG;
var starG1;
var starG2;
var starG3;
var explosion, boom;

var projectile;
var freeze=false;
var frozen=150;
var doublePoints=false;
var shot=false;
var score=0;
var time=60;
var Time=30;

var selectTime, time1, time2, time3;
var gameTime, sixty, oneTwenty, threehundered, sixtySelect, oneTwentySelect, threehunderedSelect;
var playTime=1;

var message="";
var mesagePicked=false;
var veryBad=["Don't hit the allies!","Shoot the enemy","...", "I was in one of those ships","I'll pretend I didn't see that"];
var zero=["you did read how, right?", "click to shoot", "afk? sorry, you can't pause"];
var bad=["Practice makes perfect","You can do it, next time","Read an insperational quote\nand come back","better than nothing!"];
var ok=["Beter than nothing","close","one more time!"];
var good=["Pretty good","nice job!","give yourself a sticker"];
var veryGood=["AWSOME","pretend you have a medal","Meh","ask you parents for ice cream","I give ye bragging rights"];

function preload() {
  titleI=loadImage("title.png");
  howI=loadImage("how.png");
  playI=loadImage("play.png");
  settingsI=loadImage("settings.png");
  back=loadImage("back.png");
  back2=loadImage("back2.png");

  aim=loadImage("aim.png");

  gameTime=loadImage("gameTime.png");
  sixty=loadImage("60.png");
  sixtySelect=loadImage("60Select.png");
  oneTwenty=loadImage("120.png");
  oneTwentySelect=loadImage("120Select.png");
  threehundered=loadImage("300.png");
  threehunderedSelect=loadImage("300Select.png");

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

  boom=loadAnimation("explosion1.png","explosion2.png","explosion3.png","explosion4.png","explosion5.png","explosion6.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  home=new Home();
  how=new How();
  settings=new Settings();
  game=new Game();
  end=new End();
  
  projectile=createSprite(mouseX,mouseY,windowWidth/100,windowWidth/100);
  projectile.addImage(aim);
  projectile.scale=windowWidth/20000;
  projectile.debug=true;
  projectile.setCollider("circle",0,0,windowWidth/10);
  
  shuttleG=new Group();
  shuttleG2=new Group();
  shuttleG3=new Group();
  asteroidG=new Group();
  asteroidG2=new Group();
  asteroidG3=new Group();
  ufoG=new Group();
  ufoG2=new Group();
  ufoG3=new Group();
  cometG=new Group();
  cometG2=new Group();
  cometG3=new Group();
  starG=new Group();
  starG2=new Group();
  starG3=new Group();
  explosionG=new Group();
}

function draw() {
  cursor("crosshair");
  projectile.x=mouseX;
  projectile.y=mouseY;
  
  console.log(gameState);
  
  if(gameState==="home"){
    home.display();

    how.hide();
    game.hide();
    end.hide();
    settings.hide();
  };

  if(gameState==="how"){
    how.display();

    home.hide();
    game.hide();
    end.hide();
    settings.hide();
  };

  if(gameState==="settings"){
    settings.display();

    home.hide();
    game.hide();
    end.hide();
    how.hide();
  };

  if(gameState==="game"){
    game.display();

    how.hide();
    home.hide();
    end.hide();
    settings.hide();

    //ufo
    if(frameCount%100===0){
      game.UFO();
    }
    if(shot===true && projectile.isTouching(ufoG) &&  doublePoints===false){
      score+=7;
      game.Explosion();
      ufoG.destroyEach();
    }
    if(shot===true && projectile.isTouching(ufoG) && doublePoints===true){
      score+=14;
      doublePoints=false;
      game.Explosion();
      ufoG.destroyEach();
  }

    //asteroid
    if(frameCount%70===0){
      game.Asteroid();
    }
    if(shot===true && projectile.isTouching(asteroidG) && doublePoints===false){
      score+=3;
      game.Explosion();
      asteroidG.destroyEach();
  }
    if(shot===true && projectile.isTouching(asteroidG) && doublePoints===true){
      score+=6;
      doublePoints=false;
      game.Explosion();
      asteroidG.destroyEach();
  }

  //shuttle
    if(frameCount%80===0){
      game.Shuttle();
    }
    if(shot===true && projectile.isTouching(shuttleG) && doublePoints===false){
      score=score-7;
      game.Explosion();
      shuttleG.destroyEach();
    }
  if(shot===true && projectile.isTouching(shuttleG) && doublePoints===true){
    score=score-14;
      doublePoints=false;
      game.Explosion();
      shuttleG.destroyEach();
  }

  //comet
    if(frameCount%85===0){
      game.Comet();
    }
    if(shot===true && projectile.isTouching(cometG)){
      freeze=true;
      frozen=200;
      game.Explosion();
      cometG.destroyEach();
    }

  //shooting star
    if(frameCount%115===0){
      game.ShootingStar();
    }
    if(shot===true && projectile.isTouching(starG)){
      doublePoints=true;
      game.Explosion();
      game.Explosion();
      game.Explosion();
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

    home.hide();
    how.hide();
    game.hide();
    settings.hide();
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
