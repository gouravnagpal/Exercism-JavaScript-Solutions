export const score = (list, category) => {
    const set = new Set(list)
    switch (category) {
        case 'ones': return list.filter(el => el === 1).reduce((acum, current) => acum + current, 0)
        case 'twos': return list.filter(el => el === 2).reduce((acum, current) => acum + current, 0)
        case 'threes': return list.filter(el => el === 3).reduce((acum, current) => acum + current, 0)
        case 'fours': return list.filter(el => el === 4).reduce((acum, current) => acum + current, 0)
        case 'fives': return list.filter(el => el === 5).reduce((acum, current) => acum + current, 0)
        case 'sixes': return list.filter(el => el === 6).reduce((acum, current) => acum + current, 0)
        case 'full house': {
            if (set.size === 2) {
                const result = list.reduce((prev, cur) =>
                    ((prev[cur] = prev[cur] + 1 || 1), prev), {})
                let value = Object.values(result)
                if (!value.includes(1)) { return list.reduce((acum, el) => acum + el) } else { return 0 }

            } else {
                return 0
            }
        }
        case 'four of a kind': {
            if (set.size === 2) {
                const result = list.reduce((prev, cur) =>
                    ((prev[cur] = prev[cur] + 1 || 1), prev), {})
                const value = Object.values(result)
                if (value.includes(1)) {
                    let four = 0
                    for (let key in result) {
                        if (result.hasOwnProperty(4)) {
                            four = key * 4
                        }
                    }
                    return four
                } else { return 0 }
            } else if (set.size === 1) {
                return list[0] * 4
            } else { return 0 }
        }
        case 'little straight': return [...list.sort()].every((value, index) => value === [1, 2, 3, 4, 5][index]) ? 30 : 0;
        case 'big straight': return [...list.sort()].every((value, current) => value === [2, 3, 4, 5, 6][current]) ? 30 : 0;
        case 'choice': return list.reduce((acum, el) => acum + el, 0)
        case 'yacht': {
            const set = new Set(list)
            if (set.size === 1) {
                return 50
            } else {
                return 0
            }
        }
        default:
            return 0
    }

    throw new Error('Remove this statement and implement this function');
};