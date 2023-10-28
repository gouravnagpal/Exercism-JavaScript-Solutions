export const spiralMatrix = (size) => {
    if (size === 0) return [];
    if (size === 1) return [[1]];

    const matrix = [];
    for (let i = 0; i < size; i++) {
        matrix[i] = [];
    };

    let counter = 1;
    let startRow = 0;
    let startColumn = 0;
    let endRow = size - 1;
    let endColumn = size - 1;

    while (startColumn <= endColumn && startRow <= endRow) {
        for (let i = startColumn; i <= endColumn; i++) {
            matrix[startRow][i] = counter++;
        }
        startRow++;

        for (let i = startRow; i <= endRow; i++) {
            matrix[i][endColumn] = counter++;
        }
        endColumn--;

        for (let i = endColumn; i >= startColumn; i--) {
            matrix[endRow][i] = counter++;
        }
        endRow--;

        for (let i = endRow; i >= startRow; i--) {
            matrix[i][startColumn] = counter++;
        }
        startColumn++;
    }
    return matrix;
}