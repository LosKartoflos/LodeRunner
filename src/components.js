// // The Grid component allows an element to be located
// on a grid of tiles
Crafty.c('Grid', {
    init: function() {
        this.attr({
            w: Game.map_grid.tile.width,
            h: Game.map_grid.tile.height
        })
    },
// Locate this entity at the given position on the grid
    at: function(x, y) {
        if (x === undefined && y === undefined) {
            return {x: this.x / Game.map_grid.tile.width, y: this.y / Game.map_grid.tile.height}
        } else {
            this.attr({x: x * Game.map_grid.tile.width, y: y * Game.map_grid.tile.height});
            return this;
        }
    }
});

// // An "Actor" is an entity that is drawn in 2D on canvas
// via our logical coordinate grid
Crafty.c('Actor', {
    init: function() {
        this.requires('2D, Canvas, Grid');
    },
});
Crafty.c('Frame', {
    init: function() {
        this.requires('Actor, Color, Solid')
                .color('rgb(254, 254, 254)');
    },
});

 
Crafty.c('Stone', {   //ohne spritemapping
    init: function() {
        this.requires('Actor, Solid, spr_stone')                
                //.bind('EnterFrame', this.checkDigging)
                .sprite(1,0);
        
    },
       //Frage         
       /* digged[]: {0, 0},
        
        checkDigging: function(){
            if (this.digged[0] == 1 && this.digged [1] >= 50)
            {
                this.sprite,(0,0);
                this.digged[1] -= 1;
            }
            else if (this.digged[0] == 1 && this.digged [1] >= 1 )
            {
                this.sprite,(0,1);
                this.digged[1] -= 1;
            }
            else(this.digged[0]  == 1)
            {
                digged[0] = 0;
            }
        }
        */
       
       digged: 0,
               
       diggedTimer: 0,        
       
       checkDigging: function(){
           
            if (this.digged == 1 && this.diggedTimer >= 50)
            {
                this.sprite(0,0);
                this.diggedTimer -= 1;
            }
            else if (this.digged == 1 && this.diggedTimer >= 1 )
            {
                this.sprite(0,1);
                this.diggedTimer -= 1;
            }
            else(this.digged == 1)
            {
                this.sprite(1,0);
                this.digged = 0;
                this.unbind('EnterFrame', this.checkDigging);
            }
        },
        
        dig: function (){
            this.digged = 1;
            this.diggedTimer = 100;
            this.bind('EnterFrame', this.checkDigging);
        },
});
	/*Crafty.c('Concrete', {    not in use yet
    init: function() {
        this.requires('Actor, Solid, Image')                
                .image('assets/concrete.png');
    },
}); */
Crafty.c('Ladder', {
    init: function() {
        this.requires('Actor, spr_ladder')                
               // .image('assets/Leiter_oK_24x24_72ppi.png');
				.sprite(0,1);
               
    },
});
Crafty.c('Pole', {
    init: function() {
        this.requires('Actor, spr_pole')
                .sprite(1,1);
    },
});
 
 
var playerX = 0;
var playerY = 0;
var playerW = 0;
var playerH = 0;

 
 Crafty.c('Enemy', {
    init: function() {
        this.requires('Actor, Collision, Gravity, spr_enemy, SpriteAnimation')
                //.stopOnSolids()
                .bind('EnterFrame', this.toDoList)
                .animate("walk_right", 5, 0, 9)
                .animate("walk_up", 0, 1, 2)
                .animate("walk_down", 2, 1, 0)
                .animate("climb_right", 0, 2, 3) 
                .animate("climb_left", 4, 2, 7) 
                .onHit('PlayerCharacater', this.killPlayer);
                //.onHit('Treasure', this.collectTreasure);
    },


    

        moveDirection : 0,
        playerSpeed : 1.5,
        toDoList: function(){
            //this.x += 10;
          this.moveDirection = ki(this.moveDirection, this.x, this.y, this.h, this.w, playerX, playerY);        
          this.killPlayerWithCoord();
          this.applyXandY();
        },

        applyXandY: function(){
            var xAndY = movePlayer(this.x, this.y, this.h, this.w, this.moveDirection, this.playerSpeed);
            this.x = xAndY[0];
            this.y = xAndY[1];
            
            //Frage
           /* if(this.moveDirection == 1)
            {
                if(detectNextBlock_CurrentLeftUp(this.x, this.y, this.h, this.w) == '-' || detectNextBlock_CurrentRightUp(this.x, this.y, this.h, this.w) == '-')
                    this.animate('climb_left', 17, -1);
                else
                    this.animate('walk_left', 25, -1);
            }
            else if(this.moveDirection == 3)
            {
                if(detectNextBlock_CurrentLeftUp(this.x, this.y, this.h, this.w) == '-' || detectNextBlock_CurrentRightUp(this.x, this.y, this.h, this.w) == '-')
                    this.animate('climb_right', 17, -1);
                else
                    this.animate('walk_right', 25, -1);
            }
             else if(this.moveDirection == 2)
            {
                this.animate('walk_up', 20, -1);
            }
             else if(this.moveDirection == 4)
            {
                this.animate('walk_down', 20, -1);
            }
            else if(this.isDown('M'))
            {
                this.animate('walk_left', 15, -1);
            }
            else
            {
                this.stop();
            }*/
        },
       
        killPlayer: function(data) {
	playerCharacter = data[0].obj;
		playerCharacter.collect();
	},
        killPlayerWithCoord: function ()
        { 
            if(playerX >= this.x && playerY == this.y && playerX <= (this.x + this.w))
            {	
				Crafty.trigger('EnemyCollison', this);
          
            }
                       
        }
 });
 


var levelReady = 0;
//var level = Scene.level1;



// This is the player-controlled character
Crafty.c('PlayerCharacter', {
    
   
    
    init: function() {
        this.requires('Actor, Multiway, Collision, Gravity, spr_player, SpriteAnimation, Keyboard')// Multiway: Character goes in the direction of the degree number. Right Arrow = 0 (Clockwise). Number in the Beginnig is the speed.           
                .bind('KeyDown', this.keyTester)
                .bind('KeyUp', this.keyTester)
                .bind('EnterFrame', this.toDoList)
                .animate("walk_left", 0, 0, 4)
                .animate("walk_right", 5, 0, 9)
                .animate("walk_up", 0, 1, 2)
                .animate("walk_down", 2, 1, 0)
                .animate("climb_right", 0, 2, 3) 
                .animate("climb_left", 4, 2, 7) 
                .onHit('Treasure', this.collectTreasure)
                .onHit('Exit', this.hitExit);
				
		var animation_speed = 5;
        this.bind('NewDirection', function(data) {
        if (data.x > 0) {
			this.animate('walk_right', animation_speed, -1);
        } else if (data.x < 0) {
			this.animate('walk_left', animation_speed, -1);
        } else if (data.y > 0) {
			this.animate('walk_down', animation_speed, -1);
        } else if (data.y < 0) {
			this.animate('walk_up', animation_speed, -1);
        } else {
			this.stop();
        }
        }); 
                
    },
	
        keyTester: function ()
        {
          if (this.moveDirection == 4 && 
                (
                    (detectNextBlock_CurrentLeftUp(this.x, this.y, this.h, this.w) == '-' || detectNextBlock_CurrentRightUp(this.x, this.y, this.h, this.w) == '-') || 
                    (detectNextBlock_CurrentLeftUp(this.x, this.y, this.h, this.w) == 'H' || detectNextBlock_CurrentRightUp(this.x, this.y, this.h, this.w) == 'H')
                ) &&
                (
                    (detectNextBlock_CurrentLeftDown(this.x, this.y, this.h, this.w) == '.' || detectNextBlock_CurrentRightDown(this.x, this.y, this.h, this.w) == '.') || 
                    (detectNextBlock_CurrentLeftDown(this.x, this.y, this.h, this.w) == '-' || detectNextBlock_CurrentRightDown(this.x, this.y, this.h, this.w) == '-')
                ) 
             )
          {
              this.moveDirection = 4;
          }
          else if (this.moveDirection == 1 && 
                (
                    (
                        //(this.detectNextBlock_CurrentLeftUp() == '.' && this.detectNextBlock_CurrentRightUp() == '-') || 
                        (detectNextBlock_CurrentLeftUp(this.x, this.y, this.h, this.w) == '.' && detectNextBlock_CurrentRightUp(this.x, this.y, this.h, this.w) == 'H')
                    ) &&
                    (
                        (detectNextBlock_DownLeft(this.x, this.y, this.h, this.w) == '.' || detectNextBlock_DownRight(this.x, this.y, this.h, this.w) == '.' )
                        
                    )
                ) 
             )
          {
              this.moveDirection = 1;
          }
           else if (this.moveDirection == 3 && 
                (
                    (
                        //(this.detectNextBlock_CurrentLeftUp() == '-' && this.detectNextBlock_CurrentRightUp() == '.') || 
                        (detectNextBlock_CurrentLeftUp(this.x, this.y, this.h, this.w) == 'H' && detectNextBlock_CurrentRightUp(this.x, this.y, this.h, this.w) == '.')
                    ) &&
                    (
                        (detectNextBlock_DownLeft(this.x, this.y, this.h, this.w) == '.' || detectNextBlock_DownRight(this.x, this.y, this.h, this.w) == '.' )
                        
                    )
                ) 
             )
          {
              this.moveDirection = 3;
          }
          else
          {
            this.moveDirection = 0;
            if(this.isDown('LEFT_ARROW') || this.isDown('A'))
            {
                this.moveDirection = 1;
                if(detectNextBlock_CurrentLeftUp(this.x, this.y, this.h, this.w) == '-' || detectNextBlock_CurrentRightUp(this.x, this.y, this.h, this.w) == '-')
                    this.animate('climb_left', 17, -1);
                else
                    this.animate('walk_left', 25, -1);
            }
            else if(this.isDown('RIGHT_ARROW')  || this.isDown('D'))
            {
                this.moveDirection = 3;
                if(detectNextBlock_CurrentLeftUp(this.x, this.y, this.h, this.w) == '-' || detectNextBlock_CurrentRightUp(this.x, this.y, this.h, this.w) == '-')
                    this.animate('climb_right', 17, -1);
                else
                    this.animate('walk_right', 25, -1);
            }
             else if(this.isDown('UP_ARROW')  || this.isDown('W'))
            {
                this.moveDirection = 2;
                this.animate('walk_up', 20, -1);
            }
             else if(this.isDown('DOWN_ARROW')  || this.isDown('S'))
            {
                this.moveDirection = 4;
                this.animate('walk_down', 20, -1);
            }
            else if(this.isDown('M'))
            {
                this.moveDirection = 3;
                this.animate('walk_left', 15, -1);
            }
            //Buddeln
             else if(this.isDown('Q'))
            {
                
                
                    /*var coord = coord_DownLeft (playerX,playerY,playerH,playerW);
                    console.log(coord[0] +","+coord[1]);
                    
                        coord[0] -= 1;
                        //Frage
                        var diggedStone = map_comp[coord[0]][coord[1]];
                        diggedStone.digged = 1;
                    }
                    else //if(detectNextBlock_DownLeft(playerX,playerY,playerH,playerW) == 'S')
                    {
                        var diggedStone = map_comp[coord[0]][coord[1]];
                        
                        diggedStone.bind('EnterFrame', this.checkDigging);
                        console.log(diggedStone.digged);
                    }
                    //console.log(diggedStone.digged);*/
                    
                    var coord = coord_DownLeft (playerX, playerY, playerH, playerW);

                    if(coord_DownRight (playerX,playerY,playerH,playerW) == coord_DownLeft (playerX,playerY,playerH,playerW) && detectNextBlock_CornerDownLeft() == 'W')
                    {
                        console.log("genau   || Coord X: " + coord[0] + "   Y: " + coord[1] + "     ||    DetetectNextBlock: " + detectNextBlock_CornerDownLeft(playerX,playerY,playerH,playerW)); 
                        var diggedStone = map_comp[coord[1]][coord[0]];
                    }
                    else if(detectNextBlock_DownLeft(playerX,playerY,playerH,playerW) == 'W')
                    {
                        console.log("ungenau || Coord X: " + coord[0] + "   Y: " + coord[1] + "     ||    DetetectNextBlock: " + detectNextBlock_CornerDownLeft(playerX,playerY,playerH,playerW));
                        var diggedStone = map_comp[coord[1]][coord[0]];
                        diggedStone.dig();
                        console.log(diggedStone);
                        console.log(diggedStone.digged);
                    }
                    
            }
             else if(this.isDown('E'))
            {
                
            }
            else
            {
                this.stop();
            }
          }
        },
        moveDirection : 0,
        playerSpeed : 2,
        
        
        toDoList: function(){
          //this.moveDirection = keyTester(this.x, this.y, this.w ,this.h, this.moveDirection);
          //movePlayer(this.x, this.y, this.w, this.h, this.moveDirection, this.playerSpeed); 
          this.applyXandY();
        },
        
        applyXandY: function(){
            var xAndY = movePlayer(this.x, this.y, this.h, this.w, this.moveDirection, this.playerSpeed);
            this.x = xAndY[0];
            this.y = xAndY[1];
            playerX = this.x;
            playerY = this.y; 
            playerW = this.w;
            playerH = this.h;
        },
        
	 // Respond to this player collecting a Treasure
	collectTreasure: function(data) {
	treasure = data[0].obj;
		treasure.collect();
	},
        
         // Respond to this player hitting the exit
	hitExit: function(data) {
            exit = data[0].obj;
		exit.collect();
	},
        
	collect: function() {
	this.destroy();
	Crafty.trigger('PlayerKilled', this);
    }
	
        
});

var treasureCollected = 0;

Crafty.c('Treasure', {
    init: function() {
        this.requires('Actor, spr_treasure')
                .sprite(0,0);
    },
	
	collect: function() {
        
        treasureCollected += 1;
	this.destroy();
	Crafty.trigger('TreasureCollected', this);
    }
});

Crafty.c('Exit', {
    init: function() {
        this.requires('Actor, Image')
                .image('assets/Ladder.png');
    },
	
    collect: function() {
	Crafty.trigger('EndLevel', this);
    }
});

//treasure container class. Saves number of treasures as the size of the array and the state of them as data in it.
Crafty.c('TreasureContainer', {

    init: function() {
		this._treasures  = new Array();
	},
		
	initialize: function() {
		this._treasures = [];
	},
	
	reset: function() {
		for(var i = 0; i < this._treasures.length; i++) {
			if( this._treasures[i] == "Collected") {
				this._treasures[i] = "Uncollected";
			}		
		}
	},
	
    add: function() {
		this._treasures.push("Uncollected");
    },
       
	getLength: function() {
		return this._treasures.length;
	},

	// a function to check if all treasures have been collected;
	//returns true if they are, otherwise returns false
	checkTreasures: function() {
	
		var result = true;
	
		for(var i = 0; i < this._treasures.length; i++) {
			if( this._treasures[i] != "Collected") {
				result = false;
			}
		}
		return result;
	},
	
	//a function to safe that a treasure has been collected by the player
	collectTreasure: function() {
		for(var i = 0; i < this._treasures.length; i++) {
			if( this._treasures[i] == "Uncollected") {
				this._treasures[i] = "Collected";
				break;
			}		
		}
	},
	
	//a function to safe an enemy collecting a treasure
	stealTreasure: function() {
		for(var i = 0; i < this._treasures.length; i++) {
			if( this._treasures[i] == "Uncollected") {
				this._treasures[i] = "Stolen";
				break;
			}		
		}
	},
	
	//a function to safe an enemy dropping a treasure
	dropTreasure: function() {
		for(var i = 0; i < this._treasures.length; i++) {
			if( this._treasures[i] == "Stolen") {
				this._treasures[i] = "Uncollected";
				break;
			}		
		}
	}
});

