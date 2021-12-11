import url from 'url';
import path from 'path';
import fs from 'fs';

const __filename = url.fileURLToPath(import.meta.url);
const filePath = path.resolve(path.dirname(__filename), './raw-input.txt')

let lineIndex = 0
let upcomingNumbers = []
let bingoMatrices = []
let currentMatrix = []

fs.readFileSync(filePath).toString().split(/\r?\n/).forEach((line) => {
    if (0 === lineIndex) {
        upcomingNumbers = line.split(',').map(number => parseInt(number))

        ++lineIndex

        return
    }

    if ('' === line) {
        return
    }

    currentMatrix.push(line.trim().replaceAll('  ', ' ').split(' ').map(number => parseInt(number)))

    if (5 === currentMatrix.length) {
        bingoMatrices.push(currentMatrix)

        currentMatrix = []
    }
})


const input = {
    upcomingNumbers,
    bingoMatrices,
}

export default input