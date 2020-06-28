class Form{
    constructor(){
        this.title=createElement("h2");
        this.input=createInput("name");
        this.button=createButton("play"); 
        this.greetings=createElement("h3");
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.title.hide();
        this.greetings.hide();
         
    }
    display(){
       
        this.title.html("car racing game");
        this.title.position(130,0);
        
        this.input.position(130,160);
       
        this.button.position(250,200);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name= this.input.value();
            playerCount++
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            
            this.greetings.position(130,160);
            this.greetings.html("hello "+player.name)
        })
    }
}