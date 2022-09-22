window.addEventListener('resize', heroTitleShow);

const heroTitle = document.querySelector('.hero__title');

function heroTitleShow() {
  if (window.innerWidth >= 768) {
    heroTitle.classList.remove('visually-hidden');
  } else {
    heroTitle.classList.add('visually-hidden');
  }
}
heroTitleShow();
