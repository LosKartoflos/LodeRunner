// The Grid component allows an element to be located
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

// A Tree is just an Actor with a certain color
Crafty.c('Frame', {
    init: function() {
        this.requires('Actor, Color, Solid')
                .color('rgb(220, 220, 220)');
    },
});

// A Bush is just an Actor with a certain color
Crafty.c('Stone', {
    init: function() {
        this.requires('Actor, Color, Solid')
                .color('rgb(139,26,26)');
    },
});
Crafty.c('Ladder', {
    init: function() {
        this.requires('Actor, Color')
                .color('rgb(205,193,197)');
    },
});
Crafty.c('Pole', {
    init: function() {
        this.requires('Actor, Color')
                .color('rgb(230,230,230)');
    },
});

// This is the player-controlled character
Crafty.c('PlayerCharacter', {
    init: function() {
        this.requires('Actor, Multiway, Color, Collision, Gravity')// Multiway: Character goes in the direction of the degree number. Right Arrow = 0 (Clockwise). Number in the Beginnig is the speed.
                .multiway(4,{UP_ARROW: -90, DOWN_ARROW: 90, RIGHT_ARROW: 0, LEFT_ARROW: 180})
		.gravity('Solid')
                .color('rgb(150, 150, 150)')
                .stopOnSolids()
		.onHit('Treasure', this.collectTreasure);
    },
	//"Reads" the map. Each Block around the player is saved in an array.
	//Index 1 is the block in the upper left corner and then its clockwise around till 8. 0 is the Block in the middle (where the Player is/was).
	//It returns an array with the "code-letters" of the Block.
	surroundingBlock: function (x_pos, y_pos) {
		var block = [];
                //var x_pos = Crafty.e('PlayerCharacter')
                //var y_pos = Crafty.e('PlayerCharacter')
		x_pos = Math.round(x_pos);
		y_pos = Math.round(y_pos);
		
		block [0] = standingOn(x_pos, y_pos);//middle
		block [1] = standingOn(x_pos -1, y_pos -1);
		block [2] = standingOn(x_pos , y_pos -1);//ceeiling
		block [3] = standingOn(x_pos +1 , y_pos -1);
		block [4] = standingOn(x_pos +1, y_pos);//right
		block [5] = standingOn(x_pos +1, y_pos +1);
		block [6] = standingOn(x_pos , y_pos +1);//bottom
		block [7] = standingOn(x_pos -1, y_pos +1);
		block [8] = standingOn(x_pos -1, y_pos );//left
		
		return this.block;
	},
	//Returns the Block, which the Player is standing on
	standingOn: function (x_pos, y_pos)
	{
                x_pos = Math.round(x_pos);
		y_pos = Math.round(y_pos);
            
		return Crafty.map[y_pos].charAt(x_pos);
	},
        //says you, if there is a special type of Block, at specific position aroud the player.
        //returns true and false
        // blockType: Enter the letter of the Block (for exmaple 'H' for Ledder)
        // postion: like the positions at surroundingBlock. E.g. 0 is the middle and 2 the Block above. Numbers from 0 until 8
        checkBlock : function (blockType, position)
        {
            var blockArray = Crafty.e('PlayerCharacter').surroundingBlock();
            if(blockType == blockArray[position]);
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
Crafty.c('Treasure', {
    init: function() {
        this.requires('Actor, Color')
                .color('rgb(245,184,0)');
    },
	
	collect: function() {
	this.destroy();
	Crafty.trigger('TreasureCollected', this);
}
});