import input from "./input.js";

const sonarSweep = (numbers) => {
    let previousNumber = null
    let higherThanPrevious = 0

    numbers.forEach(currentNumber => {
        if (null !== previousNumber && currentNumber > previousNumber) {
            higherThanPrevious++
        }

        previousNumber = currentNumber
    })

    return higherThanPrevious
}

const output = sonarSweep(input)

console.log({
    title: 'Sonar Sweep [1.1]',
    url: 'https://adventofcode.com/2021/day/1',
    inputPreview: input.slice(0, 5),
    inputLength: input.length,
    output,
})