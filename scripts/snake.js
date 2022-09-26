import Config from './config.js'

export default class Snake {
    constructor() {
        this.config = new Config()
        this.x = 336
        this.y = 480
        this.dx = 0
        this.dy = -this.config.sizeCell
        this.tails = []
        this.maxTails = 1
        this.control()
    }

    update(berry, score, canvas) {
        this.x += this.dx
        this.y += this.dy
        
        if (this.x < 0) {
            this.x = canvas.element.width - this.config.sizeCell
        } else if (this.x >= canvas.element.width) {
            this.x = 0
        }
        if (this.y < 0) {
            this.y = canvas.element.height - this.config.sizeCell
        } else if (this.y >= canvas.element.height) {
            this.y = 0
        }
        
        this.tails.unshift({ x: this.x, y: this.y})

        if (this.tails.length > this.maxTails) {
            this.tails.pop()
        }
            
        this.tails.forEach((el, index) => {
                    
            if (el.x === berry.x && el.y === berry.y) {
                this.maxTails++
                score.incScore()
                berry.randomPosition()
            }

            for (let i = index + 1; i < this.tails.length; i++) {
                if (el.x == this.tails[i].x &&
                    el.y == this.tails[i].y &&
                    !this.config.godMode) {
                    
                    this.death()
                    score.drawRecord(this.config.godModeKeeper)
                    score.setToZero()
                    berry.randomPosition()
                    this.config.godModeKeeper = false    
                }
            }
        })
    }    

    draw(context) {
        this.tails.forEach((el, index) => {
            if (index == 0) {
                context.fillStyle = this.config.colorLight
            } else {
                context.fillStyle = this.config.colorDark
            }
            context.fillRect( el.x, el.y, this.config.sizeCell, 
                                          this.config.sizeCell)
        })
    }

    death() {
        this.x = 336
		this.y = 16
		this.dx = 0
		this.dy = this.config.sizeCell
		this.tails = []
		this.maxTails = 1
    }

    control() {
        document.addEventListener('keydown', e => {

            if (e.code == 'ArrowUp') {
                if (this.dx == 0 && 
                    this.dy == this.config.sizeCell) {
                    return
                } else {
                    this.dx = 0
                    this.dy = -this.config.sizeCell
                }
                
            } else if (e.code == 'ArrowLeft') {
                if (this.dx == this.config.sizeCell &&
                    this.dy == 0) {
                    return
                } else {
                    this.dx = -this.config.sizeCell
                    this.dy = 0
                }

            } else if (e.code == 'ArrowDown') {
                if (this.dx == 0 &&
                    this.dy == -this.config.sizeCell) {
                    return
                } else {
                    this.dx = 0
                    this.dy = this.config.sizeCell
                }

            } else if (e.code == 'ArrowRight') {
                if (this.dx == -this.config.sizeCell &&
                    this.dy == 0) {
                    return
                } else {
                    this.dx = this.config.sizeCell
                    this.dy = 0
                }
            }
            
            if (e.code == 'KeyG') {
                if (this.config.godMode) {
                    this.config.godMode = false
                    this.config.drawGodMode()
                } else {
                    this.config.godMode = true
                    this.config.godModeKeeper = true
                    this.config.drawGodMode()
                }
            }
        })
    }
}