import IntegersRange from "./IntegersRange.js";
import MatrixPoint from "./MatrixPoint.js";
import MatrixMove from "./MatrixMove.js";

class MatrixRange {

    points = []

    constructor (move) {
        if (move.isHorizontal() || move.isVertical()) {
            this.points = this.getAxisPoints(move)
        } else if (move.isDiagonal()) {
            this.points = this.getDiagonalPoints(move)
        }
    }

    getAxisPoints = (move) => {
        return move.isHorizontal() ?
            new IntegersRange(move.fromPoint.x, move.toPoint.x).getValues().map(xPosition => new MatrixPoint(xPosition, move.fromPoint.y)) :
            new IntegersRange(move.fromPoint.y, move.toPoint.y).getValues().map(yPosition => new MatrixPoint(move.fromPoint.x, yPosition))
    }

    getDiagonalPoints = (move, previousPoints = []) => {
        previousPoints.push(move.fromPoint)

        if (move.fromPoint.equals(move.toPoint)) {
            return previousPoints
        }

        const diagonalMove = new MatrixPoint(move.fromPoint.x < move.toPoint.x ? 1 : -1, move.fromPoint.y < move.toPoint.y ? 1 : -1)
        const newMove = new MatrixMove(new MatrixPoint(move.fromPoint.x + diagonalMove.x, move.fromPoint.y + diagonalMove.y), move.toPoint)

        return this.getDiagonalPoints(newMove, previousPoints)
    }

    getPoints = () => {
        return this.points
    }
}

export default MatrixRange