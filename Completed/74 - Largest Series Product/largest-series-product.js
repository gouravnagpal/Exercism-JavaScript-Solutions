export const largestProduct = (number, product) => {
    if (product === 0) return 1;
    if (number.length < product) throw new Error("Span must be smaller than string length");
    if (number.match(/[a-z]/g)) throw new Error("Digits input must only contain digits");
    if (product < 0) throw new Error("Span must be greater than zero");
    if (Number(number) === 0) return 0;

    let NewArray = new Array();
    for(let i = 0; i < number.length - 1; i++){
        let temp = 1;
        for(let j = 0; j < product; j++){
            temp *= number[i + j];
        }
        NewArray.push(temp);
    }

    NewArray.sort((a, b) => b - a).filter(value => {!Number.isNaN(value)})
    return NewArray[0];
};