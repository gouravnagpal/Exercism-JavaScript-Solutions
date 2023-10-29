export const isPaired = (input) => {
    let stack = [];

    for (let c of input) {
        switch (c) {
            case '(':
            case '[':
            case '{':
                stack.push(c);
                break;
            case ')':
                if (stack.pop() !== '(') {
                    return false;
                }
                break;
            case ']':
                if (stack.pop() !== '[') {
                    return false;
                }
                break;
            case '}':
                if (stack.pop() !== '{') {
                    return false;
                }
                break;
            default:
                break;
        }
    }

    // check if all brackets are closed
    return stack.length === 0;
};