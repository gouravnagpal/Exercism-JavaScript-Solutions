export function triplets({ minFactor, maxFactor, sum }) {

    if (minFactor === undefined) minFactor = 2;
    if (maxFactor === undefined) maxFactor = sum;

    let triplets = [];
    for (let b = minFactor; b <= maxFactor; b++) {
        for (let c = b - 1; c <= maxFactor; c++) {
            let a = sum - b - c;
            if (a < 0 || a > b || a > c || a < minFactor || a > maxFactor) continue;
            if (a === 26) console.log(b + " " + c);
            if ((Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2))) {
                let currentTriplet = new Triplet(a, b, c);
                triplets.unshift(currentTriplet);
            }
        }
    }
    return triplets;
}
class Triplet {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    toArray() {
        return [this.a, this.b, this.c];
    }
}