class Draw {
     constructor(el,width,height) {
        this.width=width
        this.height=height
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
    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
       
    }
    drawImage(img,x,y,width,height){
        this.ctx.drawImage(img, x, y, width, height);
    }
    /**
      *定时循环画图,
      *
      *@params awaysImgs：一直画的图片，
                dynImgs: 轮询图片
                speed: 轮询间隔
                
    */
    timeDraw(awaysImgs,dynImgs,speed,x,y,width,height) {
        let drawTimer=null;
        if(drawTimer!=null)
            clearInterval(drawTimer);
        
        var i = 0;

        speed = speed || 400;
        width = width || this.width;
        height = height || this.height;
        x = x || 0;
        y = y || 0;
        //2.获取图片对象
        drawTimer = setInterval(()=>{
            this.clear()
            awaysImgs.forEach((value, key)=>{
                this.drawImage(value, x, y, width, height);
            });
            this.drawImage(dynImgs[i], x, y, width, height);
            i++;
            if (i >= dynImgs.length) i = 1;

        }, speed);
    }

}

export default Draw