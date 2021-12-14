class Timeline {

    remainingDays = 0;

    constructor (numberOfDays) {
        this.remainingDays = numberOfDays
    }

    advance = () => {
        this.remainingDays--
    }

    isFinished = () => {
        return 0 === this.remainingDays
    }
}

export default Timeline;