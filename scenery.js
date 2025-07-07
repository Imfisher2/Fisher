
var arr = document.querySelectorAll(".box>div");
for(var n = 0;n<arr.length;n++){
    for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){
            var divs = document.createElement("div");
            divs.style.cssText = "width:100px;height:100px;border: 1px solid #fff;position:absolute;box-sizing:border-box;background-image:url(images/黄果树瀑布"+n+".jpg);background-size: 300px 300px;";
            arr[n].appendChild(divs);

            // 改变每一个div的位置
            divs.style.left = 100*j+"px";
            divs.style.top = 100*i+"px";

            // 改变背景图相应的位置
            divs.style.backgroundPositionX = -j*100+"px";
            divs.style.backgroundPositionY = -i*100+"px";		
        }
    }
}

var number=1;
        function fun(){
            number++;
            if(number>4) number=1;
            //获取img对象
            var img = document.getElementById("img");
            img.src = "images/马岭河大峡谷"+number+".jpg";
        }
        // 定义定时器
        setInterval(fun,3000);