class Draw {
     constructor(el) {
        this.el = el
        this.canvas = document.getElementById(this.el)
        this.ctx = this.canvas.getContext('2d')
        this.stage_info = this.canvas.getBoundingClientRect()
        this.path = {
            beginX: 0,
            beginY: 0,
            endX: 0,
            endY: 0
        }
        
    }
    init(btn) {
        this.ctx.clearRect(0, 0, 640, 1008);
       
    }

}

export default Draw