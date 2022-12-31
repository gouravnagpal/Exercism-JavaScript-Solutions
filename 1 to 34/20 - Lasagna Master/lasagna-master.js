export function cookingStatus(timer) {
    return timer === 0 ? 'Lasagna is done.' : !timer ? 'You forgot to set the timer.' : 'Not done, please wait.';
}

export function preparationTime(layers, layer = 2) {
    return layers.length * layer;
}

export function quantities(layers){
    let len = layers.length;
    let quantity = {
        noodles : 0,
        sauce : 0
    };
    for(let i = 0; i < len; i++){
        if(layers[i] === 'noodles'){
            quantity.noodles += 50;
        }
        else if(layers[i] === 'sauce'){
            quantity.sauce += 0.2;
        }
    }
    return quantity;
}

export function addSecretIngredient(friendsList, myList){
    myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, portions){
    let scaled = {};
    Object.keys(recipe).forEach(key => {
      scaled[key] = recipe[key] * (portions / 2)
    });
    return scaled;
}