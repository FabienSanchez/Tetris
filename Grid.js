class Grid {

    constructor() {
        this.column = 10;
        this.line = 22;
        this.grid = this.init();
    }

    init() {
        let t = [];
        for (let y = 0; y < this.line; y++) {
            let r = t[y] = [];
            for (let x = 0; x < this.column; x++) {
                r[x] = new Square(x, y, this.multiplier)
            }
        }
        return t
    }

    get multiplier() {
        return game.h / this.line
    }

    get w() {
        return this.column * this.multiplier
    }

    get h() {
        return this.line * this.multiplier
    }

    get x() {
        return game.w / 2 - this.w / 2;
    }

    draw() {
        translate(this.x, 0);
        for (let y = 0; y < this.grid.length; y++) {
            for (let x = 0; x < this.grid[y].length; x++) {
                this.grid[y][x].draw()
            }
        }
    }
}