export const answer = (question) => {

    var questionEndRem = question.slice(0, question.length - 1);
    var questionArray = questionEndRem.split(' ');

    var plus2InRow = /plus\splus/gi;
    var twoNumbers = /[0-9]+\s[0-9]+/g;
    var plusRegEx = /plus/gi;
    var minusRegEx = /minus/gi;
    var multiRegEx = /multiplied/gi;
    var divideRegEx = /divided/gi;
    var intRegEx = /[0-9]+/g;
    var negIntRegEx = /\-[0-9]+/g;
    var cubedRegEx = /cubed/gi;
    var numArray = [];
    const plusCount = (question.match(plusRegEx) || []).length;
    const minusCount = (question.match(minusRegEx) || []).length;
    const multiCount = (question.match(multiRegEx) || []).length;
    const divCount = (question.match(divideRegEx) || []).length;



    for (let i = 0; i < questionArray.length; i++) {
        if (questionArray[i].match(intRegEx) || questionArray[i].match(negIntRegEx)) {
            numArray.push(parseInt(questionArray[i]));
        }
    }
    var value1 = numArray[0];
    var value2 = numArray[1];
    var value3 = numArray[2];
    const numCount = (numArray || []).length;



    for (let i = 0; i < questionArray.length; i++) {
        if (cubedRegEx.test(questionArray)) {
            throw new Error('Unknown operation');
        } else if (questionArray[i] === 'Who') {
            throw new Error('Unknown operation');
        } else if (numCount === 1 && plusCount === 1 || numCount === 1 && minusCount === 1 || numCount === 1 && multiCount === 1 || numCount === 1 && divCount === 1) {
            throw new Error('Syntax error');
        } else if (numCount === 1 && plusCount === 0 || numCount === 1 && minusCount === 0 || numCount === 1 && multiCount === 0 || numCount === 1 && divCount === 0) {
            return value1;
        } else if (numCount === 0 && plusCount === 0 || numCount === 0 && minusCount === 0 || numCount === 0 && multiCount === 0 || numCount === 0 && divCount === 0) {
            throw new Error('Syntax error');
        } else if (plusCount === 0 && minusCount === 0 && multiCount === 0 && divCount === 0) {
            throw new Error('Unknown operation');
        } else if (question.match(plus2InRow)) {
            throw new Error('Syntax error');
        } else if (question.match(twoNumbers)) {
            throw new Error('Syntax error');
        } else if (multiCount === 2) {
            return value1 * value2 * value3;
        } else if (questionArray[i].match(plusRegEx) && plusCount === 2) {
            return value1 + value2 + value3;
        } else if (plusCount === 1 && multiCount === 1) {
            return (value1 + value2) * value3;
        } else if (divCount === 2) {
            return value1 / value2 / value3;
        } else if (plusCount === 1 && minusCount === 1 && questionArray[i].indexOf('plus') > questionArray[i].indexOf('minus')) {
            return value1 + value2 - value3;
        } else if (minusCount === 2) {
            return value1 - value2 - value3;
        } else if (plusCount === 1 && minusCount === 1 && questionArray[i].indexOf('plus') < questionArray[i].indexOf('minus')) {
            return value1 - value2 + value3;
        } else if (questionArray[i].match(plusRegEx)) {
            return value1 + value2;
        } else if (questionArray[i].match(minusRegEx)) {
            return value1 - value2;
        } else if (questionArray[i].match(multiRegEx)) {
            return value1 * value2;
        } else if (questionArray[i].match(divideRegEx)) {
            return value1 / value2;
        }
    }
};