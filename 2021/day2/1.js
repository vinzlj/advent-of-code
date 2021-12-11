import input from "./input.js";

const moveSubMarine = (moves) => {
    let depth = 0
    let xPosition = 0

    for (const move of moves) {
        let [ direction, value ] = move.split(' ')
        value = parseInt(value)

        if ('forward' === direction) {
            xPosition += value
        } else if ('up' === direction) {
            depth -= value
        } else if ('down' === direction) {
            depth += value
        }
    }

    return depth * xPosition
}

const output = moveSubMarine(input)

console.log({
    title: 'Dive! [2.1]',
    url: 'https://adventofcode.com/2021/day/2',
    inputPreview: input.slice(0, 5),
    inputLength: input.length,
    output,
})