import MatrixPoint from "./MatrixPoint.js";

class MatrixMove {

    fromPoint = null
    toPoint = null

    constructor(fromPoint, toPoint) {
        this.fromPoint = fromPoint
        this.toPoint = toPoint
    }

    static fromRawMove = (rawMove) => {
        const parsedMove = [...rawMove.matchAll(/([0-9]{1,3}),([0-9]{1,3}) -> ([0-9]{1,3}),([0-9]{1,3})/g)][0]

        return new this(
            new MatrixPoint(parseInt(parsedMove[1]), parseInt(parsedMove[2])),
            new MatrixPoint(parseInt(parsedMove[3]), parseInt(parsedMove[4])),
        )
    }

    isHorizontal = () => {
        return this.fromPoint.y === this.toPoint.y
    }

    isVertical = () => {
        return this.fromPoint.x === this.toPoint.x
    }
}

export default MatrixMove