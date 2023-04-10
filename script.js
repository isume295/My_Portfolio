/* mobile menu */
const burgerMenu = document.querySelector('.burgerIcon');
const header = document.querySelector('.headerContainer');
const links = document.querySelectorAll('nav  ul  li  a');

let image = burgerMenu.getAttribute('src');
burgerMenu.addEventListener('click', () => {
  if (image === 'image/burgerMenu.svg') {
    burgerMenu.setAttribute('src', 'image/x.svg');
    image = burgerMenu.getAttribute('src');
  } else if (image === 'image/x.svg') {
    burgerMenu.setAttribute('src', 'image/burgerMenu.svg');
    image = burgerMenu.getAttribute('src');
  }
  header.classList.toggle('nav-mobile');
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    if (image === 'image/burgerMenu.svg') {
      burgerMenu.setAttribute('src', 'image/x.svg');
      image = burgerMenu.getAttribute('src');
    } else if (image === 'image/x.svg') {
      burgerMenu.setAttribute('src', 'image/burgerMenu.svg');
      image = burgerMenu.getAttribute('src');
    }
    header.classList.remove('nav-mobile');
  });
});
