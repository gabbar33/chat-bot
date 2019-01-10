

class RandomNumber {
    constructor(size) {
        this.size = size;
    }

    getARandomNumber() {
        const mulValue = Math.pow(10, this.size);
        return (Math.floor(Math.random() * mulValue) + mulValue).toString().substring(1);
    }

    getRandomNumbers(num) {
        let randomNumbers = [];
        for (let i = 0; i < num; i++) {
            randomNubers.push(this.getARandomNumber())
        }
        return randomNumbers
    }

}

module.exports = {
    RandomNumber
}