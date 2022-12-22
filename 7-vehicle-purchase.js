export function needsLicense(kind) {
    return kind === 'car' || kind === 'truck';
}

export function chooseVehicle(option1, option2) {
    if(option1.charCodeAt() < option2.charCodeAt()){
        return option1 + " is clearly the better choice.";
    }
    return option2 + " is clearly the better choice.";
}

export function calculateResellPrice(originalPrice, age) {
    if(age < 3){
        return (originalPrice / 100) * 80;
    }
    else if(age > 10){
        return (originalPrice / 100) * 50;
    }
    else if(age >= 3 && age <= 10){
        return (originalPrice / 100) * 70;
    }

    return 0;
}