export const isArmstrongNumber = (number) => {
    let check = String(number).split('');
    let result = 0;
    check.forEach(value => {
        result += Number(value) ** check.length;
    })
    return result === number
};