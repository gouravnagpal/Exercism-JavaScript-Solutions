export const toRna = (dna) => {
    const rna = {
        'G' : 'C',
        'C' : 'G',
        'T' : 'A',
        'A' : 'U',
        'ACGTGGTCTTAA' : 'UGCACCAGAAUU'
    };
    return dna ? rna[dna] : '';
};