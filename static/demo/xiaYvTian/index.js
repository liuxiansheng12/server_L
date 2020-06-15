
((poot) => {
    poot();
})
( function () {
    // 获取整个画布
    const cans = document.querySelector("#canvas");
    // 设置画布的尺寸
    const w = cans.width = window.innerWidth;
    const h = cans.height = window.innerHeight;
    // 设置画笔
    const ctx = cans.getContext("2d");
    
    
    // 创建雨滴对象的函数
    class Yu {
        constructor(x, v) {
            this.x = x;
            this.y = 0;
            this.width = 2;
            this.height = 3;
            this.r = 0;
            // 雨滴下降的速率
            this.v = v;
            // 雨滴结束的位置
            this.jie = h - 120;
            // 雨滴扩散的最大值
            this.max = 15;
            this.opacity = 1;
        }

        // 绘制雨滴
        a() {
            ctx.beginPath();
            ctx.strokeStyle = "#f0f";
            ctx.strokeRect(this.x, this.y, this.width, this.height);
        }
        // 绘制雨滴扩散圈
        b() {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(3, 169, 244, ${this.opacity})`;
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, 0);
            ctx.stroke();
        }
        // 设置雨滴的远近函数
        c(x) {
            this.width *= x;
            this.height *= x;
            this.max *= x;
            this.jie -= 50 - parseInt(x * 50);
        }

        // 雨滴的下降函数
        xia() {
            if( this.y >= this.jie) {
                // 开始扩散
                if(this.opacity < 0.3) {
                    return true;
                } 

                if(this.r >= this.max) {
                    // 透明度逐渐减少
                    this.opacity *= 0.96;
                }
                this.r += 1;
                this.b();
            }else {
                // 开始下降
                this.y += this.v;
                // 下降完绘制
                this.a();
            }
        }
    }

    
    // 开始绘制
    function main() {
        var arr = [];
        // 创建雨滴
        arr.push( createYu() );
        
        // 启动定时创建雨滴对象函数
        setInterval( () => {
            // 产生随机数，一次生成几个雨滴，最多一次产生6
            const min = 1;
            const max = 6;
            const sui = parseInt(Math.random() * max) + min;
            for(let i = 0; i < sui; i ++) {
                // 创建雨滴
                arr.push( createYu() );
            }

        }, 500);


        setInterval( () => {
            ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
            ctx.fillRect(0, 0, w, h);
            
            arr.forEach( (p, index) => {
                const a = p.xia();
                if(a) {
                    arr.splice(index, 1);
                }
                console.log(a) ;
            } )

        }, 1000 / 60);
    }

    // 创建一个雨滴对象
    function createYu() {
        // 创建随机横坐标
        const width = Math.random() * w;
        // 创建随机速度，最小为2， 最大为4；
        const v = Math.random() * 2 + 2;
        
        // 创建一个雨滴对象
        const yu = new Yu(width, v);
        // 设置雨滴对象的远近
        yu.c( Math.random() );
        return yu;
    }

    main();
});