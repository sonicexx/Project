// rem 设置根节点 375 标准化字体大小 100px = 1rem
document.documentElement.style.fontSize =
  document.documentElement.clientWidth / 3.75 + 'px';

// 当用户多指操作时禁用默认事件
document.documentElement.addEventListener(
  'touchmove',
  e => {
    if (e.touches.length > 1) {
      e.preventDefault();
    }
  },
  false
);
