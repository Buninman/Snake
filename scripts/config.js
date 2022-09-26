export default class Config {
    constructor() {
        this.speedBlock = document.querySelector('#speed')
        this.godModeColor = document.querySelector('.game-header')
        this.textBlock = document.querySelector('.keys-conf')
        this.step = 0
        this.maxStep = 5
        this.sizeCell = 16
        this.sizeBerry = this.sizeCell / 4
        this.godMode = false
        this.godModeKeeper = false
        this.colorLight = '#3E7E73'
        this.colorDark = '#275B52'
        this.drawSpeed()
    }

    speedLevel() {
        return 10 - this.maxStep
    }

    drawSpeed() {
        this.speedBlock.innerHTML = this.speedLevel()
    }

    drawGodMode() {
        if (this.godMode) {
            this.colorLight = '#FA0556'
            this.colorDark = '#A00034'
            this.textBlock.innerHTML = 'You are God! But the score will not be recorded'
            this.godModeColor.style.backgroundColor = this.colorDark
        } else {
            this.colorLight = '#3E7E73'
            this.colorDark = '#275B52'
            this.textBlock.innerHTML ='Control: Arrows, Speed: key1-8, GodMode: G'
            this.godModeColor.style.backgroundColor = this.colorDark
        }
    }
}