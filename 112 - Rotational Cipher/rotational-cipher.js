export const rotate = (input, r) => {
    const plain = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let element = '';
    input = input.split('');
    input.forEach(value => {
        if(value.match(/[A-Z]/gmi)){
            let index = plain.indexOf(value.toLowerCase());
            index += r
            if(index >= 26) index -= 26
            if(value === value.toUpperCase()){
                element += plain[index].toUpperCase();
            }
            else{
                element += plain[index];
            } 
        }
        else{
            element += value;
        }
    })
    return element;
};