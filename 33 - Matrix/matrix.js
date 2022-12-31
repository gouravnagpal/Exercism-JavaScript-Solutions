export class Matrix {
    constructor(matrix) {
        this.matrix = matrix.split('\n');
    }

    get rows() {
        return this.matrix.map(value => value.split(' ').map(Number));
    }

    get columns() {
        return this.rows[0].map((value, i) => this.rows.map(row => row[i]));
    }
}