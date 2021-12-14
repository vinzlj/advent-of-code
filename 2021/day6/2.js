import input from "./input.js";

class LanternFishesGroupSimulator {

    maxLifeExpectancy = 9
    summedUpLanternFishesGroup = []

    constructor (simulationDuration, fishesLifeExpectancies) {
        this.summedUpLanternFishesGroup = Array(this.maxLifeExpectancy).fill(0)

        fishesLifeExpectancies.forEach(fishLifeExpectancy => this.summedUpLanternFishesGroup[fishLifeExpectancy]++)

        for (let elapsedDays = 0; elapsedDays < simulationDuration; elapsedDays++) {
            this.summedUpLanternFishesGroup[(7 + elapsedDays) % this.maxLifeExpectancy] += this.summedUpLanternFishesGroup[elapsedDays % this.maxLifeExpectancy]
        }
    }

    getResult = () => {
        return this.summedUpLanternFishesGroup.reduce((previousGroup, currentGroup) => previousGroup + currentGroup, 0)
    }
}

const output = new LanternFishesGroupSimulator(256, input).getResult()

console.log({
    title: 'Lanternfish [6.2]',
    url: 'https://adventofcode.com/2021/day/6#part2',
    inputPreview: input.slice(0, 5),
    inputLength: input.length,
    output,
})
