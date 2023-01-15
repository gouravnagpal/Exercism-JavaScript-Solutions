export const countWords = (word) => {
    word = word.trim().toLowerCase().split(/ '|' |'$|[\s.:,!&@$%^&|]/g);
    let result = {};
    for (let i = 0; i < word.length; i++) {
        if(word[i] === ''){
            delete word[i];
        }
        else{
            if (!(result.hasOwnProperty(word[i]))) {
                let count = 0;
                for (let j = 0; j < word.length; j++) {
                    if (word[j] === word[i]) {
                        console.log(word[j])
                        count += 1;
                    }
                }
                result[word[i]] = count;
            }
        }
    }
    
    return result;
};