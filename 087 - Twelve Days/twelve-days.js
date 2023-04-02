export const recite = (...verses) => {
    const [start, end] = verses;
    var retArr = []
    const lyrics = [
        ["first", "a Partridge in a Pear Tree"],
        ["second", "two Turtle Doves"],
        ["third", "three French Hens"],
        ["fourth", "four Calling Birds"],
        ["fifth", "five Gold Rings"],
        ["sixth", "six Geese-a-Laying"],
        ["seventh", "seven Swans-a-Swimming"],
        ["eighth", "eight Maids-a-Milking"],
        ["ninth", "nine Ladies Dancing"],
        ["tenth", "ten Lords-a-Leaping"],
        ["eleventh", "eleven Pipers Piping"],
        ["twelfth", "twelve Drummers Drumming"]
    ]

    if (end) {
        for (let index = start; index <= end; index++) {
            retArr.push(verseConstructor(index))
        }
    } else {
        return verseConstructor(start)
    }
    return retArr.join("\n")

    function verseConstructor(number) {
        number = number - 1
        let day = lyrics[number][0]
        let retVerse = `On the ${day} day of Christmas my true love gave to me: `

        for (let verseIdx = number; verseIdx >= 0; verseIdx--) {
            if (verseIdx == 0) {
                retVerse += number !== 0 ? "and " : ""
                retVerse += lyrics[verseIdx][1] + "."
            } else {
                retVerse += lyrics[verseIdx][1] + ", "
            }
        }

        return retVerse + "\n";
    }
};