import IntegersRange from "./IntegersRange.js";
import MatrixPoint from "./MatrixPoint.js";

class MatrixRange {

    points = []

    constructor (move) {
        if (!move.isHorizontal() && !move.isVertical()) {
            this.points = []

            return
        }

        this.points = this.getAxisPoints(move)
    }

    getAxisPoints = (move) => {
        return move.isHorizontal() ?
            new IntegersRange(move.fromPoint.x, move.toPoint.x).getValues().map(xPosition => new MatrixPoint(xPosition, move.fromPoint.y)) :
            new IntegersRange(move.fromPoint.y, move.toPoint.y).getValues().map(yPosition => new MatrixPoint(move.fromPoint.x, yPosition))
    }

    getPoints = () => {
        return this.points
    }
}

export default MatrixRange