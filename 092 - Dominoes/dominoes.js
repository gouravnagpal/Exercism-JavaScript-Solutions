//
// This is only a SKELETON file for the 'Dominoes' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const chain = (dominoes) => {
    if (dominoes.length === 0) {
        return [];
    }

    const head = dominoes[dominoes.length - 1];
    return helperChain([head], dominoes.slice(0, -1));
};
const helperChain = (currentChain, dominoesLeft) => {
    const head = currentChain[0][0];
    const tail = currentChain[currentChain.length - 1][1];
    if (dominoesLeft.length === 0) {
        return head === tail ? currentChain : null;
    }

    for (let i = 0; i < dominoesLeft.length; i++) {
        const first = dominoesLeft[i][0];
        const second = dominoesLeft[i][1];
        const newDomLeft = [...dominoesLeft];
        newDomLeft.splice(i, 1);

        if (head === first) {
            const possibleChain = helperChain(
                [[second, first], ...currentChain], newDomLeft
            );
            if (possibleChain !== null) {
                return possibleChain;
            }
        }
        else if (head === second) {
            const possibleChain = helperChain(
                [[first, second], ...currentChain], newDomLeft
            );
            if (possibleChain !== null) {
                return possibleChain;
            }
        }

        if (tail === first) {
            const possibleChain = helperChain(
                [...currentChain, [first, second]], newDomLeft
            );
            if (possibleChain !== null) {
                return possibleChain;
            }
        }
        else if (tail === second) {
            const possibleChain = helperChain(
                [...currentChain, [second, first]], newDomLeft
            );
            if (possibleChain !== null) {
                return possibleChain;
            }
        }

    }
    return null;
};