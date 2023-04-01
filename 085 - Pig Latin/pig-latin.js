export const pigLatinRules = word => {
    if (/[aeiou]/.test(word[0]) == true || /[xy]/.test(word[0]) == true && /[rt]/.test(word[1]) == true) {
        return `${word}ay`
    } else if (word[0] == 'q' && word[1] == 'u') {
        let cluster = word.slice(0, 2)
        let remaining = word.slice(2, word.length)
        return remaining + cluster + 'ay'
    } else if (/[qwrtpsdfghjklzcvbnmxy]/.test(word[0]) == true && /[aeiouxy]/.test(word[1]) == true) {
        let wordArr = word.split('')
        let firstLetter = wordArr.shift()
        wordArr.push(firstLetter)
        return wordArr.join('') + 'ay'
    } else if (/[cstw]/.test(word[0]) == true && word[1] == 'h' && /[aeiou]/.test(word[2]) == true) {
        let cluster = word.slice(0, 2)
        let remaining = word.slice(2, word.length)
        return remaining + cluster + 'ay'
    } else if (/[cstw]/.test(word[0]) == true && word[1] == 'h' && word[2] == 'r') {
        let cluster = word.slice(0, 3)
        let remaining = word.slice(3, word.length)
        return remaining + cluster + 'ay'
    } else if (/aeiou/.test(word[0]) == false && word[1] == 'q' && word[2] == 'u') {
        let cluster = word.slice(0, 3)
        let remaining = word.slice(3, word.length)
        return remaining + cluster + 'ay'
    } else if (/aeiou/.test(word.slice(0, 2)) == false && word[2] == 'y') {
        let cluster = word.slice(0, 2)
        let remaining = word.slice(2, word.length)
        return remaining + cluster + 'ay'
    } else if (/aeiou/.test(word.slice(0, 3)) == false) {
        let cluster = word.slice(0, 3)
        let remaining = word.slice(3, word.length)
        return remaining + cluster + 'ay'
    }
}

export const translate = (phrase) => phrase.split(' ').map(pigLatinRules).join(' ')