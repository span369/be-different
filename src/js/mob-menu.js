import '../css/main.min.css'
(() => {
  const menuBtn = document.querySelector('.mob-menu-open-btn');
  const closeMenuBtn = document.querySelector('.mob-menu-close-btn');
  const menu = document.querySelector('.mob-menu-box');


  let backdrop = document.querySelector('.mob-menu-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.classList.add('mob-menu-backdrop');
    document.body.appendChild(backdrop);
  }

  const openMenu = () => {
    menu.classList.add('is-open');
    backdrop.classList.add('is-visible');
  };

  const closeMenu = () => {
    menu.classList.remove('is-open');
    backdrop.classList.remove('is-visible');
  };

  menuBtn.addEventListener('click', openMenu);
  closeMenuBtn.addEventListener('click', closeMenu);
  backdrop.addEventListener('click', closeMenu);

  window.addEventListener('resize', () => {
    if (window.innerWidth > 767) closeMenu();
  });
})();
