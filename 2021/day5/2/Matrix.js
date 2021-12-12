import IntegersRange from "./IntegersRange.js";
import MatrixRange from "./MatrixRange.js";
import MatrixMove from "./MatrixMove.js";

class Matrix {

    grid = []

    constructor (rawMoves) {
        this.grid = new IntegersRange(0, 999).getValues().map(() => new IntegersRange(0, 999).getValues().map(() => 0))

        rawMoves
            .map(rawMove => new MatrixRange(MatrixMove.fromRawMove(rawMove)))
            .forEach(matrixRange => matrixRange.getPoints().forEach(point => this.grid[point.x][point.y]++))
    }

    countOverlaps = () => {
        return this.grid.reduce((previousValue, currentValue) => previousValue + currentValue.filter(value => 1 < value).length, 0)
    }
}

export default Matrix