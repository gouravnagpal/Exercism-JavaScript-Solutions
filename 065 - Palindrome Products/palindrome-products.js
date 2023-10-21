export class Palindromes {
    static isPali(number) {
        const s = `${number}`
        let start = 0,
            end = s.length - 1
        while (start < end) {
            if (s[start] !== s[end]) {
                return false
            }
            start++
            end--
        }

        return true
    }

    static findFactors(candidate, min, max) {
        const factors = []
        const root = Math.sqrt(candidate)

        for (let i = min; i <= root; i++) {
            const mul2 = candidate / i
            if (mul2 % 1 !== 0 || mul2 < min || mul2 > max) {
                continue
            }
            factors.push([i, mul2])
        }

        return factors
    }

    static paliCheck(candidate, min, max) {
        if (!Palindromes.isPali(candidate)) {
            return false
        }
        const factors = Palindromes.findFactors(candidate, min, max)
        if (factors.length === 0) {
            return false
        }
        return { value: candidate, factors }
    }

    static generate({ minFactor: min, maxFactor: max }) {
        if (min > max) {
            throw new Error("min must be <= max")
        }
        const min2 = min ** 2
        const max2 = max ** 2

        const result = {}

        for (let candidate = min2; candidate <= max2; candidate++) {
            if (result.smallest = Palindromes.paliCheck(candidate, min, max)) {
                break
            }
        }

        for (let candidate = max2; candidate >= min2; candidate--) {
            if (result.largest = Palindromes.paliCheck(candidate, min, max)) {
                break
            }
        }
        result.smallest = result.smallest || { value: null, factors: [] }
        result.largest = result.largest || { value: null, factors: [] }

        return result
    }
}