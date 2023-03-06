// 捕获用户双击
import FastClick from '../../../素材/src/assets/js/fastclick';
window.addEventListener('load', function () {
  FastClick.attach(document.body); // FastClick 初始化
});

// 浏览器默认的长按默认事件禁止
document.documentElement.addEventListener('touchmove', e => {
  e.touches.length > 1 && e.preventDefault();
});

// rem
document.documentElement.style.fontSize =
  document.documentElement.clientWidth / 3.75 + 'px';
// .16 rem === 16 px
