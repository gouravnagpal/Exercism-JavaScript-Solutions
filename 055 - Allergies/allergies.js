export class Allergies {
    constructor(pontos) {
        this.alergenos = {
            1: "eggs",
            2: "peanuts",
            4: "shellfish",
            8: "strawberries",
            16: "tomatoes",
            32: "chocolate",
            64: "pollen",
            128: "cats",
        };

        this.pontos = pontos;
        this.allergies = this.testAllergies();
    }

    testAllergies() {
        let testpontos = this.pontos;
        let results = [];

        let alergenosKeys = Object.keys(this.alergenos).sort((a, b) => b - a);

        while (testpontos > 0) {
            let testAllergen = alergenosKeys.find(
                (allergen) => testpontos >= allergen
            );

            if (!results.includes(this.alergenos[testAllergen])) {
                results.unshift(this.alergenos[testAllergen]);
            }

            testpontos -= testAllergen;
        }

        return results;
    }

    list() {
        return this.allergies;
    }

    allergicTo(allergen) {
        return this.allergies.includes(allergen);
    }
}