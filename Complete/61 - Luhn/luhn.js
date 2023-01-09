export const valid = (number) => {
    number = number.replaceAll(' ', '').split('').map(Number);
    if(number.length <= 1) return false;
    let sum = 0;
    let mod = number.length % 2;
    for(let i = 0; i < number.length; i++){
        let add = number[i];
        if(i % 2 === mod){
            add *= 2
        }
        if(add > 9){
            add -= 9
        }
        sum += add;
    }
    return sum % 10 === 0;
};