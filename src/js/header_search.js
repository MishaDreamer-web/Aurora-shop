(() => {
  const searchOpenBtn = document.querySelector('[data-search-open]');
  const searchCloseBtn = document.querySelector('[data-search-close]');
  const search = document.querySelector('[data-search-form]');

  searchOpenBtn.addEventListener('click', openSearch);

  function openSearch() {
    search.classList.add('search-open');
    searchOpenBtn.classList.add('search-close');
    searchCloseBtn.classList.add('search-open');
    window.addEventListener('keydown', onPressEscape);
    searchCloseBtn.addEventListener('click', closeModal);
  }

  function closeModal() {
    search.classList.remove('search-open');
    searchCloseBtn.classList.remove('search-open');
    searchOpenBtn.classList.remove('search-close');
    searchCloseBtn.removeEventListener('click', closeModal);
    window.removeEventListener('keydown', onPressEscape);
  }

  function onPressEscape(event) {
    if (event.code === 'Escape') {
      closeModal();
    }
  }
})();
