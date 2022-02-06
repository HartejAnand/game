class Settings{
    constructor(){
        settingBack=createSprite(windowWidth/15,windowHeight*9/10);
        settingBack.addImage(back);
        settingBack.scale=windowWidth/10000;
        settingBack.setCollider("rectangle",0,0,windowWidth/1.4,windowHeight/1.2);

        selectTime=createSprite(windowWidth*0.8/4,windowHeight*1.5/4);
        selectTime.addImage(gameTime);
        selectTime.scale=windowWidth/3750;

        time1=createSprite(windowWidth*1.7/4, windowHeight*1.5/4);
        time1.addImage(sixty);
        time1.scale=windowWidth/8000;

        time2=createSprite(windowWidth*2.4/4, windowHeight*1.5/4);
        time2.addImage(oneTwenty);
        time2.scale=windowWidth/8000;

        time3=createSprite(windowWidth*3.25/4, windowHeight*1.5/4);
        time3.addImage(threehundered);
        time3.scale=windowWidth/8000;
    }
    display(){
        settingBack.visible=true;
        selectTime.visible=true;
        time1.visible=true;
        time2.visible=true;
        time3.visible=true;
        background(0,0,0);
        fill(0,200,0);
        noStroke();
        textSize(windowWidth/15);
        text("SETTINGS",windowWidth*0.6/2,windowHeight/5);
        //time selecting buttons
        if(mouseIsPressed && projectile.isTouching(time1)){
            playTime=1;
        }
        if(mouseIsPressed && projectile.isTouching(time2)){
            playTime=2;
        }
        if(mouseIsPressed && projectile.isTouching(time3)){
            playTime=3;
        }
        if(playTime===1){
            time1.addImage(sixtySelect);
            time2.addImage(oneTwenty);
            time3.addImage(threehundered);
            gameT=60;
        }
        if(playTime===2){
            time2.addImage(oneTwentySelect);
            time3.addImage(threehundered);
            time1.addImage(sixty);
            gameT=120;
        }
        if(playTime===3){
            time3.addImage(threehunderedSelect);
            time2.addImage(oneTwenty);
            time1.addImage(sixty);
            gameT=300;
        }

        //back button
        if(projectile.isTouching(settingBack)){
            settingBack.addImage(back2);
            if(mouseIsPressed){
                gameState="home";
            }
        }
        else{
            settingBack.addImage(back);
        }
    };
    hide(){
        settingBack.visible=false;
        selectTime.visible=false;
        time1.visible=false;
        time2.visible=false;
        time3.visible=false;
    };
    
}