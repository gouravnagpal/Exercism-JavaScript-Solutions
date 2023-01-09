export const squareRoot = (n) => {
    let result = Math.floor(n / 2);
    while (result > 1) {
       if (result ** 2 === n) return result;
       result--;
    }
    return n;
};