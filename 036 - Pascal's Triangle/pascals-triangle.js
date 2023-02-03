export const rows = (n) => {
    let result = new Array();
    for(let i = 0; i < n; i++){
        result[i] = new Array(i+1);
        for(let j = 0; j < i+1; j++){
            if (j === 0 || j === i) {
                result[i][j] = 1;
            }
            else {
                result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
            }
        }
    }
    return result;
};