import input from "./input.js";

const moveSubMarine = (moves) => {
    let aim = 0
    let depth = 0
    let xPosition = 0

    for (const move of moves) {
        let [ direction, value ] = move.split(' ')
        value = parseInt(value)

        if ('forward' === direction) {
            xPosition += value
            depth += aim * value
        } else if ('up' === direction) {
            aim -= value
        } else if ('down' === direction) {
            aim += value
        }
    }

    return depth * xPosition
}

const output = moveSubMarine(input)

console.log({
    title: 'Dive! [2.2]',
    url: 'https://adventofcode.com/2021/day/2#part2',
    inputPreview: input.slice(0, 5),
    inputLength: input.length,
    output,
})