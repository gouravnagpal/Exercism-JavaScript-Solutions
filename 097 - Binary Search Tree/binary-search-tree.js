export class BinarySearchTree {
    constructor(data) {
        this._data = data;
        this._left = null;
        this._right = null;
    }

    get data() {
        return this._data;
    }

    get right() {
        return this._right;
    }

    get left() {
        return this._left;
    }

    insert(data) {
        data > this.data ? this.insertRight(data) : this.insertLeft(data)
    }

    insertLeft(data) {
        this.left ? this.left.insert(data) : this._left = new BinarySearchTree(data)
    }

    insertRight(data) {
        this.right ? this.right.insert(data) : this._right = new BinarySearchTree(data)
    }

    allData() {
        const lefts = this.left ? this.left.allData() : []
        const rights = this.right ? this.right.allData() : []

        return lefts.concat(this.data).concat(rights)
    }

    each(func) {
        this.allData().forEach(e => func(e));
    }
}