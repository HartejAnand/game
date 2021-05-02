class End{
    constructor(){
        this.back=createButton("Back");

    }
    display(){
        background(0,0,0);

        //back button
        this.back.position(windowWidth/100,windowHeight*4.3/5);
        this.back.size(windowWidth/10,windowHeight/10);
        this.back.style('background',rgb(0,255,0));

        this.back.mousePressed(() => {
            gameState = "home";
        });
    }
    hide(){
        this.back.hide();
    };
}