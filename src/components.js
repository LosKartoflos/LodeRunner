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
        this.requires('Actor, Solid, Image')                
                .image('assets/Stein_oK_72ppi.png');
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
        this.requires('Actor, Image')                
               // .image('assets/Leiter_oK_24x24_72ppi.png');
				.image('assets/Ladder.png');
               
    },
});
Crafty.c('Pole', {
    init: function() {
        this.requires('Actor, Image')
                .image('assets/Pole.png');
    },
});
 
 

 
 Crafty.c('Enemy', {
    init: function() {
        this.requires('Actor, Collision, Gravity, spr_enemy, SpriteAnimation')
                //.stopOnSolids()
                .bind('EnterFrame', this.movePlayer)
                .animate("walk_left", 0, 0, 2)
                .animate("walk_right", 3, 0, 5)
                .animate("walk_up", 3, 0, 5)
                .animate("walk_down", 0, 0, 2) 
                .onHit('PlayerCharacater', this.killPlayer);
                //.onHit('Treasure', this.collectTreasure);
    },

/*	var animation_speed = 8;
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
	}); */
    

    


                
                
    
    //Detects the upcoming block in -x direction 
        detectNextBlock_Left: function ()
        {
            var mapCoordY = (this.y )/ this.h;
            var mapCoordX = (this.x - 1) / this.w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
            return level1[mapCoordY-1][mapCoordX-1];
        },
          detectNextBlock_LeftDown: function ()
        {
            var mapCoordY = (this.y + this.h -1 )/ this.h;
            var mapCoordX = (this.x - 1) / this.w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
            return level1[mapCoordY-1][mapCoordX-1];
        },
        //Detects the upcoming block -y direction
        detectNextBlock_UpLeft: function ()
        {
            var mapCoordY = (this.y - 1)/ this.h;
            var mapCoordX = (this.x ) / this.w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
            return level1[mapCoordY-1][mapCoordX-1];
           
        },
        detectNextBlock_UpRight: function ()
        {
            var mapCoordY = (this.y - 1)/ this.h;
            var mapCoordX = (this.x + this.w -1) / this.w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
            return level1[mapCoordY-1][mapCoordX-1];
           
        },
        //Detects the upcoming block +x direction
        detectNextBlock_Right: function ()
        {
            var mapCoordY = (this.y)/ this.h;
            var mapCoordX = (this.x + this.w) / this.w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
            return level1[mapCoordY-1][mapCoordX-1];
        },
        detectNextBlock_RightDown: function ()
        {
            var mapCoordY = (this.y + this.h - 1)/ this.h;
            var mapCoordX = (this.x + this.w) / this.w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
            return level1[mapCoordY-1][mapCoordX-1];
        },
        //Detects the upcoming block und +y direction
        detectNextBlock_DownLeft: function ()
        {
            var mapCoordY = (this.y + this.h)/ this.h;
            var mapCoordX = (this.x) / this.w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
             return level1[mapCoordY-1][mapCoordX-1];
        },
        detectNextBlock_CornerDownLeft: function ()
        {
            var mapCoordY = (this.y + this.h)/ this.h;
            var mapCoordX = (this.x -1) / this.w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
             return level1[mapCoordY-1][mapCoordX-1];
        },
        detectNextBlock_CornerDownRight: function ()
        {
            var mapCoordY = (this.y + this.h)/ this.h;
            var mapCoordX = (this.x + this.w) / this.w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
             return level1[mapCoordY-1][mapCoordX-1];
        },
        detectNextBlock_DownRight: function ()
        {
            var mapCoordY = (this.y + this.h)/ this.h;
            var mapCoordX = (this.x + this.w -1) / this.w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
            return level1[mapCoordY-1][mapCoordX-1];      
        },
        detectNextBlock_CurrentRightUp: function()
        {
            var mapCoordY = (this.y)/ this.h;
            var mapCoordX = (this.x + this.w -1) / this.w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
            return level1[mapCoordY-1][mapCoordX-1];  
        },
        detectNextBlock_CurrentLeftUp: function()
        {
            var mapCoordY = (this.y)/ this.h;
            var mapCoordX = (this.x) / this.w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
            return level1[mapCoordY-1][mapCoordX-1];  
        },
        detectNextBlock_CurrentRightDown: function()
        {
            var mapCoordY = (this.y + this.h -1)/ this.h;
            var mapCoordX = (this.x + this.w -1) / this.w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
            return level1[mapCoordY-1][mapCoordX-1];  
        },
        detectNextBlock_CurrentLeftDown: function()
        {
            var mapCoordY = (this.y + this.h -1)/ this.h;
            var mapCoordX = (this.x) / this.w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
            return level1[mapCoordY-1][mapCoordX-1];  
        },
        //animationSpeed: 5,
        ki: function ()
        {
          if (this.moveDirection == 4 && 
                (
                    (this.detectNextBlock_CurrentLeftUp() == '-' || this.detectNextBlock_CurrentRightUp() == '-') || 
                    (this.detectNextBlock_CurrentLeftUp() == 'H' || this.detectNextBlock_CurrentRightUp() == 'H')
                ) &&
                (
                    (this.detectNextBlock_CurrentLeftDown() == '.' || this.detectNextBlock_CurrentRightDown() == '.') || 
                    (this.detectNextBlock_CurrentLeftDown() == '-' || this.detectNextBlock_CurrentRightDown() == '-')
                ) 
             )
          {
              this.moveDirection = 4;
          }
          else if (this.moveDirection == 1 && 
                (
                    (
                        //(this.detectNextBlock_CurrentLeftUp() == '.' && this.detectNextBlock_CurrentRightUp() == '-') || 
                        (this.detectNextBlock_CurrentLeftUp() == '.' && this.detectNextBlock_CurrentRightUp() == 'H')
                    ) &&
                    (
                        (this.detectNextBlock_DownLeft() == '.' || this.detectNextBlock_DownRight() == '.' )
                        
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
                        (this.detectNextBlock_CurrentLeftUp() == 'H' && this.detectNextBlock_CurrentRightUp() == '.')
                    ) &&
                    (
                        (this.detectNextBlock_DownLeft() == '.' || this.detectNextBlock_DownRight() == '.' )
                        
                    )
                ) 
             )
          {
              this.moveDirection = 3;
          }
          else//wirklicher Ki Teil
          {
              if (playerY < this.y && ((this.detectNextBlock_CurrentRightUp() == 'H' || this.detectNextBlock_CurrentLeftUp() == 'H') ||
                      ((this.detectNextBlock_CurrentRightUp() != 'W' || this.detectNextBlock_CurrentLeftUp() != 'W') &&
                      (this.detectNextBlock_CurrentRightDown() == 'H' || this.detectNextBlock_CurrentLeftDown() == 'H'))
                      ))
              {
                  this.moveDirection = 2;
              }
              else if (playerY > this.y && ((this.detectNextBlock_DownRight() == 'H' || this.detectNextBlock_DownRight() == 'H') || 
                                            ((this.detectNextBlock_CurrentRightUp() == '-' || this.detectNextBlock_CurrentLeftUp() == '-') &&
                                            (this.detectNextBlock_DownRight() == '.' || this.detectNextBlock_DownRight() == '.') &&
                                            //((this.x < (playerx+10)) && (this.x > (playerx-10)))
                                            ((playerX-15) <= this.x && (playerX-15) >= this.x)
                                            )
                                           )
                       )
              {
                  this.moveDirection = 4;
              }
              else if ((this.moveDirection == 1 || this.moveDirection == 3) && (playerY != this.y))
              {
                  //bleibt moveDirection die Gleich
                  if(this.x == 24)
                      this.moveDirection = 3;
                  else if(this.x == 768)
                      this.moveDirection = 1;
              }
              else if(playerX < this.x)//links
              {
                  if(this.detectNextBlock_CornerDownLeft() == '.' && (this.detectNextBlock_DownLeft() == 'H'))
                    this.moveDirection = 3;
                  /*else if(this.detectNextBlock_Left() == 'W' && this.detectNextBlock_CurrentLeftUp() == 'H' && (playerX%4) == 0)
                    this.moveDirection = 2;*/
                  else if(this.detectNextBlock_Left() == 'W')
                    this.moveDirection = 3;
                  else
                    this.moveDirection = 1;
              }
              else if(playerX > this.x)// rechts
              {
                  if(this.detectNextBlock_CornerDownRight() == '.' && (this.detectNextBlock_DownRight() == 'H'))
                    this.moveDirection = 1;
                  /*else if(this.detectNextBlock_Right() == 'W' && this.detectNextBlock_CurrentLeftUp() == 'H' && (playerX%4) == 0)
                    this.moveDirection = 2;*/
                  else if(this.detectNextBlock_Right() == 'W')
                    this.moveDirection = 1;
                  else
                    this.moveDirection = 3;
              }
          }
        },
        moveDirection : 0,
        playerSpeed : 1.5,
        movePlayer: function ()
        { 
            //console.log(Crafty.e)
            this.ki();
            this.killPlayerWithCoord();
            if (
                (((this.detectNextBlock_DownLeft() == '.' && this.detectNextBlock_DownRight() == '.') || //when underneath is air
                  (this.detectNextBlock_DownLeft() == '-' && this.detectNextBlock_DownRight() == '-') || //or a pole
                  (this.detectNextBlock_DownLeft() == 'T' && this.detectNextBlock_DownRight() == 'T'))) &&// or a treasure
                  (this.detectNextBlock_CurrentLeftUp() != '-' || this.detectNextBlock_CurrentRightUp() != '-')
                 //((this.detectNextBlock_CurrentLeftDown() != '-' && this.detectNextBlock_CurrentRightDown() != '-') &&
                  //(this.detectNextBlock_CurrentLeftUp) != '-' && this.detectNextBlock_CurrentRightUp() != '-')
                /*  ||//hanging between
                (((this.detectNextBlock_CurrentLeftUp() == '-' || this.detectNextBlock_CurrentRightUp() == '-') ||
                  (this.detectNextBlock_CurrentLeftUp() == 'H' || this.detectNextBlock_CurrentRightUp() == 'H'))&&
                 ((this.detectNextBlock_DownLeft() == '.' && this.detectNextBlock_DownRight() == '.') || //when underneath is air
                  (this.detectNextBlock_DownLeft() == '-' && this.detectNextBlock_DownRight() == '-')))     */
                ) 
            {
               this.y += this.playerSpeed;
               this.moveDirection = 0;
            }
            else if(this.moveDirection == 1 && this.detectNextBlock_Left() != 'W' && this.x != 24 && this.detectNextBlock_LeftDown() != 'W')//left
            {
                this.x -= this.playerSpeed;
            }
            else if(this.moveDirection == 2 &&                                        
                    (((this.detectNextBlock_UpLeft() == 'H' || this.detectNextBlock_UpRight() == 'H')//ladder above
                    ||
                    (this.detectNextBlock_CurrentRightDown() == 'H' || this.detectNextBlock_CurrentLeftDown() == 'H'))
                    ||
                    ((this.detectNextBlock_UpLeft() == 'h' || this.detectNextBlock_UpRight() == 'h')
                    && (this.detectNextBlock_CurrentRightDown() == 'H' || this.detectNextBlock_CurrentLeftDown() == 'H')))
               
                   )//on ladder
            {
                //ladder on rightside
                if (this.detectNextBlock_CurrentLeftUp() != 'H' && this.detectNextBlock_CurrentRightUp() == 'H')
                {
                    this.x += this.playerSpeed;
                }
                else if (this.detectNextBlock_CurrentLeftUp() == 'H' && this.detectNextBlock_CurrentRightUp() != 'H')
                {
                    this.x -= this.playerSpeed;
                }
                else
                {
                    this.y -= this.playerSpeed;
                }
            }
             else if(this.moveDirection == 3 && this.detectNextBlock_Right() != 'W' && this.x != 768 && this.detectNextBlock_RightDown() != 'W')//right
            {
                this.x += this.playerSpeed;
            }
             else if(this.moveDirection == 4 &&
                     (this.detectNextBlock_DownLeft() != 'W' || this.detectNextBlock_DownRight() != 'W')
                    )//down
            {
                if (this.detectNextBlock_DownLeft() != 'W' && this.detectNextBlock_DownRight() == 'W')
                {
                    this.x -= this.playerSpeed;
                }
                else if (this.detectNextBlock_DownLeft() == 'W' && this.detectNextBlock_DownRight() != 'W')
                {
                    this.x += this.playerSpeed;
                }
                else
                {
                    this.y += this.playerSpeed;
                }
            }
        },
	/* // Respond to this player collecting a Treasure
	collectTreasure: function(data) {
	treasure = data[0].obj;
		treasure.collect();
	},
        */
        killPlayer: function(data) {
	playerCharacter = data[0].obj;
		playerCharacter.collect();
	},
        killPlayerWithCoord: function ()
        { 
            if(playerX == this.x && playerY == this.y)
            {
                 Crafty.e('2D, DOM, Text')
                    .text("Game Over")
                    .attr({ x: 0, y: Game.height()/2 - 24, w: Game.width() })
                    .css({ "text-align": "center"})
                    .textFont({ size: '15px', weight: 'bold' })
                    .textColor("#FFFFFF");  
            }
                       
        }
 });
 

var playerX = 0;
var playerY = 0;
var levelReady = 0;
//var level = Scene.level1;



// This is the player-controlled character
Crafty.c('PlayerCharacter', {
    
   
    
    init: function() {
        this.requires('Actor, Multiway, Collision, Gravity, spr_player, SpriteAnimation, Keyboard')// Multiway: Character goes in the direction of the degree number. Right Arrow = 0 (Clockwise). Number in the Beginnig is the speed.
                //.multiway(4,{UP_ARROW: upDeg, DOWN_ARROW: downDeg, RIGHT_ARROW: rightDeg, LEFT_ARROW: leftDeg})
                //.multiway(4,{RIGHT_ARROW: rightDeg, LEFT_ARROW: leftDeg})
                .bind('KeyDown', this.keyTester)
                .bind('KeyUp', this.keyTester)
                .bind('EnterFrame', this.movePlayer)
		//.gravity('Solid') //use gravityTester instead
                //.stopOnSolids()
                //.caseTester()
                //.climbTester()
				.animate("walk_left", 0, 0, 2)
                .animate("walk_right", 3, 0, 5)
                //.animate("walk_up", 3, 0, 5)
                //.animate("walk_down", 0, 0, 2) 
                //.onHit('Ladder', this.antigravity)   // ist nur vorrübergehend, damit man das level beenden kann
                .onHit('Treasure', this.collectTreasure);
				
		var animation_speed = 8;
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
	//Returns the Block ID (Stone, Ladder, etc.).
        //Needs map coordinates not pixels
	blockIs: function (mapCoordY, mapCoordX)
	{          
                //var block = Game.map[mapCoordY][mapCoordX];
                //return Game.map[mapCoordY][mapCoordX];
                return level1[mapCoordY-1][mapCoordX-1];
                //return block;
                //console.log(Game.map[mapCoordY][mapCoordX]);
	},
        //level: Scene.level1,
        //Detects the upcoming block in -x direction 
        detectNextBlock_Left: function ()
        {
            var mapCoordY = (this.y )/ this.h;
            var mapCoordX = (this.x - 1) / this.w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
            return level1[mapCoordY-1][mapCoordX-1];
        },
          detectNextBlock_LeftDown: function ()
        {
            var mapCoordY = (this.y + this.h -1 )/ this.h;
            var mapCoordX = (this.x - 1) / this.w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
            return level1[mapCoordY-1][mapCoordX-1];
        },
        //Detects the upcoming block -y direction
        detectNextBlock_UpLeft: function ()
        {
            var mapCoordY = (this.y - 1)/ this.h;
            var mapCoordX = (this.x ) / this.w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
            return level1[mapCoordY-1][mapCoordX-1];
        },
        detectNextBlock_UpRight: function ()
        {
            var mapCoordY = (this.y - 1)/ this.h;
            var mapCoordX = (this.x + this.w -1) / this.w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
            return level1[mapCoordY-1][mapCoordX-1];
        },
        //Detects the upcoming block +x direction
        detectNextBlock_Right: function ()
        {
            var mapCoordY = (this.y)/ this.h;
            var mapCoordX = (this.x + this.w) / this.w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
            return level1[mapCoordY-1][mapCoordX-1];
        },
        detectNextBlock_RightDown: function ()
        {
            var mapCoordY = (this.y + this.h - 1)/ this.h;
            var mapCoordX = (this.x + this.w) / this.w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
            return level1[mapCoordY-1][mapCoordX-1];
        },
        //Detects the upcoming block und +y direction
        detectNextBlock_DownLeft: function ()
        {
            var mapCoordY = (this.y + this.h)/ this.h;
            var mapCoordX = (this.x) / this.w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
             return level1[mapCoordY-1][mapCoordX-1];
        },
        detectNextBlock_DownRight: function ()
        {
            var mapCoordY = (this.y + this.h)/ this.h;
            var mapCoordX = (this.x + this.w -1) / this.w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
            return level1[mapCoordY-1][mapCoordX-1];      
        },
        detectNextBlock_CurrentRightUp: function()
        {
            var mapCoordY = (this.y)/ this.h;
            var mapCoordX = (this.x + this.w -1) / this.w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
            return level1[mapCoordY-1][mapCoordX-1];  
        },
        detectNextBlock_CurrentLeftUp: function()
        {
            var mapCoordY = (this.y)/ this.h;
            var mapCoordX = (this.x) / this.w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
            return level1[mapCoordY-1][mapCoordX-1];  
        },
        detectNextBlock_CurrentRightDown: function()
        {
            var mapCoordY = (this.y + this.h -1)/ this.h;
            var mapCoordX = (this.x + this.w -1) / this.w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
            return level1[mapCoordY-1][mapCoordX-1];  
        },
        detectNextBlock_CurrentLeftDown: function()
        {
            var mapCoordY = (this.y + this.h -1)/ this.h;
            var mapCoordX = (this.x) / this.w;
            
            mapCoordX = Math.floor(mapCoordX);
            mapCoordY = Math.floor(mapCoordY);
            
            return level1[mapCoordY-1][mapCoordX-1];  
        },
        //animationSpeed: 5,
        keyTester: function ()
        {
          if (this.moveDirection == 4 && 
                (
                    (this.detectNextBlock_CurrentLeftUp() == '-' || this.detectNextBlock_CurrentRightUp() == '-') || 
                    (this.detectNextBlock_CurrentLeftUp() == 'H' || this.detectNextBlock_CurrentRightUp() == 'H')
                ) &&
                (
                    (this.detectNextBlock_CurrentLeftDown() == '.' || this.detectNextBlock_CurrentRightDown() == '.') || 
                    (this.detectNextBlock_CurrentLeftDown() == '-' || this.detectNextBlock_CurrentRightDown() == '-')
                ) 
             )
          {
              this.moveDirection = 4;
          }
          else if (this.moveDirection == 1 && 
                (
                    (
                        //(this.detectNextBlock_CurrentLeftUp() == '.' && this.detectNextBlock_CurrentRightUp() == '-') || 
                        (this.detectNextBlock_CurrentLeftUp() == '.' && this.detectNextBlock_CurrentRightUp() == 'H')
                    ) &&
                    (
                        (this.detectNextBlock_DownLeft() == '.' || this.detectNextBlock_DownRight() == '.' )
                        
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
                        (this.detectNextBlock_CurrentLeftUp() == 'H' && this.detectNextBlock_CurrentRightUp() == '.')
                    ) &&
                    (
                        (this.detectNextBlock_DownLeft() == '.' || this.detectNextBlock_DownRight() == '.' )
                        
                    )
                ) 
             )
          {
              this.moveDirection = 3;
          }
          else
          {
            this.moveDirection = 0;
            //console.log(this.isDown('LEFT_ARROW'))
            if(this.isDown('LEFT_ARROW'))
            {
                this.moveDirection = 1;
                this.animate('walk_left', 10, -1);
            }
            else if(this.isDown('RIGHT_ARROW'))
            {
                this.moveDirection = 3;
                this.animate('walk_right', 10, -1);
            }
             else if(this.isDown('UP_ARROW'))
            {
                this.moveDirection = 2;
                this.animate('walk_up', 10, -1);
            }
             else if(this.isDown('DOWN_ARROW'))
            {
                this.moveDirection = 4;
                this.animate('walk_down', 10, -1);
            }
            else if(this.isDown('M'))
            {
                this.moveDirection = 3;
                this.animate('walk_left', 15, -1);
            }
            else
            {
                this.stop();
            }
          }
        },
        moveDirection : 0,
        playerSpeed : 2,
        movePlayer: function ()
        { 
            console.log(this.detectNextBlock_UpLeft());
            console.log(this.detectNextBlock_CurrentRightDown())
            if (
                (((this.detectNextBlock_DownLeft() == '.' && this.detectNextBlock_DownRight() == '.') || //when underneath is air
                  (this.detectNextBlock_DownLeft() == '-' && this.detectNextBlock_DownRight() == '-') || //or a pole
                  (this.detectNextBlock_DownLeft() == 'T' && this.detectNextBlock_DownRight() == 'T'))) &&// or a treasure
                  (this.detectNextBlock_CurrentLeftUp() != '-' || this.detectNextBlock_CurrentRightUp() != '-')
                 //((this.detectNextBlock_CurrentLeftDown() != '-' && this.detectNextBlock_CurrentRightDown() != '-') &&
                  //(this.detectNextBlock_CurrentLeftUp) != '-' && this.detectNextBlock_CurrentRightUp() != '-')
                /*  ||//hanging between
                (((this.detectNextBlock_CurrentLeftUp() == '-' || this.detectNextBlock_CurrentRightUp() == '-') ||
                  (this.detectNextBlock_CurrentLeftUp() == 'H' || this.detectNextBlock_CurrentRightUp() == 'H'))&&
                 ((this.detectNextBlock_DownLeft() == '.' && this.detectNextBlock_DownRight() == '.') || //when underneath is air
                  (this.detectNextBlock_DownLeft() == '-' && this.detectNextBlock_DownRight() == '-')))     */
                ) 
            {
               this.y += this.playerSpeed;
               this.moveDirection = 0;
            }
            else if(this.moveDirection == 1 && this.detectNextBlock_Left() != 'W' && this.x != 24 && this.detectNextBlock_LeftDown() != 'W')//left
            {
                if(this.detectNextBlock_CurrentLeftUp() == '-' && this.detectNextBlock_CurrentLeftDown() != '-')
                {
                  this.y -= this.playerSpeed;   
                }
                else
                  this.x -= this.playerSpeed;
            }
            else if(this.moveDirection == 2 &&                                        
                    ((this.detectNextBlock_UpLeft() == 'H' || this.detectNextBlock_UpRight() == 'H')//ladder above
                    ||
                    (this.detectNextBlock_CurrentRightDown() == 'H' || this.detectNextBlock_CurrentLeftDown() == 'H'))
                    && (this.detectNextBlock_UpLeft() != 'W' || this.detectNextBlock_UpRight() != 'W')
                   )//on ladder
            {
                //ladder on rightside
                if (this.detectNextBlock_CurrentLeftUp() != 'H' && this.detectNextBlock_CurrentRightUp() == 'H')
                {
                    this.x += this.playerSpeed;
                }
                else if (this.detectNextBlock_CurrentLeftUp() == 'H' && this.detectNextBlock_CurrentRightUp() != 'H')
                {
                    this.x -= this.playerSpeed;
                }
                else
                {
                   this.y -= this.playerSpeed;
                }
            }
            else if(this.moveDirection == 2 &&  (treasureCollected == 3 || treasureCollected == 10) &&                                 
                    ((this.detectNextBlock_UpLeft() == 'h' || this.detectNextBlock_UpRight() == 'h')//ladder above
                    ||
                    (this.detectNextBlock_CurrentRightDown() == 'h' || this.detectNextBlock_CurrentLeftDown() == 'h'))
                    && (this.detectNextBlock_UpLeft() != 'W' || this.detectNextBlock_UpRight() != 'W')
                   )//on ladder
            {
                //ladder on rightside
                if (this.detectNextBlock_CurrentLeftUp() != 'h' && this.detectNextBlock_CurrentRightUp() == 'h')
                {
                    this.x += this.playerSpeed;
                }
                else if (this.detectNextBlock_CurrentLeftUp() == 'h' && this.detectNextBlock_CurrentRightUp() != 'h')
                {
                    this.x -= this.playerSpeed;
                }
                else
                {
                   this.y -= this.playerSpeed;
                }
            }
             else if(this.moveDirection == 3 && this.detectNextBlock_Right() != 'W' && this.x != 768 && this.detectNextBlock_RightDown() != 'W')//right
            {
                if(this.detectNextBlock_CurrentRightUp() == '-' && this.detectNextBlock_CurrentRightDown() != '-')
                {
                    this.y -= this.playerSpeed;   
                }
                else
                    this.x += this.playerSpeed;
            }
             else if(this.moveDirection == 4 &&
                     (this.detectNextBlock_DownLeft() != 'W' || this.detectNextBlock_DownRight() != 'W')
                    )//down
            {
                if (this.detectNextBlock_DownLeft() != 'W' && this.detectNextBlock_DownRight() == 'W')
                {
                    this.x -= this.playerSpeed;
                }
                else if (this.detectNextBlock_DownLeft() == 'W' && this.detectNextBlock_DownRight() != 'W')
                {
                    this.x += this.playerSpeed;
                }
                else
                {
                    this.y += this.playerSpeed;
                }
            }
            playerX = this.x;
            playerY = this.y;
        },
        
	 // Respond to this player collecting a Treasure
	collectTreasure: function(data) {
	treasure = data[0].obj;
		treasure.collect();
	},
        
	collect: function() {
	this.destroy();
	Crafty.trigger('PlayerKilled', this);
    }
	
        
});

var treasureCollected = 0;

Crafty.c('Treasure', {
    init: function() {
        this.requires('Actor, Image')
                .image('assets/Schatz_24x19_72ppi.png');
    },
	
	collect: function() {
        
        treasureCollected += 1;
	this.destroy();
	Crafty.trigger('TreasureCollected', this);
    }
});


