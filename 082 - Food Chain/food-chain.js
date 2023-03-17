const animals = [
    {
        animal: 'fly',
        response: "I don't know why she swallowed the fly. Perhaps she'll die."
    },
    {
        animal: 'spider',
        response: 'It wriggled and jiggled and tickled inside her.',
        reason: 'She swallowed the spider to catch the fly.'
    },
    {
        animal: 'bird',
        response: 'How absurd to swallow a bird!',
        reason:
            'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.'
    },
    {
        animal: 'cat',
        response: 'Imagine that, to swallow a cat!',
        reason: 'She swallowed the cat to catch the bird.'
    },
    {
        animal: 'dog',
        response: 'What a hog, to swallow a dog!',
        reason: 'She swallowed the dog to catch the cat.'
    },
    {
        animal: 'goat',
        response: 'Just opened her throat and swallowed a goat!',
        reason: 'She swallowed the goat to catch the dog.'
    },
    {
        animal: 'cow',
        response: "I don't know how she swallowed a cow!",
        reason: 'She swallowed the cow to catch the goat.'
    },
    {
        animal: 'horse',
        response: "She's dead, of course!"
    }
]

const swallowedAnimal = index =>
    `I know an old lady who swallowed a ${animals[index].animal}.\n`

const getResponse = index => `${animals[index].response}\n`

const getReason = index => `${animals[index].reason}\n`

const createReasonChain = index => {
    if (index === animals.length - 1) return ''

    let reasonChain = ''
    for (let animal = 1; animal < index + 1; animal++) {
        reasonChain = `${getReason(animal)}${reasonChain}`
    }
    return reasonChain
}

const getFinalLine = index =>
    index === 1 || index === animals.length ? '' : getResponse(0)

export class Song {
    verse(verseNumber) {
        const animalLine = swallowedAnimal(verseNumber - 1)
        const responseLine = getResponse(verseNumber - 1)
        const reasonChain = createReasonChain(verseNumber - 1)
        const finalLine = getFinalLine(verseNumber)

        return `${animalLine}${responseLine}${reasonChain}${finalLine}`
    }

    verses(start, end) {
        let verses = ''
        for (start; start <= end; start++) {
            verses += `${this.verse(start)}\n`
        }
        return verses
    }
}