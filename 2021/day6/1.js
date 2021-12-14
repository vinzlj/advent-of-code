import input from "./input.js";
import Timeline from "./1/Timeline.js";
import Lanternfish from "./1/Lanternfish.js";

class LanternFishesGroupSimulator {

    timeline = null
    lanternFishesGroup = []

    constructor (simulationDuration, fishesLifeExpectancies) {
        this.lanternFishesGroup = fishesLifeExpectancies.map(fishLifeExpectancy => new Lanternfish(fishLifeExpectancy))
        this.timeline = new Timeline(simulationDuration)
    }

    getResult = () => {
        while (!this.timeline.isFinished()) {
            this.lanternFishesGroup.forEach(fish => {
                if (!fish.shouldDivideAndRevive()) {
                    fish.decreaseLife()

                    return
                }

                fish.revive()
                this.lanternFishesGroup.push(new Lanternfish())
            })

            this.timeline.advance()
        }

        return this.lanternFishesGroup.length
    }
}

const output = new LanternFishesGroupSimulator(80, input).getResult()

console.log({
    title: 'Lanternfish [6.1]',
    url: 'https://adventofcode.com/2021/day/6',
    inputPreview: input.slice(0, 5),
    inputLength: input.length,
    output,
})
