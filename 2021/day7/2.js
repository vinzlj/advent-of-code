import input from "./input.js";

class AlignSubmarineCrabs {

    crabsXPositions = []
    minimumFuelRequired = null

    constructor (crabsXPositions) {
        this.crabsXPositions = crabsXPositions

        for (let currentXPosition = 0; currentXPosition < this.crabsXPositions.length; currentXPosition++) {
            const fuelAtPosition = this.getFuelAtPosition(currentXPosition)

            if (false === fuelAtPosition) {
                continue
            }

            if (null === this.minimumFuelRequired || fuelAtPosition < this.minimumFuelRequired) {
                this.minimumFuelRequired = fuelAtPosition
            }
        }
    }

    getFuelAtPosition = (currentXPosition) => {
        let fuelAtPosition = 0

        this.crabsXPositions.forEach(crabXPosition => {
            fuelAtPosition += (1 + Math.abs(currentXPosition - crabXPosition)) * Math.abs(currentXPosition - crabXPosition) / 2

            if (null !== this.minimumFuelRequired && fuelAtPosition > this.minimumFuelRequired) {
                return false
            }
        })

        return fuelAtPosition
    }

    getResult = () => {
        return this.minimumFuelRequired
    }
}

const output = new AlignSubmarineCrabs(input).getResult()

console.log({
    title: 'The Treachery of Whales [7.2]',
    url: 'https://adventofcode.com/2021/day/7#part2',
    inputPreview: input.slice(0, 10),
    inputLength: input.length,
    output,
})
