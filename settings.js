class Settings{
    constructor(){
        this.time=createSelect('select time');
        this.time.option("select time");
        this.time.option("play for one minute");
        this.time.option("play for two minutes");
        this.time.option("play for three minutes");
    }
    display(){
        background(0,0,0);
        //time selecting button
        this.time.position(windowWidth/15,windowHeight/7);
        this.time.size(windowWidth/9,windowHeight/10);
        //this.time.changed(gameT);

    };
    hide(){

    };
    gameT(){
        if(this.time.value==="play for one minute"){
            gameTime=60;
        }
        if(time==="play for two minutes"){
           // gameTime=120;
        }
        if(time==="play for three minutes"){
           // gameTime=180;
        }
    };
}