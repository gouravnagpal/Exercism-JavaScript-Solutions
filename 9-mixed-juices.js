const defaultTime = 2.5;
const time = {
    'Pure Strawberry Joy' : 0.5,
    'Energizer' : 1.5,
    'Green Garden' : 1.5,
    'Tropical Island' : 3,
    'All or Nothing' : 5
};

export function timeToMixJuice(name) {
    return time[name] ? time[name] : defaultTime;
}

export function limesToCut(wedgesNeeded, limes) {
    let count = 0;
    let require = 0;
    const wedges = {
        'small' : 6,
        'medium' : 8,
        'large' : 10
    };

    for(let i = 0; i < limes.length; i++){
        if(count >= wedgesNeeded){
            break;
        }
        else{
            count = count + wedges[limes[i]];
            require++;
        }
    }
    return require;
}

export function remainingOrders(timeLeft, orders) {
    let len = orders.length;
    for(let i = 0; i < len; i++){
        if(timeLeft > 0){
            orders.splice(0, 1);
            timeLeft = timeLeft - (time[orders[i]] ? time[orders[i]] : defaultTime);
        }
    }
    return orders;
}
