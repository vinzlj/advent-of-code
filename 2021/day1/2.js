import input from "./input.js";

const sonarSweep = (numbers) => {
    let stackedNumbers = []
    let currentSum = 0
    let previousSum = 0
    let higherThanPrevious = 0

    while (0 < numbers.length) {
        const currentNumber = numbers.shift()
        stackedNumbers.push(currentNumber)

        if (3 > stackedNumbers.length) {
            continue
        }

        currentSum = stackedNumbers.reduce((count, currentValue) => count + currentValue)

        if (0 !== previousSum && currentSum > previousSum) {
            higherThanPrevious++
        }

        previousSum = currentSum
        stackedNumbers.shift()
    }

    return higherThanPrevious
}

const output = sonarSweep(input)

console.log({
    title: 'Sonar Sweep [1.1]',
    url: 'https://adventofcode.com/2021/day/1#part2',
    inputPreview: input.slice(0, 5),
    inputLength: input.length,
    output,
})