export const convert = (num) => {

    let a = num % 3 === 0 ? 'Pling' : '';
    let b = num % 5 === 0 ? 'Plang' : '';
    let c = num % 7 === 0 ? 'Plong' : '';
    
    return a + b + c || String(num);
};