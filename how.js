class How{
    constructor(){
        this.back=createButton("Back");
        
    }
    display(){
        background(0,0,0);
        //directions
        fill(0,0,255);
        noStroke();
        textSize(windowWidth/15);
        text("DIRECTIONS",windowWidth*0.6/2,windowHeight/5);
        textSize(windowWidth/25);
        text("*Click to shoot\n*Hit targets for points\n*Fake targets take away points\n*Other targets are power ups\n  -or power downs\n*Try to get as many points as possible",windowWidth/8,windowHeight/3);
        //back button
        this.back.position(windowWidth/100,windowHeight*4.3/5);
        this.back.size(windowWidth/10,windowHeight/10);
        this.back.style('background',rgb(0,255,0));

        this.back.mousePressed(() => {
            gameState = "home";
        });
    };
    hide(){
        this.back.hide();
    };
}