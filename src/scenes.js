src = "lib/jquery.js"

var level1 = [
    '.........................X......',
    '....T....................h......',
    'SWWSWWWSSHSSSSSSW........h......',
    '.........H-------------..h......',
    '.........H....SSH........h......',
    '.........H....SSH......T.h......',
    '.........H....SSH.....SSSHSSSSSS',
    '.........H....SSH........H......',
    '.........H....SSH........H......',
    '.....P..TH....SSH.......TH......',
    'SSSSHWWWWW....SSSSSSHSSSSSSSSSSS',
    '....H...............H...........',
    '....H...............H...........',
    '....H...............H...........',
    'SSSSSSSSSSSSHSSSSSSSHSSSSSSSSSSS',
    '............H.......H...........',
    'SSSSSSSSSSSSHSSSSSSSHSSSSSSSSSSS',
    '............H.......H...........',
    '............H.......H...........',
    '.........T..H-------H...........',
    '......HSSSSSSS.....SSSSSSSSSSSSH',
    '......HSSSSSSS.....SSSSSSSSSSSSH',
    '......H........................H',
    '..E...H........................H',
    'SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS',
    'SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS',
    '', // nicht entfernen!
    ''   // nicht entfernen!   
];




var level1_bg = [
    'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
    'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
    'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
    'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
    'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
    'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
    'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
    'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
    'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
    'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
    'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
    'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
    'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
    'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
    'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
    '................................',
    '................................',
    '................................',
    '................................',
    '....................qweqweqweqwe',
    '....................asdasdasdasd',
    'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
    '', // nicht entfernen!
    ''   // nicht entfernen!   
];

var level1_transparent_bg = [
    'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
    'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
    'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
    'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
    'iiiiQiiiiiiiiiiiiiiiiiiiiiiiiiii',
    'iiiiAiiiiiiiiiiiiiiiiiiiiiiiiiii',
    'iiiiAirEWiiiiiiiiiiiiiiiiiiiiiii',
    'iiiiAifrSiiiiiiiiiiiiiiiiiiiiiii',
    'iiiiYigDXiiiiiiiiiiiiiiiiiiiiiii',
    'iiiiiiiCiiiiiiiiiiiiiiiiiiiiiiii',
    'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
    'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
    'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
    'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
    'iiii-iiiiiiiiiiiiiii-iiiiiiiiiii',
    'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
    'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
    'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
    'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
    'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
    'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
    'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
    '', // nicht entfernen!
    ''   // nicht entfernen!   
];



var level2 = [
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
    '5',
    ''
];

var level3 = [
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
var map_bg = [];
var map_transparent_bg = [];
var map_comp = new Array();

var treasures = 0;
var currentLevel = [];
 

function assginCurrentLevel(mapArray, backgroundArray, backgroundTransparentArray) {
    for (i = 0; i < 24; i++)
    {
        currentLevel[i] = mapArray[i];
        map_bg[i] = backgroundArray[i];
        map_transparent_bg[i] = backgroundTransparentArray[i];
    }
 }
 
}

Crafty.scene('Game', function() {
    treasures = 0;
    //var map;

    //container = Crafty.e('TreasureContainer');

    if (levelcounter == 0) {
        assginCurrentLevel(level1, level1_bg, level1_transparent_bg);

    }
    //console.log(levelcounter);

    if (levelcounter == 1) {
        assginCurrentLevel(level2, level1_bg, level1_transparent_bg);
    }

    if (levelcounter == 3) {
        assginCurrentLevel(level3, level1_bg, level1_transparent_bg);
    }
    map = currentLevel;


    //container.initialize();

    for (var y = 0; y < Game.map_grid.height; y++) {
        map_comp[y] = new Array();
        for (var x = 0; x < Game.map_grid.width; x++) {

            /*if (map_bg[y][x] == 'N' && map[y][x] == '.'){
             Crafty.e('Nothing_BG').at(x+1, y+1);
             //console.log("Nothing BG");
             }*/

            if (x == 0 || x == Game.map_grid.width - 1 || y == 0 || y == Game.map_grid.height - 1) {
                map_comp[y][x] = Crafty.e('Frame').at(x, y);
            }
            if (map[y][x] == 'W') {
                map_comp[y][x] = Crafty.e('Stone').at(x + 1, y + 1);
                //console.log("Entity: " + map_comp[y][x].toString());
            }
            if (map[y][x] == 'S') {
                map_comp[y][x] = Crafty.e('Stone').at(x + 1, y + 1);
                map_comp[y][x].setSolid();

                var stringContainer = map[y];
                //console.log(stringContainer);
                stringContainer = setCharAt(stringContainer, x, 'W');
                map[y] = stringContainer;
                //console.log("Entity: " + map_comp[y][x].toString());
            }
            if (map[y][x] == 'C') {
                map_comp[y][x] = Crafty.e('Concrete').at(x + 1, y + 1);
            }
            if (map[y][x] == 'H') {
                map_comp[y][x] = Crafty.e('Ladder').at(x + 1, y + 1);
            }
            if (map[y][x] == '-') {
                map_comp[y][x] = Crafty.e('Pole').at(x + 1, y + 1);
            }
            if (map[y][x] == 'T') {
                map_comp[y][x] = Crafty.e('Treasure').at(x + 1, y + 1);
                var stringContainer = map[y];
                //console.log(stringContainer);
                stringContainer = setCharAt(stringContainer, x, '.');
                map[y] = stringContainer;
                //container.add();	
                treasures++;
            }
            if (map[y][x] == 'P') {
                thePlayer = Crafty.e('PlayerCharacter').at(x + 1, y + 1);
                var stringContainer = map[y];
                //console.log(stringContainer);
                stringContainer = setCharAt(stringContainer, x, '.');
                map[y] = stringContainer;
            }
            if (map[y][x] == 'E') {
                Crafty.e('Enemy').at(x + 1, y + 1);
                var stringContainer = map[y];
                //console.log(stringContainer);
                stringContainer = setCharAt(stringContainer, x, '.');
                map[y] = stringContainer;
            }

            if (map_bg[y][x] == 'q') {
                var tmp_bg = Crafty.e('BG').at(x + 1, y + 1);
                tmp_bg.sprite(0, 0);
            }

            if (map_bg[y][x] == 'w') {
                var tmp_bg = Crafty.e('BG').at(x + 1, y + 1);
                tmp_bg.sprite(1, 0);
            }

            if (map_bg[y][x] == 'e') {
                var tmp_bg = Crafty.e('BG').at(x + 1, y + 1);
                tmp_bg.sprite(2, 0);
            }

            if (map_transparent_bg[y][x] == 'r') {
                var tmp_bg = Crafty.e('BG').at(x + 1, y + 1);
                Crafty.e('Torch_BG').at(x + 1, y + 1);
                tmp_bg.sprite(3, 0);
            }

            if (map_transparent_bg[y][x] == 't') {
                var tmp_bg = Crafty.e('BG_Front').at(x + 1, y + 1);
                tmp_bg.sprite(4, 0);
            }

            if (map_transparent_bg[y][x] == 'z') {
                var tmp_bg = Crafty.e('BG_Front').at(x + 1, y + 1);
                tmp_bg.sprite(5, 0);
            }

            if (map_bg[y][x] == 'u') {
                var tmp_bg = Crafty.e('BG').at(x + 1, y + 1);
                tmp_bg.sprite(6, 0);
            }

            if (map_bg[y][x] == 'i') {
                var tmp_bg = Crafty.e('BG').at(x + 1, y + 1);
                tmp_bg.sprite(7, 0);
            }

            if (map_bg[y][x] == 'o') {
                var tmp_bg = Crafty.e('BG').at(x + 1, y + 1);
                tmp_bg.sprite(8, 0);
            }

            if (map_bg[y][x] == 'p') {
                var tmp_bg = Crafty.e('BG').at(x + 1, y + 1);
                tmp_bg.sprite(9, 0);
            }

            if (map_bg[y][x] == 'a') {
                var tmp_bg = Crafty.e('BG').at(x + 1, y + 1);
                tmp_bg.sprite(0, 1);
            }

            if (map_bg[y][x] == 's') {
                var tmp_bg = Crafty.e('BG').at(x + 1, y + 1);
                tmp_bg.sprite(1, 1);
            }

            if (map_bg[y][x] == 'd') {
                var tmp_bg = Crafty.e('BG').at(x + 1, y + 1);
                tmp_bg.sprite(2, 1);
            }

            if (map_transparent_bg[y][x] == 'f') {
                var tmp_bg = Crafty.e('BG_Front').at(x + 1, y + 1);
                tmp_bg.sprite(3, 1);
            }

            if (map_transparent_bg[y][x] == 'g') {
                var tmp_bg = Crafty.e('BG_Front').at(x + 1, y + 1);
                tmp_bg.sprite(4, 1);
            }

            if (map_transparent_bg[y][x] == 'h') {
                var tmp_bg = Crafty.e('BG_Front').at(x + 1, y + 1);
                tmp_bg.sprite(5, 1);
            }

            if (map_bg[y][x] == 'j') {
                var tmp_bg = Crafty.e('BG').at(x + 1, y + 1);
                tmp_bg.sprite(6, 1);
            }

            if (map_bg[y][x] == 'k') {
                var tmp_bg = Crafty.e('BG').at(x + 1, y + 1);
                tmp_bg.sprite(7, 1);
            }

            if (map_bg[y][x] == 'l') {
                var tmp_bg = Crafty.e('BG').at(x + 1, y + 1);
                tmp_bg.sprite(8, 1);
            }

            if (map_bg[y][x] == '#') {
                var tmp_bg = Crafty.e('BG').at(x + 1, y + 1);
                tmp_bg.sprite(9, 1);
            }

            if (map_bg[y][x] == 'y') {
                var tmp_bg = Crafty.e('BG').at(x + 1, y + 1);
                tmp_bg.sprite(0, 2);
            }

            if (map_bg[y][x] == 'x') {
                var tmp_bg = Crafty.e('BG').at(x + 1, y + 1);
                tmp_bg.sprite(1, 2);
            }

            if (map_bg[y][x] == 'c') {
                var tmp_bg = Crafty.e('BG').at(x + 1, y + 1);
                tmp_bg.sprite(2, 2);
            }

            if (map_transparent_bg[y][x] == 'v') {
                var tmp_bg = Crafty.e('BG_Front').at(x + 1, y + 1);
                tmp_bg.sprite(3, 2);
            }
            if (map_transparent_bg[y][x] == 'b') {
                var tmp_bg = Crafty.e('BG_Front').at(x + 1, y + 1);
                tmp_bg.sprite(4, 2);
            }

            if (map_transparent_bg[y][x] == 'n') {
                var tmp_bg = Crafty.e('BG_Front').at(x + 1, y + 1);
                tmp_bg.sprite(5, 2);
            }

            if (map_bg[y][x] == 'm') {
                var tmp_bg = Crafty.e('BG').at(x + 1, y + 1);
                tmp_bg.sprite(6, 2);
            }


            if (map_bg[y][x] == ',') {
                var tmp_bg = Crafty.e('BG').at(x + 1, y + 1);
                tmp_bg.sprite(7, 2);
            }

            if (map_bg[y][x] == '.') {
                var tmp_bg = Crafty.e('BG').at(x + 1, y + 1);
                tmp_bg.sprite(8, 2);
            }

            if (map_transparent_bg[y][x] == '-') {
                var tmp_bg = Crafty.e('BG_Front').at(x + 1, y + 1);
                tmp_bg.sprite(9, 2);
            }
            if (map_transparent_bg[y][x] == 'Q') {
                Crafty.e('Waterfall1_BG').at(x + 1, y + 1);
            }

            if (map_bg[y][x] == 'W') {
                var tmp_bg = Crafty.e('BG_Front').at(x + 1, y + 1);
                tmp_bg.sprite(4, 3);
            }

            if (map_transparent_bg[y][x] == 'E') {

                Crafty.e('Torch_BG').at(x + 1, y + 1);
            }

            if (map_transparent_bg[y][x] == 'A') {
                Crafty.e('Waterfall2_BG').at(x + 1, y + 1);
            }

            if (map_transparent_bg[y][x] == 'S') {
                var tmp_bg = Crafty.e('BG_Front').at(x + 1, y + 1);
                tmp_bg.sprite(4, 4);
            }

            if (map_transparent_bg[y][x] == 'D') {
                var tmp_bg = Crafty.e('BG_Front').at(x + 1, y + 1);
                tmp_bg.sprite(6, 4);
            }

            if (map_transparent_bg[y][x] == 'F') {
                var tmp_bg = Crafty.e('BG_Front').at(x + 1, y + 1);
                tmp_bg.sprite(7, 4);
            }

            if (map_transparent_bg[y][x] == 'G') {
                var tmp_bg = Crafty.e('BG_Front').at(x + 1, y + 1);
                tmp_bg.sprite(8, 4);
            }

            if (map_transparent_bg[y][x] == 'Y') {
                Crafty.e('Waterfall3_BG').at(x + 1, y + 1);
            }

            if (map_transparent_bg[y][x] == 'X') {
                var tmp_bg = Crafty.e('BG_Front').at(x + 1, y + 1);
                tmp_bg.sprite(4, 5);
            }

            if (map_transparent_bg[y][x] == 'C') {
                var tmp_bg = Crafty.e('BG_Front').at(x + 1, y + 1);
                tmp_bg.sprite(6, 5);
            }
        }
    }

    map[22] = treasures.toString();
    console.log("Map: " + map[22] + ", Tr: " + treasures);
    /*this.show_ladder = this.bind('TreasureCollected', function() {   
     container.collectTreasure();
     if(container.checkTreasures() == true){
     
     for (var y = 0; y < 10; y++) {
     
     for (var x = 0; x < Game.map_grid.width; x++) {    
     
     if (map[y][x] == 'h'){
     Crafty.e('Ladder').at(x+1, y+1);
     map[y][x] = 'H';
     }
     if (map[y][x] == 'X'){
     Crafty.e('Exit').at(x+1, y+1);                           					
     }
     
     } 
     }                  
     }             
     });*/



    /*this.end_postion = this.bind('EndLevel', function() {
     Crafty("2D").destroy();
     console.log(levelcounter++);
     Crafty.scene('NextLevel');
     });*/
    this.game_over = this.bind('EnemyCollison', function() {

        Crafty("2D").destroy();

        Crafty.scene('Gameover');
    });
}, function() {
    this.unbind('TreasureCollected', this.show_ladder); //ausm tut
}, function() {
    this.unbind('EnemyCollison', this.game_over); //ausm tut
}, function() {
    this.unbind('GameWon', this.end_postion);
});



Crafty.scene('NextLevel', function() {
    /*Crafty.e("2D, DOM, Text, Image")
            .attr({x: 0, y: Game.height() / 2 - 24, w: Game.width()})
            .text("You Won! Press Space For The Next Level")
            .css({"text-align": "center"})
            .textFont({size: '15px', weight: 'bold'})
            .textColor("#FFFFFF")
            .image("assets/winscreen.png");*/
     var bgImage = Crafty.e('2D, DOM, Text, Image')
                .image("assets/winscreen.png");
        bgImage.y = 10;
        bgImage.x =60; 
    //timerStop();

    treasureCollected = 0;
    //container.initialize();		  


    $(document).keypress(function(e) {
        if (e.which == 32) {
            start_game();
        }
    });
});

Crafty.scene('Gameover', function() {
    //console.log("hello");
    /*Crafty.e("2D, DOM, Text, Image")
            .attr({x: 0, y: Game.height() / 2 - 24, w: Game.width()})
            .text("Game Over! Press Space To Restart")
            .css({"text-align": "center"})
            .textFont({size: '15px', weight: 'bold'})
            .textColor("#FFFFFF")
            .attr({x: 0, y: Game.height() / 2 - 24, w: Game.width()})
            .image("assets/losescreen.png", "repeat", "center", "center");*/
     var bgImage = Crafty.e('2D, DOM, Text, Image')
                .image("assets/losescreen.png");
        bgImage.y = 10;
        bgImage.x =60; 





    treasureCollected = 0;
//container.reset();

    $(document).keypress(function(e) {
        if (e.which == 32) {
            start_game();
        }
    });
});


Crafty.scene('Loading', function() {

    Crafty.load(['assets/Stein_oK_72ppi.png', 'assets/Ladder.png', 'assets/Schatz_24x19_72ppi.png', 'assets/Pole.png', 'assets/playersprite.png',
        'assets/enemysprite.png', 'assets/bg.png', 'assets/steine.png'], function() {

        Crafty.sprite(24, 'assets/playersprite.png', {
            spr_player: [0, 0],
        });
        Crafty.sprite(24, 'assets/enemysprite.png', {
            spr_enemy: [0, 0],
        });
        Crafty.sprite(24, 'assets/assets-yellow.png', {
            spr_treasure: [0, 0], spr_stone: [1, 0], spr_ladder: [0, 1], spr_pole: [1, 1]
        });

        Crafty.sprite(24, 'assets/steine.png', {
            spr_stone_normal: [0, 0]
        });

        Crafty.sprite(24, 'assets/bg.png', {
            spr_bg: [0, 0],
            spr_eye: [6, 0], spr_nothing: [7, 0], spr_hoe: [8, 0], spr_bowl: [9, 0],
            spr_torch1: [0, 6], spr_torch2: [1, 6], spr_torch3: [2, 6], spr_torch4: [3, 6]
        });

        var bgImage = Crafty.e('2D, DOM, Text, Image')
                .image("assets/winscreen.png");
        bgImage.y = 10;
        bgImage.x =60; 
       /* Crafty.e('2D, DOM, Text, Image')
                .text("Press Space To Start! \n Although Press Space To Restart")
                .attr({x: 0, y: Game.height() / 2 - 24, w: Game.width()})
                .css({"text-align": "bottom"})
                .textFont({size: '15px', weight: 'bold'})
                .textColor("#FFFFFF");*/


    })

    //verbessurung

    $(document).keypress(function(e) {
        if (e.which == 32) {
            start_game();
        }
    });
});

function start_game() {
    // map = currentLevel;
    Crafty.scene('Game');
    console.log(currentLevel);
    //time = 0;
    //setTimeout('timer()', 1000);
    //timerStart();

}


function setCharAt(str, index, chr) {
    if (index > str.length - 1)
        return str;
    return str.substr(0, index) + chr + str.substr(index + 1);
}