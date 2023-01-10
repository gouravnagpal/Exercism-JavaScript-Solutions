export function countNucleotides(strand) {
    const STRAND_OBJECT = {
        "A" : 0,
        "C" : 0,
        "G" : 0,
        "T" : 0
    };
    let result = '';
    for(let i = 0; i < strand.length; i++){
        if(strand[i] === "A") STRAND_OBJECT["A"] += 1;
        else if(strand[i] === "C") STRAND_OBJECT["C"] += 1;
        else if(strand[i] === "G") STRAND_OBJECT["G"] += 1;
        else if(strand[i] === "T") STRAND_OBJECT["T"] += 1;
        else throw new Error('Invalid nucleotide in strand');
    }
    return `${STRAND_OBJECT["A"]} ${STRAND_OBJECT["C"]} ${STRAND_OBJECT["G"]} ${STRAND_OBJECT["T"]}`;
}