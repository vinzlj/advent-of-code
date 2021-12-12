class IntegersRange {

    values = []

    constructor (from, to) {
        this.values = Array.from({ length: from < to ? to - from + 1 : from - to + 1 }, (x, i) => from < to ? i + from : i + to)
    }

    getValues = () => {
        return this.values
    }
}

export default IntegersRange