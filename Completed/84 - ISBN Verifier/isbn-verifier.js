export const isValid = (isbn) => {
    isbn = isbn.replaceAll('-', '').split('');
    if(isbn.length !== 10) return false;
    let m = 10;
    let sum = 0;
    for(let i = 0; i < isbn.length; i++){
        let num = isbn[i];
        if(num === 'X' && i === 9) num = 10;
        sum += num * m;
        m -= 1;
    }
    sum = sum % 11;
    if(sum === 0) return true;
    return false;
};