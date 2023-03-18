export class House {
    static actions = [
        ["lay in", "house that Jack built"],
        ["ate", "malt"],
        ["killed", "rat"],
        ["worried", "cat"],
        ["tossed", "dog"],
        ["milked", "cow with the crumpled horn"],
        ["kissed", "maiden all forlorn"],
        ["married", "man all tattered and torn"],
        ["woke", "priest all shaven and shorn"],
        ["kept", "rooster that crowed in the morn"],
        ["belonged to", "farmer sowing his corn"],
        ["", "horse and the hound and the horn"],
    ];

    static beginning = (i) =>
        `This is the ${House.actions[i - 1][1]}`

    static chain = (i) => House.actions.slice(0, i - 1).map(([verb, obj]) => `that ${verb} the ${obj}`).reverse();

    static verse(n) {
        const result = [
            House.beginning(n),
            ...House.chain(n),
        ];
        result[result.length - 1] += ".";
        return result;
    }

    static verses(start, end) {
        return [...Array(end - start + 1)].map((_, i) => House.verse(i + start)).reduce((acc, v) => [...acc, "", ...v]);
    }
}