export const isIsogram = (input) => {
    if(!input) return true;
    input = input.replace(/[ -]/gmi, '').toLowerCase().split('').sort();
    for(let i = 0; i < input.length; i++){
        if(i > 0) if(input[i - 1] === input[i]) return false;
    }
    return true;
};