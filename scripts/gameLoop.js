import Config from './config.js'

export default class GameLoop {
    constructor(update, draw) {
        this.update = update
        this.draw = draw
        this.config = new Config()
        this.animate = this.animate.bind(this)
        this.animate()
        this.control()
    }
        
    animate() {
        requestAnimationFrame(this.animate)
        
        if (++this.config.step < this.config.maxStep) {
            return
        }
        
        this.config.step = 0
        this.update()
        this.draw()
    }

    control() {
        document.addEventListener('keydown', e => {

            if (e.code == 'Digit1') {
                this.config.maxStep = 9
                this.config.drawSpeed()
            }
            if (e.code == 'Digit2') {
                this.config.maxStep = 8
                this.config.drawSpeed()
            }
            if (e.code == 'Digit3') {
                this.config.maxStep = 7
                this.config.drawSpeed()
            }
            if (e.code == 'Digit4') {
                this.config.maxStep = 6
                this.config.drawSpeed()
            }
            if (e.code == 'Digit5') {
                this.config.maxStep = 5
                this.config.drawSpeed()
            }
            if (e.code == 'Digit6') {
                this.config.maxStep = 4
                this.config.drawSpeed()
            }
            if (e.code == 'Digit7') {
                this.config.maxStep = 3
                this.config.drawSpeed()
            }
            if (e.code == 'Digit8') {
                this.config.maxStep = 2
                this.config.drawSpeed()
            }
            if (e.code == 'Equal') {
                if (this.config.maxStep > 2) {
                    this.config.maxStep--
                    this.config.drawSpeed()
                }
            } else if (e.code == 'Minus') {
                if (this.config.maxStep < 9) {
                    this.config.maxStep++
                    this.config.drawSpeed()
                }
            }
        })
    }
}