class Game{
    constructer(){}
    getState(){
        database.ref("gameState").on("value",function(data){
            gameState=data.val();
        })
    }
    update(state){
        database.ref("/").update({
            gameState:state
        })
    }
    start(){
        if( gameState==0){
            player=new Player();
            player.getCount();
            form=new Form();
            form.display();
        }

    }
    play(){
        form.hide();
        Player.getPlayerInfo();
        textSize(30);
        text("game start",120,100);
        if(allPlayers!=undefined){
            var displayPosition=130;
            for(var plr in allPlayers){
                if(plr=="player"+player.index){
                    fill ("red")
            
                }
                else{fill ("black")}
                textSize(16);
                displayPosition=displayPosition+20
                text(allPlayers[plr].name+":"+allPlayers[plr].distance,100,displayPosition);
            }
        }
        if (keyIsDown("UP_ARROW")&&player.index!=null){
            player.distance=player.distance+50;
            player.update();
        }
    }
}
