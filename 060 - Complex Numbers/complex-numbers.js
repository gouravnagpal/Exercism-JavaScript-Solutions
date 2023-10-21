export class ComplexNumber {
    constructor(real, imag) {
        this._real = real
        this._imag = imag
    }

    get real() {
        return this._real
    }

    get imag() {
        return this._imag
    }

    add(z) {
        return new ComplexNumber(this._real + z.real, this._imag + z.imag)
    }

    sub(z) {
        return new ComplexNumber(this._real - z.real, this._imag - z.imag)
    }

    div(z) {
        return new ComplexNumber(
            (this._real * z.real + this._imag * z.imag) / z.abs ** 2,
            (this._imag * z.real - this._real * z.imag) / z.abs ** 2
        )
    }

    mul(z) {
        return new ComplexNumber(
            this._real * z.real - this._imag * z.imag,
            this._imag * z.real + this._real * z.imag
        )
    }

    get abs() {
        return (this._real ** 2 + this._imag ** 2) ** 0.5
    }

    get conj() {
        return new ComplexNumber(this._real, 0 - this._imag)
    }

    get exp() {
        return new ComplexNumber(
            Math.E ** this._real * Math.cos(this._imag),
            Math.E ** this._real * Math.sin(this._imag)
        )
    }
}