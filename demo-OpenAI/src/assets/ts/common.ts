document.documentElement.style.fontSize =
  document.documentElement.clientWidth / 3.75 + 'px';

window.addEventListener('touchmove', e => {
  if (e.targetTouches.length > 1) {
    e.preventDefault();
  }
});
