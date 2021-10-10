let elSiteNav = document.querySelector('.nav');
let elOpenBtn = document.querySelector('.menu-icon__btn');

elOpenBtn.addEventListener('click', () => {
  elSiteNav.classList.toggle('show');
})