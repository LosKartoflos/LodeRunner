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
    '.........................T......',
    '....T..P.................h......',
    'CWCCWCCCWHWWWWWWC........h......',
    '.........H---------------h......',
    '.........H....WWH........h......',
    '.........H....WWH......T.h......',
    '.........H....WWH....WWWWHWWWWWW',
    '.........H....WWH........H......',
    '.........H....WWH........H......',
    '.........H....WWH.......tH......',
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
    '......H.........p..t...........H',
    'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
    '',  // nicht entfernen!
    ''   // nicht entfernen!   
    ];
	
	var level2 =[
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
    ];    
	
	var levelcounter = 0;
	
	
Crafty.scene('Game', function() {

    var map;
 
    if(levelcounter == 0){
		map = level1;
    }
    console.log(levelcounter);
	
    if(levelcounter >= 4){
		map = level2;
    }
    
    for (var y = 0; y < Game.map_grid.height; y++) {

        for (var x = 0; x < Game.map_grid.width; x++) {    

                if (x == 0 || x == Game.map_grid.width - 1 || y == 0 || y == Game.map_grid.height - 1) {																					
                    Crafty.e('Frame').at(x, y);										
                }			
                if (map[y][x] == 'W'){
                    Crafty.e('Stone').at(x+1, y+1);					
                }
                if (map[y][x] == 'C'){
                    Crafty.e('Concrete').at(x+1, y+1);					
                }				
                if (map[y][x] == 'H'){
                    Crafty.e('Ladder').at(x+1, y+1);
                }
                if (map[y][x] == '-'){
                    Crafty.e('Pole').at(x+1, y+1);
                }                                 		                
                if (map[y][x] == 'T'){
                    Crafty.e('Treasure').at(x+1, y+1);				
                }
                if (map[y][x] == 'P'){
                    Crafty.e('PlayerCharacter').at(x+1, y+1);  
                }					
        } 
    }        
   
    
    this.show_ladder = this.bind('TreasureCollected', function() {   
        if (Crafty('Treasure').length == 1){
            
            for (var y = 0; y < 10; y++) {
		
                for (var x = 0; x < Game.map_grid.width; x++) {    
																		           						
                    if (map[y][x] == 'h'){
                        Crafty.e('Ladder').at(x+1, y+1);
                    }
//                    if (map[y][x] == 'P'){
//                        Crafty.e('PlayerCharacter').at(x+1, y+1);   // player sollte gelöscht und erneut gezeichnet werden, damit er  nicht hinter der leiter verschwindet                             					
//                    }
                    this.end_postion = this.bind('TreasureCollected', function() { 
                       if (!Crafty('Treasure').length){
                           Crafty("2D").destroy();
						   levelcounter++;
                           Crafty.scene('NextLevel'); 
                       }         
                    }); 
                } 
            }                  
        }             
}); 
 
}, function() {
  this.unbind('TreasureCollected', this.show_ladder); //ausm tut
}, function(){
   this.unbind('GameWon', this.end_postion);
});

Crafty.scene('NextLevel', function() {
    Crafty.e("2D, DOM, Text")
          .attr({ x: 0, y: Game.height()/2 - 24, w: Game.width() })
          .text("You Won! Press Key for the next Level")
          .css({ "text-align": "center"})
          .textFont({ size: '15px', weight: 'bold' })
          .textColor("#FFFFFF");
 
this.restart_game = function() {Crafty.scene('Game');}; //verbessurung
this.bind('KeyDown', this.restart_game);
}, function() {
this.unbind('KeyDown', this.restart_game);
});


Crafty.scene('Loading', function(){

  Crafty.load(['assets/16x16_forest_1.gif', 'assets/stone.png', 'assets/ladder.png', 'assets/pole.png', 'assets/treasure.png', 'assets/concrete.png',], function(){

    Crafty.sprite(16, 'assets/16x16_forest_1.gif', {  // kommt noch nicht zum einsatz
        spr_stone: [0, 0]
    });
      Crafty.e('2D, DOM, Text')
    .text("Press Key for Starting!")
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
