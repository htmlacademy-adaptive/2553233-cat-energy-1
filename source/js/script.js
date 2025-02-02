const nojs = document.querySelector('.no-js').classList.remove('no-js');

const burger = document.querySelector('[data-burger]');
burger.addEventListener('click', () => {
  burger.parentNode.classList.toggle('main-nav--opened')
})
