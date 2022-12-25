export function getFirstCard(deck) {
    const [first, ...rest] = deck
    return first;
}

export function getSecondCard(deck) {
    const [first, second, ...rest] = deck
    return second;
}

export function swapTopTwoCards(deck) {
    let temp = deck[0];
    deck[0] = deck[1];
    deck[1] = temp;
    return deck;
}

export function discardTopCard(deck) {
    const [top, ...rest] = deck
    return [top, rest];
}

const FACE_CARDS = ['jack', 'queen', 'king'];

export function insertFaceCards(deck) {
    const [top, ...rest] = deck
    return [top, ...FACE_CARDS, ...rest];
}
