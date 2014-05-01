"use strict";

function Level(game) {
    this.game = game;
    this.map = null;
    this.layer = null;
}

Level.prototype = {
    preload: function () {
        //load tilemap
        this.game.load.tilemap('demo_map', 'assets/map.json', null, Phaser.Tilemap.TILED_JSON);

        //load tileset
        this.game.load.image('icecave_tiles', 'assets/icecave.jpg');
    },

    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);

        //set background color
        this.game.stage.backgroundColor = '#787878';

        //add tilemap
        this.map = this.game.add.tilemap('demo_map');

        //  The first parameter is the tileset name, as specified in the Tiled map editor (and in the tilemap json file)
        //  The second parameter maps this name to the Phaser.Cache key 'tiles'
        this.map.addTilesetImage('icecave', 'icecave_tiles');

        //  Creates a layer from the World1 layer in the map data.
        //  A Layer is effectively like a Phaser.Sprite, so is added to the display list.
        this.layer = this.map.createLayer('world');

        //  This resizes the game world to match the layer dimensions
        this.layer.resizeWorld();
    },

    update: function () {}
};
