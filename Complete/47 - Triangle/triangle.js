export class Triangle {
    constructor(...sides) {
        this.a = sides[0]
        this.b = sides[1]
        this.c = sides[2]
    }

    get isEquilateral() {
        if(this.a === 0 && this.b === 0 && this.c === 0){
            return false;
        }
        return this.a === this.b && this.b === this.c && this.c === this.a
    }

    get isIsosceles() {
        if(this.a + this.b < this.c || this.a + this.c < this.b || this.b + this.c < this.a){
            return false;
        }
        return this.a === this.b || this.b === this.c || this.c === this.a
    }

    get isScalene() {
        if(this.a + this.b < this.c || this.a + this.c < this.b || this.b + this.c < this.a){
            return false;
        }
        return this.a !== this.b && this.b !== this.c && this.c !== this.a
    }
}