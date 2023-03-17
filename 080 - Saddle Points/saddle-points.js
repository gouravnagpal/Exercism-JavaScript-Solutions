export const saddlePoints = (matrix) => {
    let saddles = [];

    matrix.map((row, y) => row.map((val, x) => {
        if (row.every(v => val >= v) &&
            matrix.every(r => val <= r[x])
        ) {
            saddles.push({ row: y + 1, column: x + 1 })
        }
    }));

    return saddles;
};