class Home{
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

        
        title=createSprite(windowWidth*1/2,windowHeight*5/16,windowWidth/8,windowHeight/8);
        title.shapeColor=rgb(0,0,255);
        title.addImage(titleI);
        title.scale=windowWidth/2500;
        
        howB=createSprite(windowWidth*1/4,windowHeight*3/4,windowWidth/8,windowHeight/8);
        howB.shapeColor=rgb(255,0,0);
        howB.addImage(howI);
        howB.scale=windowWidth/5000;
        howB.setCollider("rectangle",0,0,windowWidth/2,windowHeight/2);

        playB=createSprite(windowWidth*1/2,windowHeight*2.5/4,windowWidth/8,windowHeight/8);
        playB.shapeColor=rgb(255,255,255);
        playB.addImage(playI);
        playB.scale=windowWidth/5000;
        playB.setCollider("rectangle",0,0,windowWidth/4,windowHeight/4);

        settingsB=createSprite(windowWidth*3/4,windowHeight*3/4,windowWidth/8,windowHeight/8);
        settingsB.shapeColor=rgb(255,255,0);
        settingsB.addImage(settingsI);
        settingsB.scale=windowWidth/5000;
        settingsB.setCollider("rectangle",0,0,windowWidth/1.5,windowHeight/2);
        
        credits=createSprite(windowWidth*1/20,windowHeight*1/15,windowWidth/4,windowHeight/4);
        credits.shapeColor=rgb(255,155,0);
        credits.addImage(creditI);
        credits.scale=windowWidth/15000;
        credits.setCollider("circle",0,0,windowWidth/3.5);
                
        credit=createSprite(windowWidth/2,windowHeight/2,windowWidth/200,windowWidth/200);
        credit.addImage(creditsI);
        credit.visible=false;
        credit.setCollider("circle",0,0,windowWidth/3);
    }
    display(){
        howB.visible=true;
        playB.visible=true;
        settingsB.visible=true;
        title.visible=true;
        credits.visible=true;

        background(0,0,0);
        //how button
        if(projectile.isTouching(howB)){
            howB.scale=windowWidth/4000;
            if(mouseIsPressed){
                gameState="how";
            };
        }else{
            howB.scale=windowWidth/5000;
        }
        
        //settings button
        if(projectile.isTouching(settingsB)){
            settingsB.scale=windowWidth/4000;
            if(mouseIsPressed){
                gameState="settings";
            };
        }else{
            settingsB.scale=windowWidth/5000;
        }
        
        //play button
        if(projectile.isTouching(playB)){
            playB.rotation=playHover;
            playHover+=playTilt;
            if(playHover>20){
                playTilt=-2;
            }
            if(playHover<-20){
                playTilt=2;
            }
            if(mouseIsPressed){
                gameState="game";
                time=gameT;
                score=0;
                mesagePicked=false;
            };
        }else{
            playB.rotation=0;
        }

        //credits button
        if(projectile.isTouching(credits)){
            credits.rotation=creditsHover;
            creditsHover+=creditsTilt;
            if(creditsHover>5){
                creditsTilt=-2;
            }
            if(mouseIsPressed){
                gameState="credits";
            };
        }else{
            credits.rotation=0;
        }
    }
    hide(){
        howB.visible=false;
        playB.visible=false;
        settingsB.visible=false;
        title.visible=false;    
        credits.visible=false;    
    }
}