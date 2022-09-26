export default class Score {
    constructor(scoreBlock, recordBlock, score = 0) {
        this.scoreBlock = document.querySelector(scoreBlock)
        this.recordBlock = document.querySelector(recordBlock)
        this.score = score
        this.record = score
        this.draw()
    }

    incScore() {
        this.score++
        this.draw()
    }

    setToZero() {
        this.score = 0
        this.draw()
    }

    drawRecord(godModeKeeper) {
        if (this.score > this.record && godModeKeeper == false) {
            this.record = this.score
            this.recordBlock.innerHTML = this.record
        }
    }
    
    draw() {
        this.scoreBlock.innerHTML = this.score
    }
}