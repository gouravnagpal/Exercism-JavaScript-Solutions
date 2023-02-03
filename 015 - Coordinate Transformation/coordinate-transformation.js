export function translate2d(dx, dy) {
    return (x, y) => [dx + x, dy + y];
}

export function scale2d(sx, sy) {
    return (x, y) => [sx * x, sy * y];
}

export function composeTransform(f, g) {
    return function (x, y){
        let parameters = f(x, y);
        return g(parameters[0] , parameters[1]);
    }
}

export function memoizeTransform(f) {
    let lastX, lastY, lastResult
    return function (x, y){
        if (lastX === x && lastY === y) return lastResult;
        lastX = x
        lastY = y
        lastResult = f(x, y)
        return lastResult;
    }
}