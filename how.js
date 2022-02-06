class How{
    constructor(){
        howBack=createSprite(windowWidth/15,windowHeight*9/10);
        howBack.addImage(back);
        howBack.scale=windowWidth/10000;
        howBack.setCollider("rectangle",0,0,windowWidth/1.4,windowHeight/1.2);
    }
    display(){
        howBack.visible=true;
        background(0,0,0);
        //directions
        fill(0,0,255);
        noStroke();
        textSize(windowWidth/15);
        text("DIRECTIONS",windowWidth*0.6/2,windowHeight/5);
        textSize(windowWidth/25);
        text("*Click to shoot\n*Hit targets for points\n*Fake targets take away points\n*Some targets are power ups\n  -or power downs\n*Try to get as many points as possible",windowWidth/8,windowHeight/3);
        
        //back button
        if(projectile.isTouching(howBack)){
            howBack.addImage(back2);
            if(mouseIsPressed){
                gameState="home";
            }
        }
        else{
            howBack.addImage(back);
        }
    };

    hide(){
        howBack.visible=false;
    }

}