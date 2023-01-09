export const isPangram = (input) => {
    if(!input) return false;
    input = input.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < 26; i++) {
        if(input.indexOf(alphabet[i]) < 0){
            return false;
        }
    }
    return true;
};