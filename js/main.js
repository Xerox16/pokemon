var width = 320;
var height = 240;
var tileWidth = 16;
var tileHeight = 16;
var name = "Pokemon";

var game = new Phaser.Game(width, height, Phaser.AUTO, name, {
    preload: preload,
    create: create,
    update: update
});

var player = null;
var level = null;
var hud = null;
var keys = {
};


function preload() {
    //initialize level
    level = new Level(game);
    level.preload();

    //initialize player
    player = new Player(game);
    player.preload();

    //initialize head up display
    hud = new HUD(game);
}


function create() {
    level.create();
    player.create();
    hud.create();

    keys.up = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    keys.down = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    keys.left = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    keys.right = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
}

function update() {
    level.update();
    player.update();

    if (keys.up.isDown) {
        player.move("up");
    } else if (keys.down.isDown) {
        player.move("down");
    } else if (keys.left.isDown) {
        player.move("left");
    } else if (keys.right.isDown) {
        player.move("right");
    }
}
