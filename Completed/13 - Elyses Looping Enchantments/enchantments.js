export function cardTypeCheck(stack, card) {
    let count = 0;
    stack.forEach(value => {
        if(value === card){ count = count + 1 }
    })
    return count;
}

export function determineOddEvenCards(stack, type) {
    let count = 0;
    stack.forEach(value => {
        if(type){
            if(value % 2 === 0){ count = count + 1 }
        }
        else{
            if(value % 2 !== 0){ count = count + 1 }
        }
    })
    return count;
}