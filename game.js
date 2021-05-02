class Game{
    constructor(){
        //star
            for(var s=0;s<100;s++){
            var star=createSprite(random(0,windowWidth),random(0,windowHeight),windowWidth/150,windowWidth/150);
            var type=floor(random(0,4));
            switch(type){
                case 0:
                    star.addImage(redStar);
                    star.scale=random(windowWidth/90000,windowWidth/110000);
                break;
                case 1:
                    star.addImage(orangeStar);
                    star.scale=random(windowWidth/90000,windowWidth/110000);
                break;
                case 2:
                    star.addImage(yellowStar);
                    star.scale=random(windowWidth/90000,windowWidth/110000);
                break;
                case 3:
                    star.addImage(whiteStar);
                    star.scale=random(windowWidth/90000,windowWidth/110000);
                default: break;
            }
            }
        
    };
    display(){
        background(0,0,0);
        noStroke();
        fill(255,255,255);
        textSize(windowWidth/50);
        text("Score: "+score,windowWidth/100,windowHeight/20);
        text("Time: "+time,windowWidth*4.4/5,windowHeight/20);

        if(mouseIsPressed && freeze===false){
            cursor("cell");
            shot=true;
        }
        else{
            shot=false;
        }

    
    };
    

    //space shuttles
    Shuttle=function(){
        var shuttle=createSprite(0,0,200,100);
        shuttle.shapeColor=rgb(255,255,255);
        shuttle.addAnimation("rocket",rocket);
        shuttle.scale=random(windowWidth/5000,windowWidth/10000);

        var spot=floor(random(0,4));
        switch(spot){
            case 0:
                shuttle.x=random(0,windowWidth);
                shuttle.y=-25;
                shuttle.velocityX=random(-10,10);
                shuttle.velocityY=random(5,10);
                shuttle.rotation=-90-shuttle.velocityX*2;
                if(shuttle.x<0 || shuttle.x>windowWidth || shuttle.y>windowHeight){
                    shuttle.lifetime=1;
                }
            break;
            case 1:
                shuttle.x=random(0,windowWidth);
                shuttle.y=windowHeight+25;
                shuttle.velocityX=random(-10,10);
                shuttle.velocityY=random(-5,-10);
                shuttle.rotation=90+shuttle.velocityX*2;
                if(shuttle.x<0 || shuttle.x>windowWidth || shuttle.y<0){
                    shuttle.lifetime=1;
                }
            break;
            case 2:
                shuttle.y=random(0,windowWidth);
                shuttle.x=-25;
                shuttle.velocityY=random(-10,10);
                shuttle.velocityX=random(5,10);
                shuttle.rotation=180+shuttle.velocityY*2;
                if(shuttle.y<0 || shuttle.y>windowHeight || shuttle.x>windowWidth){
                    shuttle.lifetime=1;
                }
            break;
            case 3:
                shuttle.y=random(0,windowWidth);
                shuttle.x=windowWidth+25;
                shuttle.velocityY=random(-10,10);
                shuttle.velocityX=random(-5,-10);
                shuttle.rotation=0-shuttle.velocityY*2;
                if(shuttle.y<0 || shuttle.y>windowHeight || shuttle.x<0){
                    shuttle.lifetime=1;
                }
            break;
            default: break;
        }
        
        shuttleG.add(shuttle);


    };

    //asteroids
    Asteroid=function(){
        var asteroid=createSprite(0,0);
        asteroid.shapeColor=rgb(100,100,100);
        var spot=floor(random(0,4));
        switch(spot){
            case 0:
                asteroid.x=random(0,windowWidth);
                asteroid.y=-25;
                asteroid.velocityX=random(-10,10);
                asteroid.velocityY=random(5,10);
                if(asteroid.x<0 || asteroid.x>windowWidth || asteroid.y>windowHeight){
                    asteroid.lifetime=1;
                }
            break;
            case 1:
                asteroid.x=random(0,windowWidth);
                asteroid.y=windowHeight+25;
                asteroid.velocityX=random(-10,10);
                asteroid.velocityY=random(-5,-10);
                if(asteroid.x<0 || asteroid.x>windowWidth || asteroid.y<0){
                    asteroid.lifetime=1;
                }
            break;
            case 2:
                asteroid.y=random(0,windowWidth);
                asteroid.x=-25;
                asteroid.velocityY=random(-10,10);
                asteroid.velocityX=random(5,10);
                if(asteroid.y<0 || asteroid.y>windowHeight || asteroid.x>windowWidth){
                    asteroid.lifetime=1;
                }
            break;
            case 3:
                asteroid.y=random(0,windowWidth);
                asteroid.x=windowWidth+25;
                asteroid.velocityY=random(-10,10);
                asteroid.velocityX=random(-5,-10);
                if(asteroid.y<0 || asteroid.y>windowHeight || asteroid.x<0){
                    asteroid.lifetime=1;
                }
            break;
            default: break;
        }
        var rock=floor(random(0,5));
        switch(rock){
            case 0:
                asteroid.addImage(asteroid1);
                asteroid.scale=random(windowWidth/8000,windowWidth/12000);
                asteroid.setCollider("rectangle",0,0,asteroid.width*4/5,asteroid.height*4/5);
            break;
            case 1:
                asteroid.addImage(asteroid2);
                asteroid.scale=random(windowWidth/8000,windowWidth/12000);
                asteroid.setCollider("rectangle",asteroid.width/15,0,asteroid.width/1.5,asteroid.height*1/1.5);
            break;
            case 2:
                asteroid.addImage(asteroid3);
                asteroid.scale=random(windowWidth/8000,windowWidth/12000);
                asteroid.setCollider("rectangle",asteroid.width/25,0,asteroid.width/1.5,asteroid.height/1.5);
            break;
            case 3:
                asteroid.addImage(asteroid4);
                asteroid.scale=random(windowWidth/8000,windowWidth/12000);
                asteroid.setCollider("rectangle",asteroid.width/25,0,asteroid.width/1.5,asteroid.height/1.5);
            break;
            case 4:
                asteroid.addImage(asteroid5);
                asteroid.scale=random(windowWidth/8000,windowWidth/12000);
                asteroid.setCollider("rectangle",asteroid.width/35,asteroid.width/50,asteroid.width/1.5,asteroid.height/1.25);
            break;
            default: break;
        }

        asteroidG.add(asteroid);

    };

    //ufo's
    UFO=function(){
        var ufo=createSprite(0,0);
        ufo.shapeColor=rgb(0,255,0);
        var spot=floor(random(0,4));
        switch(spot){
            case 0:
                ufo.x=random(0,windowWidth);
                ufo.y=-25;
                ufo.velocityX=random(-10,10);
                ufo.velocityY=random(5,10);
                if(ufo.x<0 || ufo.x>windowWidth || ufo.y>windowHeight){
                    ufo.lifetime=1;
                }
            break;
            case 1:
                ufo.x=random(0,windowWidth);
                ufo.y=windowHeight+25;
                ufo.velocityX=random(-10,10);
                ufo.velocityY=random(-5,-10);
                if(ufo.x<0 || ufo.x>windowWidth || ufo.y<0){
                    ufo.lifetime=1;
                }
            break;
            case 2:
                ufo.y=random(0,windowWidth);
                ufo.x=-25;
                ufo.velocityY=random(-10,10);
                ufo.velocityX=random(5,10);
                if(ufo.y<0 || ufo.y>windowHeight || ufo.x>windowWidth){
                    ufo.lifetime=1;
                }
            break;
            case 3:
                ufo.y=random(0,windowWidth);
                ufo.x=windowWidth+25;
                ufo.velocityY=random(-10,10);
                ufo.velocityX=random(-5,-10);
                if(ufo.y<0 || ufo.y>windowHeight || ufo.x<0){
                    ufo.lifetime=1;
                }
            break;
            default: break;
        }

        var ifo=floor(random(1,4));
        switch(ifo){
            case 0:
                ufo.addImage(ufo1);
                ufo.scale=random(windowWidth/7000,windowWidth/10000);
                ufo.setCollider("circle",0,0,ufo.width/4.5);
            break;
            case 1:
                ufo.addImage(ufo2);
                ufo.scale=random(windowWidth/7000,windowWidth/10000);
                ufo.setCollider("circle",0,0,ufo.width/4.5);
            break;
            case 2:
                ufo.addImage(ufo3);
                ufo.scale=random(windowWidth/7000,windowWidth/10000);
                ufo.setCollider("circle",0,0,ufo.width/4);
            break;
            case 3:
                ufo.addImage(ufo4);
                ufo.scale=random(windowWidth/7000,windowWidth/10000);
                ufo.rotation=random(0,360);
                ufo.setCollider("rectangle",0,0,ufo.width*1.25/2,ufo.height*2/4);
            break;
            default: break;
        }

        ufoG.add(ufo);

    };

    //comets
    Comet=function(){
        var comet=createSprite(0,0,200,100);
        comet.shapeColor=rgb(100,100,255);
        comet.addAnimation("comet",ice);
        comet.scale=random(windowWidth/5000,windowWidth/10000);
        var spot=floor(random(0,4));
        switch(spot){
            case 0:
                comet.x=random(0,windowWidth);
                comet.y=-25;
                comet.velocityX=random(-10,10);
                comet.velocityY=random(5,10);
                comet.rotation=-90-comet.velocityX*2;
                if(comet.x<0 || comet.x>windowWidth || comet.y>windowHeight){
                    comet.lifetime=1;
                }
            break;
            case 1:
                comet.x=random(0,windowWidth);
                comet.y=windowHeight+25;
                comet.velocityX=random(-10,10);
                comet.velocityY=random(-5,-10);
                comet.rotation=90+comet.velocityX*2;
                if(comet.x<0 || comet.x>windowWidth || comet.y<0){
                    comet.lifetime=1;
                }
            break;
            case 2:
                comet.y=random(0,windowWidth);
                comet.x=-25;
                comet.velocityY=random(-10,10);
                comet.velocityX=random(5,10);
                comet.rotation=180+comet.velocityY*2;
                if(comet.y<0 || comet.y>windowHeight || comet.x>windowWidth){
                    comet.lifetime=1;
                }
            break;
            case 3:
                comet.y=random(0,windowWidth);
                comet.x=windowWidth+25;
                comet.velocityY=random(-10,10);
                comet.velocityX=random(-5,-10);
                comet.rotation=0-comet.velocityY*2;
                if(comet.y<0 || comet.y>windowHeight || comet.x<0){
                    comet.lifetime=1;
                }
            break;
            default: break;
        }

        comet.setCollider("circle",0-comet.width/4,0+comet.height/-10,comet.width/8);

        cometG.add(comet);


    };
    

    //shooting star
    ShootingStar=function(){
        var star=createSprite(0,0,200,100);
        star.shapeColor=rgb(100,100,255);
        star.addImage(shootingStar);
        star.scale=random(windowWidth/15000,windowWidth/17500);
        star.rotation=random(0,360);
        var spot=floor(random(0,4));
        switch(spot){
            case 0:
                star.x=random(0,windowWidth);
                star.y=-25;
                star.velocityX=random(-10,10);
                star.velocityY=random(5,10);
                if(star.x<0 || star.x>windowWidth || star.y>windowHeight){
                    star.lifetime=1;
                }
            break;
            case 1:
                star.x=random(0,windowWidth);
                star.y=windowHeight+25;
                star.velocityX=random(-10,10);
                star.velocityY=random(-5,-10);
                if(star.x<0 || star.x>windowWidth || star.y<0){
                    star.lifetime=1;
                }
            break;
            case 2:
                star.y=random(0,windowWidth);
                star.x=-25;
                star.velocityY=random(-10,10);
                star.velocityX=random(5,10);
                if(star.y<0 || star.y>windowHeight || star.x>windowWidth){
                    star.lifetime=1;
                }
            break;
            case 3:
                star.y=random(0,windowWidth);
                star.x=windowWidth+25;
                star.velocityY=random(-10,10);
                star.velocityX=random(-5,-10);
                if(star.y<0 || star.y>windowHeight || star.x<0){
                    star.lifetime=1;
                }
            break;
            default: break;
        }

        star.setCollider("circle",0,0,shootingStar.width/4);

        starG.add(star);

    };
}