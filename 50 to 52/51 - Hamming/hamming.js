export const compute = (first, second) => {
    if(first.length !== second.length) throw new Error('strands must be of equal length');
    let differences = 0;
    first = first.split('');
    second = second.split('');

    for(let i = 0; i < first.length; i++){
        if(first[i] !== second[i]){
            differences++
        }
    }
    return differences;
};