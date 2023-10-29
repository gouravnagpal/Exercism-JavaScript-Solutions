const fs = require('fs');
const path = require('path');

function readLines(file) {
    const data = fs.readFileSync(path.resolve(file), { encoding: 'utf-8' });
    return data.split(/\r?\n/);
}

const ARGS = process.argv.slice(2);

const flags = {}

while (ARGS[0].match(/-./)) { flags[ARGS.shift()[1]] = true }

let pattern = ARGS.shift();

if (flags.x) { pattern = '^' + pattern + '$' }

const regex = new RegExp(pattern, flags.i ? 'i' : '')

for (const filename of ARGS) {
    const lines = readLines(filename);
    for (let i = 0; i < lines.length; i++) {
        if (regex.test(lines[i]) && !flags.v || !regex.test(lines[i]) && flags.v) {
            let result = [];
            if (flags.l) {
                console.log(filename)
                break;
            }
            ARGS.length > 1 ? result.push(filename) : null;
            flags.n ? result.push(i + 1) : null;
            result.push(lines[i]);
            console.log(result.join(':'))
        }
    }
}