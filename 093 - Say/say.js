const CHUNK_MODIFIERS = {
    2: 'thousand',
    3: 'million',
    4: 'billion',
    5: 'trillion',
    6: 'quadrillion',
};

function identity(o) {
    return o;
}

function spellLittleNumber(number) {
    return ({
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    })[number];
}

function spellTensNumber(number) {
    return ({
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    })[number];
}

function spellNumber(number, isLastIndex) {
    const result = [];

    if (number >= 100) {
        result.push(spellLittleNumber(Math.floor(number / 100)));
        result.push('hundred');
    }

    if (number >= 20) {
        const smallNumber = number % 10;
        const tensNumber = Math.floor((number - Math.floor(number / 100) * 100) / 10);
        if (smallNumber || tensNumber) {
            result.push(
                [
                    tensNumber && spellTensNumber(tensNumber),
                    smallNumber && spellLittleNumber(smallNumber),
                ]
                    .filter(identity)
                    .join('-')
            );
        }
    } else if (!isLastIndex || number) {
        result.push(spellLittleNumber(number));
    }

    return result.filter(identity).join(' ');
}

export const say = (n) => {
    if (n < 0 || n > 999999999999) {
        throw new Error('Number must be between 0 and 999,999,999,999.')
    }
    return `${n || '0'}`.split('').reverse().join('').match(/.{1,3}/g)
        .reverse()
        .map((s) => s.split('').reverse().join(''))
        .map((s) => Number(s))
        .map((number, numberIndex, numberArray) => (
            [
                spellNumber(number, numberArray.length > 1 && numberIndex),
                number && CHUNK_MODIFIERS[numberArray.length - numberIndex],
            ]
                .filter(identity)
                .join(' ')
        ))
        .filter(identity)
        .join(' ');
};