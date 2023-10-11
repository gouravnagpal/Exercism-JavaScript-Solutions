export class GradeSchool {
    #roster = {};
    add(name, grade) {
        this.#roster[name] = grade;
    }
    grade(target) {
        return Object.entries(this.#roster).flatMap(([name, grade]) => grade === target ? name : []).sort();
    }
    roster() {
        return turn(this.#roster);
    }
}
const turn = obj => Object.entries(obj).reduce((_turn, [key, value]) => ({
    ..._turn,
    [value]: [...(_turn[value] ?? []), key].sort()
}), {});