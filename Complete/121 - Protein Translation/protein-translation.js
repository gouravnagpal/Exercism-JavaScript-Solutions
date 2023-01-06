export const translate = (rna) => {
    const protein = {
        "AUG" : "Methionine",
        "UUU" : "Phenylalanine",
        "UUC" : "Phenylalanine",
        "UUA" : "Leucine",
        "UUG" : "Leucine",
        "UCU" : "Serine",
        "UCC" : "Serine",
        "UCA" : "Serine",
        "UCG" : "Serine",
        "UAU" : "Tyrosine",
        "UAC" : "Tyrosine",
        "UGU" : "Cysteine",
        "UGC" : "Cysteine",
        "UGG" : "Tryptophan",
        "UAA" : "STOP",
        "UAG" : "STOP",
        "UGA" : "STOP"
    }
    if(!rna) return [];
    if(rna){ 
        let result = new Array;
        rna = rna.match(/.{1,3}/g);
        for(let i = 0; i < rna.length; i++){
            let data = protein[rna[i]];
            let index = rna.indexOf(rna[i]);
            if(data === undefined) throw new Error("Invalid codon");
            if(data === "STOP" && (index === 0 || index === Math.floor(rna.length / 2))) break
            if(data !== "STOP") result.push(data);
        }
        return result;
    }
};