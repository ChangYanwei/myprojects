(function () {
    window.canvasLock = function (obj) {
        this.height = obj.height;
        this.width = obj.width;
        this.chooseType = obj.chooseType;
    };

    //js动态生成dom
    canvasLock.prototype.initDom = function () {
        let wrap = document.createElement("div");
        // wrap.setAttribute("style", "position:absolute;top:0;left:0;");

        let title = document.createElement("h3");
        title.id = "title";
        title.className = "title";
        title.textContent = "请解锁";
        wrap.appendChild(title);

        let canvas = document.createElement("canvas");
        canvas.id = "canvas";
        canvas.style.cssText = "background-color:#305066;display:inline-block;margin-top:15px;"
        wrap.appendChild(canvas);

        let width = this.width || 300;
        let height = this.height || 300;

        document.body.appendChild(wrap);

        //高清屏缩放
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";

        //修改默认宽高
        canvas.width = width;
        canvas.height = height;
    };

    //画圆函数
    canvasLock.prototype.draw = function(x,y){
        this.ctx.strokeStyle = "#CFE6FF";
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(x,y,this.r,0,2*Math.PI,true);
        this.ctx.closePath();
        this.ctx.stroke();
    };

    //得出每个圆的圆心，并调用画圆函数
    canvasLock.prototype.createCircle = function(){
        //一行有n个圆
        let n = this.chooseType;
        let count = 0;
        this.r = this.canvas.width / (4 * n + 2);//半径
        // this.lastPoint = [];
        this.arr = [];//存储圆的圆心坐标
        // this.restPoint = [];
        let r = this.r;
        //存储圆的圆心坐标
        for (let i = 0;i < n;i++){
            for (let j = 0;j < n;j++){
                count++;
                let obj = {
                    x:j * 4 * r + 3 * r,
                    y:i * 4 * r + 3 * r,
                    index:count
                };
                this.arr.push(obj);
            }
        }
        for (let i = 0;i < this.arr.length;i++){
            this.draw(this.arr[i].x,this.arr[i].y);//画圆
        }

    };

    canvasLock.prototype.getPosition = function(e){
          let rect = e.currentTarget.getBoundingClientRect();
          let po = {
              x:(e.touches[0].clientX - rect.left),
              y:(e.touches[0].clientY - rect.top)
          };
          return po;
    };

    //触摸事件
    canvasLock.prototype.bindEvent = function(){
        this.canvas.addEventListener("touchstart",function () {
            //画圆和画线

        },false);

        this.canvas.addEventListener("touchmove",function () {

        },false);

        this.canvas.addEventListener("touchend",function () {

        },false);
    };


    //程序的初始化
    canvasLock.prototype.init = function () {
        this.initDom();
        this.canvas = document.getElementById("canvas");
        this.ctx = canvas.getContext("2d");
        this.createCircle();
        this.bindEvent();
    }
})();
