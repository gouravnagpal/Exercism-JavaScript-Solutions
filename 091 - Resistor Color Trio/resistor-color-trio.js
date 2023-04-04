const COLOURS = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white"
]

class ResistorColourError extends Error { }

class ResistorColorTrio {
    constructor(colourArray) {
        this.numberArray = colourArray.map(colour => {
            return COLOURS.indexOf(colour)
        })

        if (this.numberArray.some(n => n < 0)) {
            throw new ResistorColourError("invalid color")
        }
    }

    get value() {
        return this.numberArray
            .slice(0, 2)
            .join("")
    }

    get power() {
        return 10 ** this.numberArray[2]
    }

    get ohms() {
        return this.value * this.power
    }

    get output() {
        return this.ohms > 1000
            ? { value: this.ohms / 1000, unit: "kiloohms" }
            : { value: this.ohms, unit: "ohms" }
    }

    get label() {
        const { value, unit } = this.output

        return `Resistor value: ${value} ${unit}`
    }
}

export { ResistorColorTrio }