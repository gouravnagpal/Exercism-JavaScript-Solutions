export const transpose = (matrix) => {
    if(matrix.length === 0) return [];

    let rows = matrix.map(value => value.split(''));
    const longestRow = Math.max(...rows.map(row => row.length))
    let result = new Array();

    for(let i = 0; i < longestRow; i++){
        let element = '';
        for(let j = 0; j < rows.length; j++){
            rows[j][i] === undefined ? element += ' ' : element += rows[j][i]
        }
        result.push(element);
    }
    result[result.length-1] = result[result.length-1].trimEnd()
    return result;
};