class Home{
    constructor(){
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
        
    }
    display(){
        howB.visible=true;
        playB.visible=true;
        settingsB.visible=true;
        title.visible=true;

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


    }
    hide(){
        howB.visible=false;
        playB.visible=false;
        settingsB.visible=false;
        title.visible=false;    
    }
}