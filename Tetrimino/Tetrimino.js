class Tetrimino {

    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.matrix = null;
    }

    rotate(clockwise = true) {
        if (clockwise)
            this.flipMatrix(this.matrix.reverse());
        else
            this.flipMatrix(this.matrix).reverse();

        return this.matrix
    }

    flipMatrix() {
        return this.matrix = this.range().map(i => this.matrix.map(arr => arr[i]))
    };

    range() {
        return [...Array(this.matrix.length).keys()];
    }

    draw() {
        translate(this.x, this.y);
        fill(this.color);
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {

                let pt = this.matrix[i][j];

                if (pt) {
                    let w = 30;
                    let x = j * w;
                    let y = i * w;
                    rect(x, y, w, w);
                }
            }
        }
    }

}