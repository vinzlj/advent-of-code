import input from "./input.js";

const RATING_TYPE_OXYGEN = 'oxygen'
const RATING_TYPE_CO2 = 'co2'

const binaryDiagnostic = (binarySequences, ratingType, bitIndex = 0) => {
    if (1 === binarySequences.length) {
        return parseInt(binarySequences[0], 2)
    }

    const bitsAtIndex = binarySequences.map(binarySequence => parseInt(binarySequence.charAt(bitIndex)))
    const mostCommonBitAtIndex = bitsAtIndex.filter(bit => 1 === bit).length >= bitsAtIndex.filter(bit => 0 === bit).length ? 1 : 0
    const commonBitAtIndex = RATING_TYPE_OXYGEN === ratingType ? mostCommonBitAtIndex : 1 - mostCommonBitAtIndex

    return binaryDiagnostic(
        binarySequences
            .map(binarySequence => commonBitAtIndex === parseInt(binarySequence.charAt(bitIndex)) ? binarySequence : null)
            .filter(binarySequence => null !== binarySequence),
        ratingType,
        bitIndex + 1
    )
}

const output = binaryDiagnostic(input, RATING_TYPE_OXYGEN) * binaryDiagnostic(input, RATING_TYPE_CO2)

console.log({
    title: 'Binary Diagnostic [3.2]',
    url: 'https://adventofcode.com/2021/day/3#part2',
    inputPreview: input.slice(0, 5),
    inputLength: input.length,
    output,
})
