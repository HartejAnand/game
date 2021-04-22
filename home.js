class Home{
    constructor(){
        this.how=createButton("HOW");
        
        this.story=createButton("STORY");
        
        this.play=createButton("PLAY");
        
    }
    display(){
        background(0,0,0);
        //how button
        this.how.position(windowWidth*0.75/4,windowHeight*2.75/4);
        this.how.size(windowWidth/7,windowHeight/8);
        this.how.style('background',rgb(0,0,155));
        this.how.style('color',rgb(255,255,0));
        this.how.style('fontSize',windowWidth/10);
        this.how.mousePressed(() => {
            gameState = "how";
        });
        
        //story button
        this.story.position(windowWidth*2.75/4,windowHeight*2.75/4);
        this.story.size(windowWidth/7,windowHeight/8);
        this.story.style('background',rgb(155,0,0));
        this.story.style('color',rgb(255,255,255));
        
        //play button
        this.play.position(windowWidth*0.87/2,windowHeight*2.5/4);
        this.play.size(windowWidth/7,windowHeight/8);
        this.play.style('background',rgb(0,100,0));
        this.play.style('color',rgb(255,155,0));
        this.play.mousePressed(() => {
            gameState = "settings";
        });
    }
    hide(){
        this.how.hide();
        this.story.hide();
        this.play.hide();
    }
}