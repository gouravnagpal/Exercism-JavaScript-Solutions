const findGcd = (a, b) => (
    b ? findGcd(b, a % b) : a
)

export class Rational {
    constructor(a, b) {
        this.a = a
        this.b = b
    }

    add(rationalNumber) {
        return new Rational(
            this.a * rationalNumber.b + rationalNumber.a * this.b,
            this.b * rationalNumber.b,
        ).reduce()
    }

    sub(rationalNumber) {
        return new Rational(
            this.a * rationalNumber.b - rationalNumber.a * this.b,
            this.b * rationalNumber.b,
        ).reduce()
    }

    mul(rationalNumber) {
        return new Rational(
            this.a * rationalNumber.a,
            this.b * rationalNumber.b,
        ).reduce()
    }

    div(rationalNumber) {
        return new Rational(
            this.a * rationalNumber.b,
            this.b * rationalNumber.a,
        ).reduce()
    }

    abs() {
        return new Rational(
            Math.abs(this.a),
            Math.abs(this.b),
        ).reduce()
    }

    exprational(n) {
        return new Rational(
            this.a ** n,
            this.b ** n,
        )
    }

    expreal(x) {
        return +(x ** (this.a / this.b)).toFixed(10)
    }

    reduce() {
        const gcd = findGcd(this.a, this.b)
        let sign = this.a > 0
            ? this.b > 0 ? 1 : -1
            : this.b > 0 ? -1 : 1
        if (this.a === 0) {
            return new Rational(0, 1)
        } else {
            return new Rational(sign * Math.abs(this.a / gcd), Math.abs(this.b / gcd))
        }
    }
}