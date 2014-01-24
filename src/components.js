
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
                .image("assets/stone.png");
    },
});
//Crafty.c('Stone', { //für spritemapping
//    init: function() {
//        this.requires('Actor, Solid, spr_stone');                              
//    },
//});
Crafty.c('Concrete', {   
    init: function() {
        this.requires('Actor, Solid, Image')                
                .image("assets/concrete.png");
    },
});
Crafty.c('Ladder', {
    init: function() {
        this.requires('Actor, Image')                
                .image("assets/ladder.png");
               
    },
});
Crafty.c('Pole', {
    init: function() {
        this.requires('Actor, Image')
                .image("assets/pole.png");
    },
});
 
//The Deegre directionn vor Multiway
var upDeg = -90;
var downDeg = 90;
var rightDeg = 0;
var leftDeg = 180;

//setInterval(Crafty.e('PlayerCharacter').h += 10, 1000);
// This is the player-controlled character

Crafty.c('PlayerCharacter', {
    
   
    
    init: function() {
        this.requires('Actor, Multiway, Color, Collision, Gravity')// Multiway: Character goes in the direction of the degree number. Right Arrow = 0 (Clockwise). Number in the Beginnig is the speed.
                //.multiway(4,{UP_ARROW: upDeg, DOWN_ARROW: downDeg, RIGHT_ARROW: rightDeg, LEFT_ARROW: leftDeg})
                .multiway(4,{RIGHT_ARROW: rightDeg, LEFT_ARROW: leftDeg})
		.gravity('Solid')
                .color('rgb(150, 150, 150)')
                .stopOnSolids()
		//.onHit('Ladder', this.antigravity)   // ist nur vorrübergehend, damit man das level beenden kann
		.onHit('Treasure', this.collectTreasure);
    },

        //Wird nicht benötigt ist sinnlos
	//"Reads" the map. Each Block around the player is saved in an array.
	//Index 0 is the block in the upper left corner and then its clockwise around till 8. 
	//It returns an array with the "code-letters" of the Block.
	/*surroundingBlock: function () {
		var block = [];
                var x_pos = this.y;
                var y_pos = this.x;
		x_pos = Math.round(x_pos);
		y_pos = Math.round(y_pos);
                
		block [0] = standingOn(x_pos -1, y_pos -1);
		block [1] = standingOn(x_pos , y_pos -1);//ceeiling
		block [2] = standingOn(x_pos +1 , y_pos -1);
		block [3] = standingOn(x_pos +1, y_pos);//right
		block [4] = standingOn(x_pos +1, y_pos +1);
		block [5] = standingOn(x_pos , y_pos +1);//bottom
		block [6] = standingOn(x_pos -1, y_pos +1);
		block [7] = standingOn(x_pos -1, y_pos );//left
		
		return this.block;
	},*/
	//Returns the Block ID (Stone, Ladder, etc.).
        //Needs map coordinates not pixels
	blockIs: function (mapCoordY, mapCoordX)
	{          
                return Game.map[mapCoordY].charAt(mapCoordX);
	},
        //says you, if there is a special type of Block, at specific position aroud the player.
        //returns true and false
        // blockType: Enter the letter of the Block (for exmaple 'H' for Ledder)
        // postion: position 0 is the block in the upper left corner and then its clockwise around till 8. 
        /*checkBlock : function (blockType, position)
        {
            var blockArray = Crafty.e('PlayerCharacter').surroundingBlock();
            if(blockType == blockArray[position]);
        },*/
    
        //Detects the upcoming block in -x direction 
        detectNextBlock_Left: function ()
        {
            var mapCoordY = (this.y )/ this.h;
            var mapCoordX = (this.x - 1) / this.w;
            
            return(blockIs(mapCoordY, mapCoordX));
        },
        //Detects the upcoming block -y direction
        detectNextBlock_Up: function ()
        {
            var mapCoordY = (this.y - 1)/ this.h;
            var mapCoordX = (this.x ) / this.w;
            
            return(blockIs(mapCoordY, mapCoordX));
        },
        //Detects the upcoming block +x direction
        detectNextBlock_Right: function ()
        {
            var mapCoordY = (this.y)/ this.h;
            var mapCoordX = (this.x + this.w) / this.w;
            
            return(blockIs(mapCoordY, mapCoordX));
        },
        //Detects the upcoming block und +y direction
        detectNextBlock_Down: function ()
        {
            var mapCoordY = (this.y + this.h)/ this.h;
            var mapCoordX = (this.x) / this.w;
            
            return(blockIs(mapCoordY, mapCoordX));
        },
        //Ables/disables climbing ability. Leads Player to the next leader, when the Ladder is within one Block
        climbMaster: function ()
        {
            //2 = is up
            if(key_down() ==  2 && this.detectNextBlock_Up() == 'H' || this.detectNextBlock_LeftAndUp() == 'h'){
                this.antigravity();
                this.multiway(4,{UP_ARROW: upDeg, RIGHT_ARROW: rightDeg, LEFT_ARROW: leftDeg});
            }
            else if(key_down() ==  2 && this.detectNextBlock_Up() != 'H' || this.detectNextBlock_LeftAndUp() != 'h'){
                this.gravity('Solid');
                this.multiway(4,{RIGHT_ARROW: rightDeg, LEFT_ARROW: leftDeg});
            }
            
            //4 = is down
            if(key_down() ==  2 && this.detectNextBlock_Up() == 'H' || this.detectNextBlock_LeftAndUp() == 'h'){
                this.antigravity();
                this.multiway(4,{DOWN_ARROW: downDeg, RIGHT_ARROW: rightDeg, LEFT_ARROW: leftDeg});
            }
            else if(key_down() ==  2 && this.detectNextBlock_Up() != 'H' || this.detectNextBlock_LeftAndUp() != 'h'){
                this.gravity('Solid');
                this.multiway(4,{RIGHT_ARROW: rightDeg, LEFT_ARROW: leftDeg});
            }
            
            setTimeout(climbMaster, 10);
        },
	// Registers a stop-movement function to be called when
	// this entity hits an entity with the "Solid" component
    stopOnSolids: function() {
        this.onHit('Solid', this.stopMovement);
		
        return this;		
    },
	stopMovement: function () {
        if (this._movement) {
            this.x -= this._movement.x;
            if (this.hit('Solid') != false) {
                this.x += this._movement.x;
                this.y -= this._movement.y;
                if (this.hit('Solid') != false) {
                    this.x -= this._movement.x;
                  //  this.y -= this._movement.y;
                }
            }
        } else {
            this._speed = 0;
            }
        },
	 // Respond to this player collecting a Treasure
	collectTreasure: function(data) {
	treasure = data[0].obj;
		treasure.collect();
	}
	
        
});

//returns number for arrow_keys
function key_down(e)
{
    var key_id = e.keyCode || e.which;
    
    if (key_id == 40)//down key
        return 0;
    if (key_id == 37)//left key
        return 1;
    if (key_id == 38)//up key
        return 2;
    if (key_id == 39)//right key
        return 3;
}

Crafty.c('Treasure', {
    init: function() {
        this.requires('Actor, Image')
                .image("assets/treasure.png");
    },
	
	collect: function() {
	this.destroy();
	Crafty.trigger('TreasureCollected', this);
}
});