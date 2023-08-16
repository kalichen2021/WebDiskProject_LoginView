import $ from "jquery";
import SmartFunc from'./SmartFunc.js'

// 页面宽高
const PageWidth = $(document).width()
const PageHeight = $(document).height()
var deltaX, deltaY


// 鼠标移动动画
$(document).mousemove(function (e) {
  // values: e.clientX, e.clientY, e.pageX, e.pageY
  // 鼠标坐标与页面中心的偏移量 （[-1,1]）
  deltaX = (e.clientX / PageWidth - 0.5) * 2
  deltaY = (e.clientY / PageHeight - 0.5) * 2

  let f = new SmartFunc()
  f.init([-1, 1], [-0.05, 0.05]) //参数1：自变量范围 参数2：因变量范围
  $('.card').css(
    'transform',
    `rotateY(${f.func(deltaX) + 'turn'}) 
    rotateX(${f.func(deltaY) * -3 + 'turn'})`
  );
});
