const obj = {
    '0': ' _ \n| |\n|_|\n   ', '1': '   \n  |\n  |\n   ', '2': ' _ \n _|\n|_ \n   ',
    '3': ' _ \n _|\n _|\n   ', '4': '   \n|_|\n  |\n   ', '5': ' _ \n|_ \n _|\n   ',
    '6': ' _ \n|_ \n|_|\n   ', '7': ' _ \n  |\n  |\n   ', '8': ' _ \n|_|\n|_|\n   ',
    '9': ' _ \n|_|\n _|\n   '
};
export const convert = (str) => {
    const ss = str.split('\n');
    const col = ss.length / 4;
    const row = ss[0].length / 3;
    let output = '';
    for (let j = 0; j < col; j++) {
        for (let i = 0; i < row * 3; i += 3) {
            const s1 = ss[0 + j * 4].slice(i, i + 3) + '\n';
            const s2 = ss[1 + j * 4].slice(i, i + 3) + '\n';
            const s3 = ss[2 + j * 4].slice(i, i + 3) + '\n';
            const s4 = ss[3 + j * 4].slice(i, i + 3);
            const value = s1 + s2 + s3 + s4
            const digit = Object.keys(obj).find(k => obj[k] == value);
            output += digit ? digit : '?';
        }
        if (j < col - 1)
            output += ',';
    }
    return output;
};