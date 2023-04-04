function writeFirstSentence(number) {
    switch (number) {
        case 0:
            return `No more bottles of beer on the wall, no more bottles of beer.`;
        case 1:
            return `${number} bottle of beer on the wall, ${number} bottle of beer.`;
        default:
            return `${number} bottles of beer on the wall, ${number} bottles of beer.`;
    }
}

function writeSecondSentence(number, bottlesLeft) {
    switch (number) {
        case 0:
            return `Go to the store and buy some more, 99 bottles of beer on the wall.`;
        case 1:
            return `Take it down and pass it around, no more bottles of beer on the wall.`;
        case 2:
            return `Take one down and pass it around, ${bottlesLeft} bottle of beer on the wall.`;
        default:
            return `Take one down and pass it around, ${bottlesLeft} bottles of beer on the wall.`;
    }
}

export const recite = (initialBottlesCount, takeDownCount) => {
    let sentenceArray = [];

    for (let bottlesTaken = 0; bottlesTaken < takeDownCount; bottlesTaken++) {
        const currentNumberBottles = initialBottlesCount - bottlesTaken;

        const firstSentence = writeFirstSentence(currentNumberBottles);
        const secondSentence = writeSecondSentence(
            currentNumberBottles,
            currentNumberBottles - 1
        );
        sentenceArray.push(firstSentence, secondSentence);
        if (bottlesTaken !== takeDownCount - 1) {
            sentenceArray.push("");
        }
    }

    return sentenceArray;
};