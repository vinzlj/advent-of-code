import input from "./input.js";

class BingoMatrix {

    matrix = null
    hasWon = false

    constructor (rawMatrix) {
        this.matrix = rawMatrix.map(row => row.map(number => {
            return {
                value: number,
                highlighted: false,
            }
        }))
    }

    highlightDrawnNumber = (drawnNumber) => {
        this.matrix.forEach(row => row.forEach(number => number.highlighted = true === number.highlighted ? true : drawnNumber === number.value))
    }

    isWinning = () => {
        return !!(this.matrix.some(row => row.length === row.filter(number => number.highlighted).length)
            || this.reverse().some(column => column.length === column.filter(number => number.highlighted).length))
    }

    reverse = () => {
        let reversedMatrix = this.matrix.map(() => [])

        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix.length; j++) {
                reversedMatrix[j].push(this.matrix[i][j])
            }
        }

        return reversedMatrix
    }
}

class BingoWithSquid {

    upcomingNumbers = []
    bingoMatrices = []

    result = {
        lastWinningDrawnNumber: null,
        lastWinningMatrixNonHighlightedSum: null,
    }

    constructor (upcomingNumbers, rawBingoMatrices) {
        this.upcomingNumbers = upcomingNumbers
        this.bingoMatrices = rawBingoMatrices.map(matrix => new BingoMatrix(matrix))
    }

    play = () => {
        this.upcomingNumbers.some(drawnNumber => {
            this.bingoMatrices.forEach(matrix => {
                if (matrix.hasWon) {
                    return
                }

                matrix.highlightDrawnNumber(drawnNumber)

                if (!matrix.isWinning()) {
                    return
                }

                matrix.hasWon = true

                this.result.lastWinningDrawnNumber = drawnNumber
                this.result.lastWinningMatrixNonHighlightedSum = matrix.matrix
                    .reduce((previous, current) => previous.concat(current.filter(number => false === number.highlighted)), [])
                    .reduce((previous, current) => previous + current.value, 0)
            })

            return this.bingoMatrices.length === this.bingoMatrices.filter(matrix => matrix.hasWon).length
        })

        return this.result.lastWinningDrawnNumber * this.result.lastWinningMatrixNonHighlightedSum
    }
}

const game = new BingoWithSquid(input.upcomingNumbers, input.bingoMatrices)
const output = game.play()

console.log({
    title: 'Giant Squid [4.2]',
    url: 'https://adventofcode.com/2021/day/4#part2',
    upcomingNumbersSampleInput: input.upcomingNumbers.slice(0, 5),
    bingoMatrixSampleInput: input.bingoMatrices[0],
    output,
})
