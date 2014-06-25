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
        this.z=3;
    },
});
Crafty.c('Frame', {
    init: function() {
        this.requires('Actor, Color, Solid')
                .color('rgb(254, 254, 254)');
        this.z=2;
    },
});

 
Crafty.c('Stone', {   //ohne spritemapping
    init: function() {
        this.requires('Actor, Solid, spr_stone_normal')                
                .sprite(0,0);
        this.z=2;
        
    }, 
       digged: 0,
               
       diggedTimer: 0,        
       
       checkDigging: function(){
           
           
           
            if (this.digged == 1 && this.diggedTimer >= 300)
            {
                this.sprite(2,9);
                this.diggedTimer -= 1;
            }
            else if (this.digged == 1 && this.diggedTimer >= 150)
            {
                this.sprite(0,2);
                this.diggedTimer -= 1;
            }
            else if (this.digged == 1 && this.diggedTimer >= 2 )
            {
                this.sprite(0,1);
                this.diggedTimer -= 1;
                console.log("under 50 " + this.digged);
            }
            else if(this.digged == 1 && this.diggedTimer >= 1)
            {
                this.sprite(0,0);
                this.digged = 0;
                this.unbind('EnterFrame', this.checkDigging);
                //console.log("Else/Check Digging: " + this.digged);
            }
            
        },
        
        dig: function (){
            this.digged = 1;
            this.diggedTimer = 500;
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
        this.z=2;      
    },
});
Crafty.c('Pole', {
    init: function() {
        this.requires('Actor, spr_pole')
                .sprite(1,1);
        this.z=2;
    },
});

Crafty.c('Torch_BG',{
    init: function(){
        this.requires('Actor, spr_torch1, SpriteAnimation')
        //.reel('torchBurning', 1000, 0, 6, 4)
        //.animate('torchBurning', -1);
        .animate('burn', 0, 6, 3); 
        this.z=1;
        this.animate('burn', 20, -1);
    }
});

Crafty.c('Waterfall1_BG',{
    init: function(){
        this.requires('Actor, spr_torch1, SpriteAnimation')
        //.reel('torchBurning', 1000, 0, 6, 4)
        //.animate('torchBurning', -1);
        .animate('burn', 0, 3, 3); 
        this.z=1;
        this.animate('burn', 30, -1);
    }
});

Crafty.c('Waterfall2_BG',{
    init: function(){
        this.requires('Actor, spr_torch1, SpriteAnimation')
        //.reel('torchBurning', 1000, 0, 6, 4)
        //.animate('torchBurning', -1);
        .animate('burn', 0, 4, 3); 
        this.z=1;
        this.animate('burn', 30, -1);
    }
});

Crafty.c('Waterfall3_BG',{
    init: function(){
        this.requires('Actor, spr_torch1, SpriteAnimation')
        //.reel('torchBurning', 1000, 0, 6, 4)
        //.animate('torchBurning', -1);
        .animate('burn', 0, 5, 3); 
        this.z=1;
        this.animate('burn', 30, -1);
    }
});


Crafty.c('BG_Front', {
    init: function() {
        this.requires('Actor, spr_bg')
                .sprite(0,0);
        this.z=1;
    },
});

Crafty.c('BG', {
    init: function() {
        this.requires('Actor, spr_bg')
                .sprite(0,0);
        this.z=0;
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
                .animate("walk_left", 0, 0, 4)
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
          
          if(this.moveDirection == 1)
          {
                if(
                    (detectNextBlock_CurrentLeftUp(this.x, this.y, this.h, this.w) == '-' && detectNextBlock_CurrentRightUp(this.x, this.y, this.h, this.w) == '-') ||
                    (detectNextBlock_CurrentLeftUp(this.x, this.y, this.h, this.w) == '.' && detectNextBlock_CurrentRightUp(this.x, this.y, this.h, this.w) == '-') ||
                    (detectNextBlock_CurrentLeftUp(this.x, this.y, this.h, this.w) == '-' && detectNextBlock_CurrentRightUp(this.x, this.y, this.h, this.w) == '.')
                )
                {
                    this.animate('climb_left', 20, -1);
                }
                else
                {
                    this.animate('walk_left', 20, -1);
                }
          }
          else if(this.moveDirection == 3)
          {
                if(
                    (detectNextBlock_CurrentLeftUp(this.x, this.y, this.h, this.w) == '-' && detectNextBlock_CurrentRightUp(this.x, this.y, this.h, this.w) == '-') ||
                    (detectNextBlock_CurrentLeftUp(this.x, this.y, this.h, this.w) == '.' && detectNextBlock_CurrentRightUp(this.x, this.y, this.h, this.w) == '-') ||
                    (detectNextBlock_CurrentLeftUp(this.x, this.y, this.h, this.w) == '-' && detectNextBlock_CurrentRightUp(this.x, this.y, this.h, this.w) == '.')
                )
                {
                    this.animate('climb_right', 20, -1);
                }
                else
                {
                    this.animate('walk_right', 20, -1);
                }
          }
          else if(this.moveDirection == 2)
          {
              this.animate('walk_up', 20, -1);
          }
          else if(this.moveDirection == 4)
          {
              this.animate('walk_down', 20, -1);
          }

          
              
        },

        applyXandY: function(){
            var xAndY = movePlayer(this.x, this.y, this.h, this.w, this.moveDirection, this.playerSpeed);
            this.x = xAndY[0];
            this.y = xAndY[1];
            
            
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
 





var animation_speed = 15;
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
            if((this.isDown('UP_ARROW')  || this.isDown('W')) &&
                    (((detectNextBlock_UpLeft(this.x,this.y, this.h, this.w) == 'H' || detectNextBlock_UpRight(this.x, this.y, this.h, this.w) == 'H')//ladder above
                    ||
                    (detectNextBlock_CurrentRightDown(this.x, this.y, this.h, this.w) == 'H' || detectNextBlock_CurrentLeftDown(this.x, this.y, this.h, this.w) == 'H'))
                    ||
                    ((detectNextBlock_UpLeft(this.x, this.y, this.h, this.w) == 'h' || detectNextBlock_UpRight(this.x, this.y, this.h, this.w) == 'h')
                    && (detectNextBlock_CurrentRightDown(this.x, this.y, this.h, this.w) == 'H' || detectNextBlock_CurrentLeftDown(this.x, this.y, this.h, this.w) == 'H'))) )
            {
                this.moveDirection = 2;
                this.animate('walk_up', 20, -1);
            }
             else if((this.isDown('DOWN_ARROW')  || this.isDown('S')) &&      
                        (detectNextBlock_DownLeft( this.x,  this.y,  this.h,  this.w) != 'W' || detectNextBlock_DownRight( this.x,  this.y,  this.h,  this.w) != 'W'))
            {
                this.moveDirection = 4;
                this.animate('walk_down', 20, -1);
            }
            else if(this.isDown('M'))
            {
                this.moveDirection = 3;
                this.animate('walk_left', 15, -1);
            }
            else if(this.isDown('LEFT_ARROW') || this.isDown('A') )
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
            else
            {
                this.stop();
            }
            
            if(this.isDown('R'))
            {
                console.log("Block Above: " + detectNextBlock_UpLeft(this.x, this.y, this.h, this.w));
            }
            
            //Buddeln
            if(this.isDown('Q'))
            {       
                    var coord = coord_DownLeft (playerX, playerY, playerH, playerW);

                    if(coord_DownRight (playerX,playerY,playerH,playerW) == coord_DownLeft (playerX,playerY,playerH,playerW) && detectNextBlock_CornerDownLeft() == 'W')
                    {
                        //console.log("genau   || Coord X: " + coord[0] + "   Y: " + coord[1] + "     ||    DetetectNextBlock: " + detectNextBlock_CornerDownLeft(playerX,playerY,playerH,playerW)); 
                        var diggedStone = map_comp[coord[1]][coord[0]];
                    }
                    else if(detectNextBlock_DownLeft(playerX,playerY,playerH,playerW) == 'W')
                    {
                        //console.log("ungenau || Coord X: " + coord[0] + "   Y: " + coord[1] + "     ||    DetetectNextBlock: " + detectNextBlock_CornerDownLeft(playerX,playerY,playerH,playerW));
                        var diggedStone = map_comp[coord[1]][coord[0]];
                        diggedStone.dig();
                        //console.log(diggedStone.diggedTimer);
                        //console.log(diggedStone.digged);
                    }
                    
            }
            
            if(this.isDown('E'))
            {
                var coord = coord_DownRight (playerX, playerY, playerH, playerW);

                    if(coord_DownRight (playerX,playerY,playerH,playerW) == coord_DownLeft (playerX,playerY,playerH,playerW) && detectNextBlock_CornerDownRight() == 'W')
                    { 
                        var diggedStone = map_comp[coord[1]][coord[0]];
                    }
                    else if(detectNextBlock_DownRight(playerX,playerY,playerH,playerW) == 'W')
                    {
                       
                        var diggedStone = map_comp[coord[1]][coord[0]];
                        diggedStone.dig();

                    }
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
        if (treasureCollected == map[22][0] )
        {
            for (var y = 0; y < 10; y++) {
		
                for (var x = 0; x < Game.map_grid.width; x++) {    
																		           						
                    if (map[y][x] == 'h'){
                        Crafty.e('Ladder').at(x+1, y+1);
                        map[y][x] = 'H';
                        console.log(" map[y][x]: " + map[y][x]);
                    }
                    if (map[y][x] == 'X'){
                        Crafty.e('Exit').at(x+1, y+1);                           					
                    }
                    
                } 
            }
            (console.log("treasureCollected"));
        }
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
/*Crafty.c('TreasureContainer', {

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
});*/

