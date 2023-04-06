//
// This is only a SKELETON file for the 'Diamond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    ALPH = ALPHABET.split(""),
    MIDDLE = (l) => {
        const MID = ALPHABET.indexOf(l) * 2 - 1;
        if (ALPHABET.indexOf(l) > 1) return MID;
        else return ALPHABET.indexOf(l);
    };

export const rows = (letter) => {
    let result = [],
        str = "",
        edge = " ";

    str = letter;
    for (let i = 0; i != MIDDLE(letter); i++) str += " ";
    if (letter != "A") str += letter;
    result.push(str);

    let curr = ALPH.indexOf(letter);
    for (let i = 0; i != ALPH.indexOf(letter); i++) {
        let prev = curr - 1;
        curr = prev;

        str = edge + ALPH[prev];
        for (let j = 0; j != MIDDLE(ALPH[prev]); j++) str += " ";
        if (ALPH[prev] != "A") str += ALPH[prev] + edge;
        else str += edge;
        edge += " ";

        result.unshift(str);
        result.push(str);
    }

    return result;
};