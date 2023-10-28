const RECTANGLE_EDGE = /^\+[+-]*\+$/;
export function count(inputDiagram) {
    let possibleRectangles = [];
    let completedRectangles = [];
    inputDiagram.forEach((rowText, rowIndex) => {
        console.log(rowText, rowIndex, inputDiagram)
        possibleRectangles.forEach(possible => {
            let [_, colStart, colEnd] = possible;
            let bottomEdge = rowText.slice(colStart, colEnd + 1);
            if (RECTANGLE_EDGE.test(bottomEdge)) completedRectangles.push(possible.concat([rowIndex]));
        });
        possibleRectangles = possibleRectangles
            .filter(([_, colStart, colEnd]) => '+|'.includes(rowText[colStart]) && '+|'.includes(rowText[colEnd]));
        for (let i = 0; i < rowText.length; i++) {
            for (let j = i + 1; j < rowText.length; j++) {
                let topEdge = rowText.slice(i, j + 1);
                if (RECTANGLE_EDGE.test(topEdge)) possibleRectangles.push([rowIndex, i, j]);
            }
        }
    });
    return completedRectangles.length;
}