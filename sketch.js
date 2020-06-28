
var database,gameState=0,playerCount=0,canves,form,player,game,allPlayers;


function setup(){
   canves= createCanvas(400,400);
    
    database=firebase.database();
    game=new Game();
    game.getState();
    game.start();
}

function draw(){
   if(playerCount==4){
       game.update(1)
   }
   if(gameState==1){
       clear();
       game.play();
   }
}

