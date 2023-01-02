export function getCardPosition(stack, card) {
    return stack.indexOf(card);
}

export function doesStackIncludeCard(stack, card) {
    return stack.includes(card);
}

export function isEachCardEven(stack) {
    let len = stack.length;
    for(let i = 0; i < len; i++){
        if(stack[i] % 2 !== 0) return false;
    }
    return true;
}

export function doesStackIncludeOddCard(stack) {
    let len = stack.length;
    for(let i = 0; i < len; i++){
        if(stack[i] % 2 !== 0) return true;
    }
    return false;
}

export function getFirstOddCard(stack) {
    let len = stack.length;
    for(let i = 0; i < len; i++){
        if(stack[i] % 2 !== 0) return stack[i];
    }
    return undefined;
}

export function getFirstEvenCardPosition(stack) {
    let len = stack.length;
    for(let i = 0; i < len; i++){
        if(stack[i] % 2 == 0) return i;
    }
    return -1;
}