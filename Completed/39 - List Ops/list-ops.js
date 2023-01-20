export class List {
    constructor(values = new Array()) {
        this.values = values;
    }
  
    append(list) {
        this.values = [... this.values, ... list.values];
        return {"values": this.values};
    }
  
    concat(list) {
        const newList = new List(this.values);
        list.values.forEach((l) => newList.append(l));
        return newList;
    }
  
    filter(condition) {
        let list = new Array();
        for(let i of this.values){
            if(condition(i)) list.push(i);
        }
        return new List(list); 
    }
  
    map(condition) {
        let list = new Array();
        for(let i of this.values){
            list.push(condition(i));
        }
        return new List(list);
    }
  
    length() {
        return this.values.length;
    }
  
    foldl(condition, val) {
        for (let i of this.values) {
            val = condition(val, i);
        }
        return val;
    }
  
    foldr(condition, val) {
        for (let i = this.values.length - 1; i >= 0; i--) {
            val = condition(val, this.values[i]);
        }
        return val;
    }
  
    reverse() {
        let list = new Array();
        for(let i = this.values.length - 1; i >= 0; i--){
            list.push(this.values[i]);
        }
        return new List(list); 
    }
}
  