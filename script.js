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

const projects = [
  {
    name: 'Tonix',
    subHeading: 'CANOPY',
    image: 'image/work1.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'css', 'ruby', 'javaScript'],
    detail: ['Back End Dev', '2015'],
    demo: 'live demo',
    sourceCode: 'code',
  },
  {
    name: 'Multi-Post Stories',
    subHeading: 'CANOPY',
    image: 'image/work2.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'css', 'ruby', 'javaScript'],
    detail: ['Full Stack Dev', '2015'],
    demo: 'link',
    sourceCode: 'link',
  },
  {
    name: 'Facebook 360',
    subHeading: 'CANOPY',
    image: 'image/work3.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'css', 'ruby', 'javaScript'],
    detail: ['Back End Dev', '2015'],
    demo: 'link',
    sourceCode: 'link',
  },
  {
    name: 'Uber Navigation',
    subHeading: 'CANOPY',
    image: 'image/work4.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'css', 'ruby', 'javaScript'],
    detail: ['Back End Dev', '2015'],
    demo: 'link',
    sourceCode: 'link',
  },
];

const projectImage = document.querySelectorAll('.workImgContainer img');
const h3 = document.querySelectorAll('.workDetailContainer h3');
const h4 = document.querySelectorAll('.canopyContainer h4');
const technologyList = document.querySelectorAll('.projectUnorderdList li');
const devType = document.querySelectorAll('.projectOrderedList li');

let i = -1;
let j = -1;
projects.forEach((project, index) => {
  const heading = document.createTextNode(project.name);
  const subHeading = document.createTextNode(project.subHeading);
  h3[index].appendChild(heading);
  h4[index].appendChild(subHeading);
  projectImage[index].setAttribute('src', project.image);
  project.technologies.forEach((tech) => {
    const technologies = document.createTextNode(tech);
    technologyList[i += 1].appendChild(technologies);
  });
  project.detail.forEach((type) => {
    const typeList = document.createTextNode(type);
    devType[j += 1].appendChild(typeList);
  });
});
