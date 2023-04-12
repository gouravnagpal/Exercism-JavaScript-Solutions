export class CustomSet {
    #keys;
    #set;

    constructor(array = []) {
        this.#keys = [];
        this.#set = {};
        array.forEach(value => this.add(value));
    }
    empty() { return this.#keys.length === 0; }
    contains(value) { return this.#set[value] ?? false; }
    add(value) {
        if (!this.#set[value]) {
            this.#keys.push(value);
            this.#set[value] = true;
        }
        return this;
    }
    subset(set) {
        for (const key of this.#keys)
            if (!set.contains(key)) return false;
        return true;
    }
    disjoint(set) {
        for (const key of this.#keys)
            if (set.contains(key)) return false;
        return true;
    }
    eql(set) { return this.subset(set) && set.subset(this); }
    union(set) { return new CustomSet([...this.keys, ...set.keys]); }
    intersection(set) {
        return new CustomSet(this.keys.filter(key => set.contains(key)));
    }
    difference(set) {
        return new CustomSet(this.keys.filter(key => !set.contains(key)));
    }
    get keys() { return this.#keys; }
}