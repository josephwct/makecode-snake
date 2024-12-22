enum Direction { Up, Down, Left, Right }

class Food {
    xPos: number;
    yPos: number;
    foodRef: Sprite;
    constructor(snake : Snake) {
        do {
            this.xPos = randint(0, tilemap`Map`.width -1)
            this.yPos = randint(0, tilemap`Map`.height -1)
        } while (this.checkCollide(snake))
        
        this.foodRef = sprites.create(assets.image`food`, SpriteKind.Food);
        tiles.placeOnTile(this.foodRef, tiles.getTileLocation(this.xPos, this.yPos));
    }
    checkCollide(snake: Snake): boolean {
        for (let i = 0; i < snake.spriteRef.length; i++) {
            let tempSprite = snake.spriteRef[i]
            if (tempSprite.tilemapLocation().column == this.xPos
                && tempSprite.tilemapLocation().column == this.yPos) {
                return true;
            }
        }
        return false;
    }
}

class Snake {
    score: number; 
    new_length: number;
    direction: Direction;
    xPos: number;
    yPos: number;
    spriteRef: Sprite[];

    constructor(new_length: number, direction: Direction) {
        this.score = 0;
        this.new_length = new_length;
        this.direction = direction;
        this.xPos = 2;
        this.yPos = 2;
        this.spriteRef = [];
    }

    move() {
        // 1. turn existing head to body
        if (this.spriteRef.length > 0) {
            this.spriteRef[this.spriteRef.length - 1].setImage(assets.image`body`); 
        }

        // 2. update position according to direction
        switch (this.direction) {
            case Direction.Up: this.yPos -= 1; break;
            case Direction.Down: this.yPos += 1; break;
            case Direction.Left: this.xPos -= 1; break;
            case Direction.Right: this.xPos += 1; break;
        }

        // 3. place new head
        let head = sprites.create(assets.image`head`, SpriteKind.Player);
        tiles.placeOnTile(head, tiles.getTileLocation(this.xPos, this.yPos));
        this.spriteRef.push(head);
        scene.cameraFollowSprite(head);

        // 4. check out of boundary
        if (this.xPos < 0 || this.yPos < 0 || this.xPos >= tilemap`Map`.width || this.yPos >= tilemap`Map`.height ) {
            game.over(false)
        }

        // 5. pop / keep tail
        if (this.new_length > 0) {
            this.new_length = this.new_length - 1;
        } else {
            let temp = this.spriteRef[0];
            if (temp) {
                temp.destroy();
                this.spriteRef.shift();
            }
        }
    }
}

tiles.setCurrentTilemap(tilemap`Map`);
info.setScore(0)
let mySnake = new Snake(4, Direction.Right)
let myFood = new Food(mySnake)

// Add handlers for up, down, left, and right buttons to change direction
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySnake.direction = Direction.Up;
});

controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySnake.direction = Direction.Down;
});

controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySnake.direction = Direction.Left;
});

controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySnake.direction = Direction.Right;
});

game.onUpdateInterval(500, function () {
    mySnake.move();
});

sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    myFood.foodRef.destroy()
    info.changeScoreBy(1)
    myFood = new Food(mySnake)
    mySnake.new_length = mySnake.new_length + 1
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    game.over(false)
})