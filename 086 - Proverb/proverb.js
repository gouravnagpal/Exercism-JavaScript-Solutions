export const proverb = (...arr) => {
    if (!arr.length) return '';
    let qualifier = '';


    if (typeof arr[arr.length - 1] == 'object') {
        qualifier = arr[arr.length - 1].qualifier + ' ';
        arr.pop();
    }


    return arr.map((val, idx, arr) => {
        if (idx != arr.length - 1) return `For want of a ${val} the ${arr[idx + 1]} was lost.`

        return `And all for the want of a ${qualifier}${arr[0]}.`
    }).join('\n');
};