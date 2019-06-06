var switcher = (function(){
    return{
        init(target){
            let c;
            let ctx;
            let width , height;
            let on_color, off_color, circle_color;
            let status;
            let border = 1;
            // window.onload = function(){
                c = document.querySelector(target);
                ctx = c.getContext("2d");
            
                width = c.width;
                height = c.height;
                // 获取canvas的各个属性 以便后面改变颜色和开关时使用
                on_color = c.getAttribute("on");
                off_color = c.getAttribute("off");
                circle_color = c.getAttribute("circle");
                status = c.getAttribute("status");
               //当页面加载时给一个初始化的值 开启 背景颜色 滑动圆的位置
                if(status == "on"){
                    let x = width - height / 2;
                    ctx.clearRect(0, 0, width, height); //计时器加载先清空画布
                    ctx.beginPath();
                    ctx.fillStyle = on_color;
                    ctx.arc(height / 2, height / 2, height / 2, 0, Math.PI*2); //画左边圆
                    ctx.arc(width - height / 2, height / 2, height / 2, 0, Math.PI*2); //画右边圆
                    ctx.fill();
                    ctx.fillRect(height / 2, 0, height, height);  //画正方形
                    // 画上面的动画按钮圆
                    ctx.beginPath();
                    ctx.fillStyle = circle_color;
                    ctx.arc(x, height / 2, height / 2 - border, 0, Math.PI*2);
                    
                    ctx.fill();
                // }
                //  点击事件    
                c.onclick = function(){
                    if(status == "on"){
                        off();
                        status = "off";
                    }else{
                        on();
                        status = "on";
                    }
                    c.setAttribute("status", status);
                }
            
            }
            // 打开时背景颜色 滑块的位置
            function on(){
                let x = height / 2;
            
                let handle = setInterval(function(){
                    ctx.clearRect(0, 0, width, height); //计时器加载先清空画布
                    ctx.beginPath();
                    ctx.fillStyle = on_color;
                    ctx.arc(height / 2, height / 2, height / 2, 0, Math.PI*2); //画左边圆
                    ctx.arc(width - height / 2, height / 2, height / 2, 0, Math.PI*2); //画右边圆
                    ctx.fill();
                    ctx.fillRect(height / 2, 0, height, height);  //画正方形
                    // 画上面的动画按钮圆
                    ctx.beginPath();
                    ctx.fillStyle = circle_color;
                    x += 2;
                    ctx.arc(x, height / 2, height / 2 - border, 0, Math.PI*2);
                    if(x == width - height / 2){
                        clearInterval(handle);
                    }
                    ctx.fill();
                },30);
            }
            // 关闭时背景颜色 滑块的位置
            function off(){
                let x = width - height / 2;
                let handle = setInterval(function(){
                    ctx.clearRect(0, 0, width, height); //计时器加载先清空画布
                    ctx.beginPath();
                    ctx.fillStyle = off_color;
                    ctx.arc(height / 2, height / 2, height / 2, 0, Math.PI*2); //画左边圆
                    ctx.arc(width - height / 2, height / 2, height / 2, 0, Math.PI*2); //画右边圆
                    ctx.fill();
                    ctx.fillRect(height / 2, 0, height, height);  //画正方形
                    // 画上面的动画按钮圆
                    ctx.beginPath();
                    ctx.fillStyle = circle_color;
                    x -= 2;
                    ctx.arc(x, height / 2, height / 2 - border, 0, Math.PI*2);
                    if(x == height / 2){
                        clearInterval(handle);
                    }
                    ctx.fill();
                },30);
            
            }

        }
    }
})();

