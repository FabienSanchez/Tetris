let game = {
    w: 800,
    h: 800,
};
let grid = new Grid();
let tetrimino = new I(0, 0, grid.multiplier);


function setup() {
    createCanvas(game.w, game.h);
}


function draw() {
    background(220);

    grid.draw();

    if (keyIsDown(LEFT_ARROW))
        tetrimino.x -= 1;
    else if (keyIsDown(RIGHT_ARROW))
        tetrimino.x += 1;


    tetrimino.draw()


}


function keyPressed() {
    if (keyCode === UP_ARROW)
        tetrimino.rotate();
}