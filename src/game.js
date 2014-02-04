Game = {
// This defines our grid's size and the size of each of its tiles
    map_grid: {
        width: 34,			
        height: 24,
        tile: {
            width: 24,
            height: 24,
        }
    },
// The total width of the game screen. Since our grid takes up the entire screen
// this is just the width of a tile times the width of the grid
    width: function() {
        return this.map_grid.width * this.map_grid.tile.width;
    },
// The total height of the game screen. Since our grid takes up the entire screen
// this is just the height of a tile times the height of the grid
    height: function() {
        return this.map_grid.height * this.map_grid.tile.height;
    },
// Initialize and start our game
    start: function() {
// Start crafty and set a background color so that we can see it's working
        Crafty.init(Game.width(), Game.height());
       // document.getElementById("cr-stage").onmousemove = mouse;
        Crafty.background('rgb(0, 0, 0)');
		Crafty.scene('Loading');
        //Crafty.scene('Game');
        //Crafty.scene('NextLevel');  
        //start_loop();// starts game loop (for player)
    } 
}
//shows x and y coordinate where the mouse is 
function mouse(e)
{
  var x = e.pageX - document.getElementById('cr-stage').offsetLeft;
  var y = e.pageY - document.getElementById('cr-stage').offsetTop;
  document.getElementById('x').innerHTML = x;
  document.getElementById('y').innerHTML = y;
}

function loop()
{
    
    //Crafty.c('PlayerCharacter').climbTester();
    //Crafty.c('Enemy').ai();
    //Game.player.caseTester();
    /*if (is_playing = true)
    {
        setTimeout(climbMaster, 10);
    }*/
    setTimeout(climbMaster, 1);
}

// start_loop wird in Game.start ausgeführt
function start_loop()
{
  is_playing = true;
  loop();
}
