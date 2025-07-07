
		// 获取元素
		var link = document.querySelector('#loginA');
		var login = document.querySelector(".login");
		var bg = document.querySelector(".bg");
		var closeBtn = document.querySelector("#close");
		var title = document.querySelector(".title");
		// 点击注册/登录，显示遮盖层bg、登录窗口login
		link.addEventListener("click", function () {
			bg.style.display = 'block';
			login.style.display = 'block';
		})
		// 关闭登录框  隐藏遮盖层bg 、登录窗口login
		closeBtn.addEventListener("click", function () {
			bg.style.display = 'none';
			login.style.display = 'none';
		})
		//鼠标拖拽功能
		// (1) 当我们鼠标按下， 就获得鼠标在盒子内的坐标
		login.addEventListener("mousedown", function (e) {
			var x = e.pageX - login.offsetLeft;
			var y = e.pageY - login.offsetTop;
 
			//计算鼠标移动时 登陆框需要移动的距离
			document.addEventListener("mousemove", move)
 
			function move(e) {
				login.style.left = e.pageX - x + "px";
				login.style.top = e.pageY - y + "px";
			}
 
			//清除 mousemove移动事件
			document.addEventListener("mouseup", function () {
				document.removeEventListener("mousemove", move)
			})
		})
        // 设置随机数整数落在1000~9999 保证验证码为四位数
		var random = Math.floor(Math.random()*10000)+1000;
		if(random>10000){
			random = random%10000;
		}
		if(random<1000){
			random = random+1000;
		}
		// 获取元素标签并给验证码赋值
		var provement = document.getElementById("provement");
		var btn = document.querySelector("button");
		var prove = provement.innerText;
		provement.innerText = random;

		btn.onclick=function(){
    
		var text = document.getElementById("inputs");
		var inputs = text.value;
		// 注意此处的inputs获取内数据是通过.value来获取内部数据
		var prove = provement.innerText;
		
		if(prove == inputs){
			alert("您输入验证码正确");
		}
		else{
			alert("您输入验证码错误");
		}
		var random = Math.floor(Math.random()*10000)+1000;
		if(random>10000){
			random = random%10000;
		}
		if(random<1000){
			random = random+1000;
		}
		provement.innerText = random;
		
		}	
 