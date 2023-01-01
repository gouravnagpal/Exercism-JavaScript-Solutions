export const findAnagrams = (word, words) => {
    let first = word.toLowerCase().split('').sort();
    let result = new Array();
    words.forEach(value => {
        if(!(word.toLowerCase() == value.toLowerCase())){
            let check = value.toLowerCase().split('').sort();
            if(first.join('') == check.join('')){
                if(result.indexOf(value) < 0) result.push(value)
            }
        }
    })
    return result;
};