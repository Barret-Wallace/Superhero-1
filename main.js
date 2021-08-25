var player_object;

var playerx = 10;
var playery = 10;

var canvas = new fabric.Canvas("Mycanvas");
playerUpdate();
function playerUpdate(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({top:playery,left:playerx});
        canvas.add(player_object);
    });
}