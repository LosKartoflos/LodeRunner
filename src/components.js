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
        this.requires('Actor, Twoway, Color, Collision, Gravity') 
                .twoway(2)
				.gravity('Solid')
                .color('rgb(150, 150, 150)')
                .stopOnSolids()
				.onHit('Treasure', this.collectTreasure);
    },
	//"Reads" the map. Each Block around the player is saved in an array.
	//Index 1 is the block in the upper left corner and then its clockwise around till 8. 0 is the Block in the middle (where the Player is/was).
	//As input you need an x and y coordinate. It returns an array with the "code-letters" of the Block.
	/*surroundingBlock: function (x_pos, y_pos) {
		var block = [];
		x_pos = Math.round(x_pos);
		y_pos = Math.round(y_pos);
		
		block [0] = standingOn(x_posy, y_pos);
		block [1] = standingOn(x_posy -1, y_pos -1);
		block [2] = standingOn(x_posy , y_pos -1);
		block [3] = standingOn(x_posy +1 , y_pos -1);
		block [4] = standingOn(x_posy +1, y_pos);
		block [5] = standingOn(x_posy +1, y_pos +1);
		block [6] = standingOn(x_posy , y_pos +1);
		block [7] = standingOn(x_posy -1, y_pos +1);
		block [8] = standingOn(x_posy -1, y_pos );
		
		return this.block;
	},
	//Returns the Block of the Play is standing on
	standingOn: function (x_pos, y_pos)
	{
		return Crafty.map[this.y_pos].charAt(this.x_pos);
	}*/
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