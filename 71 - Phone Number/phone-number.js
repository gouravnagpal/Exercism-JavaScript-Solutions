export const clean = (number) => {

    if(number.match(/[a-z]/gi)) throw new Error('Letters not permitted')
    if(number.match(/@:!+/gi)) throw new Error('Punctuations not permitted')

    number = number.replace(/[^0-9]/g, '').split('');

    if(number.length < 10) throw new Error('Incorrect number of digits')

    if(number.length === 11){
        if(number[0] === '1'){
            const [a, ...rest] = number;
            if(rest[0] === '0') throw new Error('Area code cannot start with zero')
            if(rest[0] === '1') throw new Error('Area code cannot start with one')
            if(rest[3] === '0') throw new Error('Exchange code cannot start with zero')
            if(rest[3] === '1') throw new Error('Exchange code cannot start with one')
            return String(rest.join(''));
        }
        else{
            throw new Error('11 digits must start with 1') 
        }
    }

    if(number.length > 11){
        throw new Error('More than 11 digits')
    }

    if(number[0] === '0') throw new Error('Area code cannot start with zero')
    if(number[0] === '1') throw new Error('Area code cannot start with one')
    if(number[3] === '0') throw new Error('Exchange code cannot start with zero')
    if(number[3] === '1') throw new Error('Exchange code cannot start with one')

    return number.join('');
};