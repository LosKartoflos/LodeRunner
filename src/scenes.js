//für die Bewegung zum testen
/*
var level1 =[                     	
    '..........T.....................',
    '..........h.....................',
    'WWWW......h.......WWWWHWWWWWWWWW',
    '..WWW.....h......WWW..H.........',
    '...WWW....h.....WW....H.........',
    'T..WWWW...h...TWWW....H......T..',
    'WWHWWWWW..h..WWWWWHWWWWWWWWWWWWW',
    '..H....WW.h.WW....H.............',
    '..H.....W.H.W.....H.............',
    '..H......CHC......H.....T.......',
    'HWWWH.....H......WHWWHWWW.......',
    'H...H................H..........',
    'H...H.....T..........H..........',
    'H...H.....W..........H..........',
    'H...H................H..........',
    'H...HWWWWWWWWHWWWWWWWHWWWWWWWHWW',
    'H............H...............H..',
    'H......T.....H...------WWWWWWHWW',
    'H......WWCCCCHWWWW...........H..',
    'H............................H..',
    'H...............P............H..',
    'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
    '',
    ''
    ];*/

var level1 =[                     	
    '.........................X......',
    '.E..T....................h......',
    'WWWWWWWWWHWWWWWWW........h......',
    '.........H-------------..h......',
    '.........H....WWH........h......',
    '.........H....WWH......T.h......',
    '.........H....WWH....WWWWHWWWWWW',
    '.........H....WWH........H......',
    '.........H....WWH........H......',
    '.....P..TH....WWH.......tH......',
    'WWWWHWWWWW....WWWWWWHWWWWWWWWWWW',
    '....H...............H...........',
    '....H...............H...........',
    '....H...............H...........',
    'WWWWWWWWWWWWHWWWWWWWHWWWWWWWWWWW',
    '............H.......H...........',
    '............H.......H...........',		
    '.........t..H-------H...t.......',
    '......HWWWWWWW......WWWWWWWWWWWH',
    '......H........................H',
    '..E...H.........p..t...........H',
    'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
    '',  // nicht entfernen!
    ''   // nicht entfernen!   
    ];
	
	var level2 =[
    '..........X.....................',
    '..........h................E....',
    'WWWW......h.......WWWWHWWWWWWWWW',
    '..WWW.....h......WWW..H.........',
    '...WWW....h.....WW....H.........',
    'T.EWWWW...h...TWWW....H......T..',
    'WWHWWWWW..h..WWWWWHWWWWWWWWWWWWW',
    '..H....WW.h.WW....H.............',
    '..H.....W.H.W.....H.............',
    '..H......WHW......H.....T.......',
    'HWWWH.....H......WHWWHWWW.......',
    'H...H................H..........',
    'H...H.....T..........H..........',
    'H...H.....W..........H..........',
    'H...H................H..........',
    'H...HWWWWWWWWHWWWWWWWHWWWWWWWHWW',
    'H............H...............H..',
    'H......T.....H...------WWWWWWHWW',
    'H......WWWWWWHWWWW...........H..',
    'H............................H..',
    'H...............P............H..',
    'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
    '',
    ''
    ];  
    
    var level3 =[
    '...............................X',
    '...............................h',
    'E..T...........................h',
    'HWWWWWH........................h',
    'H.....H........................h',
    'H.....H........................h',
    'H.....H............T..E........h',
    'H.....H.......HWWWWWWWWH.......H',
    'H.....H.......H........H..T....H',
    'HWWWWWH.......H........HWWWWWWWH',
    'H.....H.......H........H.......H',
    'H.....H-------H-----...H.......H',
    'H.....H.......H....HWWWWWWWWWWWH',
    'H.....H.......H.T..H...........H',
    'H.....H.......HWWWWH...........H',
    'WWWWWWWWWWWWWWH.........HWWWHWWW',
    'WWWWW.........H.........H...H...',
    'WWWWW.........H..-------H...H..T',
    'WWWWWWWWWWHWWWWWWW......H...WWWW',
    '..........H.............H.......',
    '...P......HT............H::.....',
    'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
    '',
    ''
    ];  
	
	var levelcounter = 0;
	      
var map;
var map_comp = new Array(); //Frage: warum geht das auf einmal nur so
Crafty.scene('Game', function() {

    //var map;
	
	container = Crafty.e('TreasureContainer');
 
    if(levelcounter == 0){
		map = level1;
    }
    //console.log(levelcounter);
	
    if(levelcounter == 1){
		map = level2;
    }
    
    if(levelcounter == 3){
		map = level3;
    }
    
	container.initialize();
	
    for (var y = 0; y < Game.map_grid.height; y++) {
        map_comp[y] = new Array();
        for (var x = 0; x < Game.map_grid.width; x++) {    

                if (x == 0 || x == Game.map_grid.width - 1 || y == 0 || y == Game.map_grid.height - 1) {																					
                    map_comp[y][x] = Crafty.e('Frame').at(x, y);										
                }			
                if (map[y][x] == 'W'){
                    map_comp[y][x] = Crafty.e('Stone').at(x+1, y+1);
                    console.log("Entity: " + map_comp[y][x].toString());
                }
                if (map[y][x] == 'C'){
                    map_comp[y][x] = Crafty.e('Concrete').at(x+1, y+1);					
                }				
                if (map[y][x] == 'H'){
                    map_comp[y][x] = Crafty.e('Ladder').at(x+1, y+1);
                }
                if (map[y][x] == '-'){
                    map_comp[y][x] = Crafty.e('Pole').at(x+1, y+1);
                }                                 		                
                if (map[y][x] == 'T'){
                    map_comp[y][x] = Crafty.e('Treasure').at(x+1, y+1);
					container.add();					
                }
                if (map[y][x] == 'P'){
                thePlayer  =  Crafty.e('PlayerCharacter').at(x+1, y+1);  
                }				
                if (map[y][x] == 'E'){
                    Crafty.e('Enemy').at(x+1, y+1);
                }
        } 
    }        
   
    
    this.show_ladder = this.bind('TreasureCollected', function() {   
        container.collectTreasure();
        if(container.checkTreasures() == true){
            
            for (var y = 0; y < 10; y++) {
		
                for (var x = 0; x < Game.map_grid.width; x++) {    
																		           						
                    if (map[y][x] == 'h'){
                        Crafty.e('Ladder').at(x+1, y+1);
                    }
                    if (map[y][x] == 'X'){
                        Crafty.e('Exit').at(x+1, y+1);                           					
                    }
                    
                } 
            }                  
        }             
});
this.end_postion = this.bind('EndLevel', function() { 
	   Crafty("2D").destroy();
	console.log(levelcounter++);
	   Crafty.scene('NextLevel');         
});
this.game_over = this.bind('EnemyCollison', function() { 
   
	   Crafty("2D").destroy();
	   
	   Crafty.scene('Gameover');          
});
}, function() {
  this.unbind('TreasureCollected', this.show_ladder); //ausm tut
},function() {
  this.unbind('EnemyCollison', this.game_over); //ausm tut
}, function(){
   this.unbind('GameWon', this.end_postion);
});

Crafty.scene('NextLevel', function() {
    Crafty.e("2D, DOM, Text")
          .attr({ x: 0, y: Game.height()/2 - 24, w: Game.width() })
          .text("You Won! Press key for the next level")
          .css({ "text-align": "center"})
          .textFont({ size: '15px', weight: 'bold' })
          .textColor("#FFFFFF");

container.initialize();		  
this.restart_game = function() {Crafty.scene('Game');}; //verbessurung
this.bind('KeyDown', this.restart_game);
}, function() {
this.unbind('KeyDown', this.restart_game);
});

Crafty.scene('Gameover', function() {
	//console.log("hello");
    Crafty.e("2D, DOM, Text")
          .attr({ x: 0, y: Game.height()/2 - 24, w: Game.width() })
          .text("Game Over! Press key to restart")
          .css({ "text-align": "center"})
          .textFont({ size: '15px', weight: 'bold' })
          .textColor("#FFFFFF");
 
container.reset();
this.restart_game = function() {Crafty.scene('Game');}; //verbessurung
this.bind('KeyDown', this.restart_game);
}, function() {
this.unbind('KeyDown', this.restart_game);
});


Crafty.scene('Loading', function(){

  Crafty.load(['assets/Stein_oK_72ppi.png', 'assets/Ladder.png', 'assets/Schatz_24x19_72ppi.png', 'assets/Pole.png', 'assets/playersprite.png', 'assets/enemysprite.png' ], function(){

	    Crafty.sprite(24, 'assets/playersprite.png', {
        spr_player: [0, 0],
        });
		Crafty.sprite(24, 'assets/enemysprite.png', {
        spr_enemy: [0, 0],
        });
        //Frage:
            Crafty.sprite(24, 'assets/assets-yellow.png', {
        spr_treasure: [0, 0], spr_stone:[1,0], spr_ladder:[0,1], spr_pole:[1,1]
        });

      Crafty.e('2D, DOM, Text')
    .text("Press Key To Start!")
    .attr({ x: 0, y: Game.height()/2 - 24, w: Game.width() })
    .css({ "text-align": "center"})
    .textFont({ size: '15px', weight: 'bold' })
    .textColor("#FFFFFF");    
    })
    
    this.start_game = function() {Crafty.scene('Game');}; //verbessurung
    this.bind('KeyDown', this.start_game);
}, function() {
this.unbind('KeyDown', this.start_game);
});
