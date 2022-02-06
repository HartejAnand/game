class End{
    constructor(){
        endBack=createSprite(windowWidth/15,windowHeight*9/10);
        endBack.addImage(back);
        endBack.scale=windowWidth/10000;
        endBack.setCollider("rectangle",0,0,windowWidth/1.4,windowHeight/1.2);
    }
    display(){
        endBack.visible=true;
        background(0,0,0);
        //text
        fill(255,0,255);
        stroke(255,0,0);
        strokeWeight(windowWidth/1000);
        textSize(windowWidth/10);
        text("GAME OVER",windowWidth/5.5,windowHeight/5)
        textSize(windowWidth/15);
        text("Score: "+score, windowWidth/3,windowHeight/2);
        textSize(windowWidth/20);
        if(score<0 && mesagePicked===false){
            message=veryBad[random(0,5)]; //have to use one extra since floor rounds down
            mesagePicked=true;
        }
        if(score===0 && mesagePicked===false){
            message=zero[floor(random(0,3))];
            mesagePicked=true;
        }
        if(score>0 && score<=75 && mesagePicked===false){
            message=bad[floor(random(0,4))];
            mesagePicked=true;
        }
        if(score>75 && score<=150 && mesagePicked===false){
            message=ok[floor(random(0,3))];
            mesagePicked=true;
        }
        if(score>150 && score<=200 && mesagePicked===false){
            message=good[floor(random(0,3))];
            mesagePicked=true;
        }
        if(score>200 && mesagePicked===false){
            message=veryGood[floor(random(0,5))];
            mesagePicked=true;
        }
        text(message,windowWidth/4,windowHeight*2/3);

        //back button
        if(projectile.isTouching(endBack)){
            endBack.addImage(back2);
            if(mouseIsPressed){
                gameState="home";
            }
        }
        else{
            endBack.addImage(back);
        }        
    }
    hide(){
        endBack.visible=false;
    };
}