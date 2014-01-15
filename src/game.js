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
        document.getElementById("cr-stage").onmousemove = mouse;
        Crafty.background('rgb(0, 0, 0)');
		
		//nur 32 * 23 Felder wegen Umrandung  //CHAR AT
		var	map = [	
		'................................',		
		'................................',
		'....T...........................',
		'WWWWWWWWWHWWWWWWW...............',
		'.........H-------------.........',
		'.........H....WWH...............',
		'.........H....WWH......T........',
		'.........H....WWH....WWWWHWWWWWW',
		'.........H....WWH........H......',
		'.........H....WWH........H......',
		'.........H....WWH.......TH......',
		'WWWWHWWWWW....WWWWWWHWWWWWWWWWWW',
		'....H...............H...........',
		'....H...............H...........',
		'....H...............H...........',
		'WWWWWWWWWWWWHWWWWWWWHWWWWWWWWWWW',
		'............H.......H...........',
		'............H.......H...........',		
		'.........T..H-------H...T.......',
		'......HWWWWWWW......WWWWWWWWWWWH',
		'......H........................H',
		'......H........P...T...........H',
		'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW'							
		];
		

// Place a tree at every edge square on our grid of 16x16 tiles
        for (var y = 0; y < Game.map_grid.height; y++) {
		
			for (var x = 0; x < Game.map_grid.width; x++) {    
					
				if (x == 0 || x == Game.map_grid.width - 1 || y == 0 || y == Game.map_grid.height - 1) {																					
				Crafty.e('Frame').at(x, y);										
				}			
					while(map[y][x] == 'W' || map[y][x] == 'X' || map[y][x] == 'H' || map[y][x] == '-'){
														
						while (map[y][x] == 'W'){
						Crafty.e('Stone').at(x+1, y+1);					
						x++;
						}
						
						while (map[y][x] == 'H'){
						Crafty.e('Ladder').at(x+1, y+1);
						x++;
						}
						while (map[y][x] == '-'){
						Crafty.e('Pole').at(x+1, y+1);
						x++;
						}					
					}			                
                if (map[y][x] == 'T'){
				Crafty.e('Treasure').at(x+1, y+1);				
				}
				if (map[y][x] == 'P'){
				Crafty.e('PlayerCharacter').at(x+1, y+1);
					
				Crafty.e('Frame').at(33, 23);			// fehlerkaschierung
				}	
            } 
        }					
    }
  
}

//shows x and y coordinate where the mouse is (doesn't work
function mouse(e)
{
  var x = e.pageX - document.getElementById('cr-stage').offsetLeft;
  var y = e.pageY - document.getElementById('cr-stage').offsetTop;
  document.getElementById('x').innerHTML = x;
  document.getElementById('y').innerHTML = y;
}

