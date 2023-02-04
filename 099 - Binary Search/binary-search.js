export const find = (a, f) => {
    let leftIndex = 0
    let rightIndex = a.length - 1
    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if (a[middleIndex] == f) {
            return middleIndex
        }
        if (a[middleIndex] < f) {
            leftIndex = middleIndex + 1
        }
        else {
            rightIndex = middleIndex - 1
        }
    }
    throw Error('Value not in array');
};