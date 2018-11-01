//不要去添加window.onload 因为我们不需要元素都加载完在执行，这样有可能带来屏幕闪动的现象
// 获取html这个标签
var oHtml = document.documentElement;
//页面上来就执行一次
getSize();
// 将动态改变html的font-size封装一下
function getSize(){
	// 获取这个屏幕的宽度
	var screenWidth = oHtml.clientWidth;
	if(screenWidth >= 640){
		oHtml.style.fontSize = '80px';
	}else if(screenWidth <= 320){
		oHtml.style.fontSize = '40px';
	}else{
		oHtml.style.fontSize = screenWidth/320*40 + 'px';
	}
}
// 当浏览器发生窗口改变就会被触发的事件
window.onresize = function(){
	// 重新调用
	getSize();
}

