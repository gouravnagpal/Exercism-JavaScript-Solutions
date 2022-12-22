export function createScoreBoard() {
    const NewScoreBoard = {
        'The Best Ever' : 1000000
    };
    return NewScoreBoard;
}

export function addPlayer(scoreBoard, player, score) {
    scoreBoard[player] = score;
    return scoreBoard;
}

export function removePlayer(scoreBoard, player) {
    delete scoreBoard[player];
    return scoreBoard;
}

export function updateScore(scoreBoard, player, points) {
    scoreBoard[player] += points;
    return scoreBoard;
}

export function applyMondayBonus(scoreBoard) {
    Object.keys(scoreBoard).forEach(key => {
        scoreBoard[key] += 100
    });
    return scoreBoard;
}

export function normalizeScore(params) {
    return params.normalizeFunction(params.score);
}