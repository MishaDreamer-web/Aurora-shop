(() => {
  const searchOpenBtn = document.querySelector('[data-search-open]');
  const searchCloseBtn = document.querySelector('[data-search-close]');
  const search = document.querySelector('.search-form');

  searchOpenBtn.addEventListener('click', openSearch);

  function openSearch() {
    search.classList.remove('search-close');
    searchOpenBtn.classList.add('search-close');
    searchCloseBtn.classList.remove('search-close');
    window.addEventListener('keydown', onPressEscape);
    searchCloseBtn.addEventListener('click', closeModal);
  }

  function closeModal() {
    searchCloseBtn.removeEventListener('click', closeModal);
    search.classList.add('search-close');
    searchCloseBtn.classList.add('search-close');
    searchOpenBtn.classList.remove('search-close');
    window.removeEventListener('keydown', onPressEscape);
  }

  function onPressEscape(event) {
    if (event.code === 'Escape') {
      closeModal();
    }
  }
})();
