export function seeingDouble(deck) {
    const newArr = deck.map((value) => value * 2);
    return newArr;
}

export function threeOfEachThree(deck) {
    const newArr = new Array();
    deck.map((value) => {
        if(value === 3){
            newArr.push(3, 3, 3);
    }
        else{
            newArr.push(value);
        }
    });
    return newArr;
}

export function middleTwo(deck) {
    let middle = deck.length / 2 - 1
    return deck.slice(middle, middle + 2);
}

export function sandwichTrick(deck) {
    let top = deck.shift();
    let bottom = deck.pop();
    let len = deck.length;
    let newArr = new Array;
    newArr.push(...deck.slice(0, len / 2), bottom, top, ...deck.slice(len / 2));
    return newArr;
}

export function twoIsSpecial(deck) {
    return deck.filter((card) => card === 2);
}

export function perfectlyOrdered(deck) {
    return deck.sort((a, b) => a - b);
}

export function reorder(deck) {
    return deck.reverse();
}