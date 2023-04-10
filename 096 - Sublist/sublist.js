export class List {
    constructor(list = []) {
        this.list = list;
    }

    compare(otherList) {
        if (this.list.length == 0 && otherList.list.length == 0) return "EQUAL";

        const joinedList = this.list.join("|");
        const otherJoinedList = otherList.list.join("|");

        if (joinedList == otherJoinedList) return "EQUAL"
        else if (otherJoinedList.indexOf(joinedList) > -1) return "SUBLIST"
        else if (joinedList.indexOf(otherJoinedList) > -1) return "SUPERLIST"
        return "UNEQUAL"
    }
}