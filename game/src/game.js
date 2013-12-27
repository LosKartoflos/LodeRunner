	Game = {
    map_grid: {
        width: 32,
        height: 22,
        tile: {
            width: 24,
            height: 24,
        }
    },

    width: function() {
        return this.map_grid.width * this.map_grid.tile.width;
    },
    height: function() {
        return this.map_grid.height * this.map_grid.tile.height;
    },

    start: function() {

        Crafty.init(Game.width(), Game.height());
        Crafty.background('rgb(0, 0, 0)');
		Crafty.e('PlayerCharacter').at(5, 5);
		//32 * 22 Felder	
		var	map = [
		'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
		'X..............................X',
		'X..............................X',
		'XWWWWWWWWHWWWWWW...............X',
		'X........H.....................X',
		'X........H....WWH..............X',
		'X........H....WWH....WWWWHWWWWWX',
		'X........H....WWH........H.....X',
		'X........H....WWH........H.....X',
		'X........H....WWH........H.....X',
		'XWWWHWWWWW....WWWWWWHWWWWWWWWWWX',
		'X...H...............H..........X',
		'X...H...............H..........X',
		'X...H...............H..........X',
		'XWWWWWWWWWWWHWWWWWWWHWWWWWWWWWWX',
		'X...........H.......H..........X',
		'X...........H.......H..........X',
		'X...........H.......H..........X',
		'X.....HWWWWWWW......WWWWWWWWWWHX',
		'X.....H.......................HX',
		'X.....H.......................HX',
		'XWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWX',							
		];
		

		//das auslesen werd ich noch verbessern
		
        for (var y = 0; y < Game.map_grid.height; y++) {
		
			for (var x = 0; x < Game.map_grid.width; x++) {    
				
				if (map[y][x] == 'X') {														
							
                Crafty.e('Frame').at(x, y);
				}
				if (map[y][x] == 'W'){
				Crafty.e('Stone').at(x, y);
				}
				if (map[y][x] == 'H'){
				Crafty.e('Ladder').at(x, y);
				}
                        			                 
            } 
        }
			
    }
		
}
