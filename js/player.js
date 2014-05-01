function Player(game) {
    this.game = game;
    this.sprite = null;
    this.isMoving = false;
    this.movingTicks = 0;
}

Player.prototype.preload = function () {
    this.game.load.spritesheet("trainer_male", "assets/trainer_male.png", 32, 32);
};

Player.prototype.create = function () {
    this.sprite = game.add.sprite(32, 32, "trainer_male");
    this.sprite.animations.add("down", [0, 1, 2, 3], 5, true);
    this.sprite.animations.add("left", [4, 5, 6, 7], 5, true);
    this.sprite.animations.add("right", [8, 9, 10, 11], 5, true);
    this.sprite.animations.add("up", [12, 13, 14, 15], 5, true);
    this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);

};

Player.prototype.update = function () {
    if(this.isMoving) {
        if(++this.movingTicks > 60) {
            this.movingTicks = false;
            this.isMoving = false;
            this.sprite.animations.stop();
            this.sprite.frame
        }
    }

};

Player.prototype.move = function (direction) {
    if(this.isMoving == true) {
        return;
    }

    this.isMoving = true;

    switch (direction) {
    case "up":
        this.sprite.animations.play("up");
        break;
    case "down":
        this.sprite.animations.play("down");
        break;
    case "left":
        this.sprite.animations.play("left");
        break;
    case "right":
        this.sprite.animations.play("right");
        break;
    default:
        break;
    }
};
