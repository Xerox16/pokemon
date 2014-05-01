"use strict";

function Player(game) {
    this.game = game;
    this.sprite = null;
    this.isMoving = false;
    this.movingTicks = 0;
}

Player.prototype = {
    preload: function () {
        this.game.load.spritesheet("trainer_male", "assets/trainer_male.png", 32, 32);
    },

    create: function () {
        this.sprite = this.game.add.sprite(32, 32, "trainer_male");

        //enable animations
        this.sprite.animations.add("down", [0, 1, 2, 3], 5, true);
        this.sprite.animations.add("left", [4, 5, 6, 7], 5, true);
        this.sprite.animations.add("right", [8, 9, 10, 11], 5, true);
        this.sprite.animations.add("up", [12, 13, 14, 15], 5, true);

        //enable physics
        this.game.physics.arcade.enable(this.sprite);
        this.sprite.collideWorldBounds = true;
    },

    update: function () {
        if (this.isMoving) {
            if (++this.movingTicks > 20) {
                this.movingTicks = false;
                this.isMoving = false;
                this.sprite.animations.stop();
                this.sprite.body.velocity.y = 0;
                this.sprite.body.velocity.x = 0;
            }
        }

    },

    move: function (direction) {
        if (this.isMoving === true) {
            return;
        }

        this.isMoving = true;

        switch (direction) {
        case "up":
            this.sprite.animations.play("up");
            this.sprite.body.velocity.y = -64;
            break;
        case "down":
            this.sprite.animations.play("down");
            this.sprite.body.velocity.y = 64;
            break;
        case "left":
            this.sprite.animations.play("left");
            this.sprite.body.velocity.x = -64;
            break;
        case "right":
            this.sprite.animations.play("right");
            this.sprite.body.velocity.x = 64;
            break;
        default:
            break;
        }
    }
};
