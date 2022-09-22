window.addEventListener('scroll', headerScroll);

const header = document.querySelector('.header__container');
const fixedPosition = header.offsetTop;

function headerScroll() {
  if (window.innerWidth >= 768) {
    if (window.scrollY > 24) {
      header.classList.add('header--fixed');
    } else {
      header.classList.remove('header--fixed');
    }
  } else {
    if (window.scrollY > fixedPosition) {
      header.classList.add('header--fixed');
    } else {
      header.classList.remove('header--fixed');
    }
  }
}
