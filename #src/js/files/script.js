"use strict"

// scrollTop шапка
let el = document.querySelector('.header');

window.addEventListener('scroll', toggleClassOnScroll.bind(el, 150));

function toggleClassOnScroll(pxAmount) {
  let scrollTop = document.body.scrollTop;

  if(scrollTop > 100) {
    this.classList.add('_scroll');
  } else {
    this.classList.remove('_scroll');
  }
}
