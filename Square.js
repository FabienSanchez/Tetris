class Square {

    constructor(x, y, w) {
        this.width = w;
        this.x = x * w;
        this.y = y * w;
        this.pos = {x, y}
    }


    draw() {
        fill(81);
        rect(this.x, this.y, this.width, this.width);
    }
}