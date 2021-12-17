import input from "./input.js";

class AlignSubmarineCrabs {

    fuelRequiredForPositions = []

    constructor (crabsXPositions) {
        const minXPosition = Math.min(...crabsXPositions)
        const maxXPosition = Math.max(...crabsXPositions)

        this.fuelRequiredForPositions = Array(maxXPosition - minXPosition + 1).fill(0)

        for (let currentPosition = minXPosition; currentPosition <= maxXPosition; currentPosition++) {
            crabsXPositions.forEach(crabXPosition => {
                this.fuelRequiredForPositions[currentPosition] += Math.abs(currentPosition - crabXPosition)
            })
        }
    }

    getResult = () => {
        return Math.min(...this.fuelRequiredForPositions)
    }
}

const output = new AlignSubmarineCrabs(input).getResult()

console.log({
    title: 'The Treachery of Whales [7.1]',
    url: 'https://adventofcode.com/2021/day/7',
    inputPreview: input.slice(0, 10),
    inputLength: input.length,
    output,
})
