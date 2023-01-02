export function totalBirdCount(birdsPerDay) {
    let count = 0;
    for(let i = 0; i < birdsPerDay.length; i++){
        count = count + birdsPerDay[i];
    }
    return count;
}

export function birdsInWeek(birdsPerDay, week) {
    let count = 0;
    let i = week * 7 - 7;
    let len = i + 6;
    while(i <= len){
        count = count + birdsPerDay[i];
        i++;
    }
    return count;
}

export function fixBirdCountLog(birdsPerDay) {
    for(let i = 0; i < birdsPerDay.length; i++){
        if(i % 2 == 0){
            birdsPerDay[i] = birdsPerDay[i] + 1;
        }
    }
    return birdsPerDay;
}