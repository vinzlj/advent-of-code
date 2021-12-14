class Lanternfish {

    lifeExpectancy = 0

    constructor (lifeExpectancy = 8) {
        this.lifeExpectancy = lifeExpectancy
    }

    decreaseLife = () => {
        this.lifeExpectancy--
    }

    shouldDivideAndRevive = () => {
        return 0 === this.lifeExpectancy
    }

    revive = () => {
        this.lifeExpectancy = 6
    }
}

export default Lanternfish