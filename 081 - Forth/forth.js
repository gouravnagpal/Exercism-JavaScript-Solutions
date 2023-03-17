export class Forth {
    constructor() {
        this._stack = [];
        this.symbols = new Map();
    }

    evaluate(text) {
        const cmds = this._toCommands(text);

        for (let pos = 0; pos < cmds.length; pos++) {
            if (/^-?\d+$/.test(cmds[pos])) {
                this._stack.push(Number(cmds[pos]));
            }
            else if (this._hasWord(cmds[pos])) {
                this.evaluate(this._getWord(cmds[pos]));
            }
            else if (/^[\+\-\/\*]$/.test(cmds[pos])) {
                this._calc(cmds[pos]);
            }
            else if (/^dup$/i.test(cmds[pos])) {
                this._dup();
            }
            else if (/^drop$/i.test(cmds[pos])) {
                this._drop();
            }
            else if (/^swap$/i.test(cmds[pos])) {
                this._swap();
            }
            else if (/^over$/i.test(cmds[pos])) {
                this._over();
            }
            else if (cmds[pos] === ':') {
                const word = cmds[++pos];
                let i = ++pos;
                for (; cmds[i] !== ';'; i++);
                this._defineWord(word, cmds.slice(pos, i))
                pos = i;
            }
            else {
                throw new Error('Unknown command');
            }
        }
    }

    _toCommands(input) {
        return input.match(/(\w+-?\w+)|(-?\d+)|[\+\-\*\/:;]/g);
    }

    _calc(opr) {
        const v2 = this._stack.pop(), v1 = this._stack.pop();

        if (v1 === undefined || v2 === undefined)
            throw new Error('Stack empty');

        if (opr === '+') this._stack.push(v1 + v2);
        if (opr === '-') this._stack.push(v1 - v2);
        if (opr === '*') this._stack.push(v1 * v2);

        if (opr === '/') {
            if (v2 === 0) throw new Error('Division by zero');
            this._stack.push(Math.trunc(v1 / v2));
        }
    }

    _dup() {
        if (this._stack.length === 0) throw new Error('Stack empty');
        this._stack.push(this._stack[this._stack.length - 1]);
    }

    _drop() {
        if (this._stack.length === 0) throw new Error('Stack empty');
        this._stack.pop();
    }

    _swap() {
        if (this._stack.length <= 1) throw new Error('Stack empty');

        const v2 = this._stack.pop();
        const v1 = this._stack.pop();
        this._stack.push(v2);
        this._stack.push(v1);
    }

    _over() {
        if (this._stack.length <= 1) throw new Error('Stack empty');
        this._stack.push(this._stack[this._stack.length - 2]);
    }

    _defineWord(word, commands) {
        if (!/^((\w+-?\w+)|[\+\-\*\/:;])$/.test(word))
            throw new Error('Invalid definition');

        const resolved = commands.map(w => this._resolveWord(w));
        this._setWord(word, resolved.join(' '));
    }

    _resolveWord(word) {
        while (this._hasWord(word))
            word = this._getWord(word);

        return word;
    }

    _hasWord(word) {
        return this.symbols.has(word.toLowerCase());
    }

    _getWord(word) {
        return this.symbols.get(word.toLowerCase());
    }

    _setWord(word, value) {
        this.symbols.set(word.toLowerCase(), value);
    }

    get stack() {
        return this._stack;
    }
}