export default class Canvas {
    constructor(container) {
        this.element = document.createElement('canvas')
        this.context = this.element.getContext('2d')
        this.element.width = 688
        this.element.height = 480
        container.appendChild(this.element)
    }
}