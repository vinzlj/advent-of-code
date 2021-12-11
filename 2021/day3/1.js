import input from "./input.js";

const binaryDiagnostic = (binarySequences) => {
    let gammaRates = binarySequences[0].split('').map(() => 0)
    let epsilonRates = binarySequences[0].split('').map(() => 0)

    binarySequences.forEach(binarySequence => {
        for (let i = 0; i < binarySequence.length; i++) {
            if (0 === parseInt(binarySequence.charAt(i))) {
                epsilonRates[i]++
            } else {
                gammaRates[i]++
            }
        }
    })

    const gammaRate = parseInt(gammaRates.map((rate => 500 > rate ? '1' : '0')).join(''), 2)
    const epsilonRate = parseInt(epsilonRates.map((rate => 500 > rate ? '1' : '0')).join(''), 2)

    return gammaRate * epsilonRate
}

const output = binaryDiagnostic(input)

console.log({
    title: 'Binary Diagnostic [3.1]',
    url: 'https://adventofcode.com/2021/day/3',
    inputPreview: input.slice(0, 5),
    inputLength: input.length,
    output,
})
