document.documentElement.addEventListener('touchmove', (e: TouchEvent) => {
  e.touches.length > 1 && e.preventDefault();
});

document.documentElement.style.fontSize =
  document.documentElement.clientWidth / 3.75 + 'px';
