export function frontDoorResponse(line) {
    return line[0]
}

export function frontDoorPassword(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase()
}

export function backDoorResponse(line) {
    line = line.trim();
    return line.slice(-1);
}

export function backDoorPassword(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase() + ', please'
}