const navMenu = document.querySelectorAll('.nav__item');

const handleClick = event => {
  event.currentTarget.classList.toggle('submenu--open');
};

navMenu.forEach(el => el.addEventListener('click', handleClick));
