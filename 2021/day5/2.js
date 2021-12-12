import input from "./input.js";
import Matrix from "./2/Matrix.js";

class HydrothermalVentureCalculator {

    matrix = null

    constructor (rawMoves) {
        this.matrix = new Matrix(rawMoves)
    }

    getResult = () => {
        return this.matrix.countOverlaps()
    }
}

const output = new HydrothermalVentureCalculator(input).getResult()

console.log({
    title: 'Hydrothermal Venture [5.2]',
    url: 'https://adventofcode.com/2021/day/5#part2',
    inputPreview: input.slice(0, 5),
    inputLength: input.length,
    output,
})
