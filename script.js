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
    demo: 'https://isume295.github.io/My_Portfolio/',
    sourceCode: 'https://github.com/isume295/My_Portfolio',
  },
  {
    name: 'Multi-Post Stories',
    subHeading: 'CANOPY',
    image: 'image/work2.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'css', 'ruby', 'javaScript'],
    detail: ['Full Stack Dev', '2015'],
    demo: 'https://isume295.github.io/My_Portfolio/',
    sourceCode: 'https://github.com/isume295/My_Portfolio',
  },
  {
    name: 'Facebook 360',
    subHeading: 'CANOPY',
    image: 'image/work3.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'css', 'ruby', 'javaScript'],
    detail: ['Back End Dev', '2015'],
    demo: 'https://isume295.github.io/My_Portfolio/',
    sourceCode: 'https://github.com/isume295/My_Portfolio',
  },
  {
    name: 'Uber Navigation',
    subHeading: 'CANOPY',
    image: 'image/work4.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'css', 'ruby', 'javaScript'],
    detail: ['Back End Dev', '2015'],
    demo: 'https://isume295.github.io/My_Portfolio/',
    sourceCode: 'https://github.com/isume295/My_Portfolio',
  },
];

const workPage = document.getElementById('works');
const div = document.createElement('div');
div.className = 'worksGridContainer';
workPage.appendChild(div);

div.innerHTML = projects.reduce((output, project) => (
  `${output
  }
  
<div class="worksFlexContainer">
<div class="workImgContainer">
 <img class="workImg" src=${project.image} alt="project 1">
</div>
<div class="workDetailContainer">
 <h3 id="h" class="projecTitle txtWrapper">${project.name}</h3>
 <div class="canopyContainer">
 <h4>${project.subHeading}</h4>
 <ol class="projectOrderedList">
  <li>${project.detail[0]}</li>
  <li>${project.detail[1]}</li>
 </ol>
 </div>
 <p class="projectDetail txtWrapper">A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
 <ul class="projectUnorderdList">
  <li>${project.technologies[0]}</li>
  <li class="mobileNone">${project.technologies[1]}</li>
  <li>${project.technologies[2]}</li>
  <li>${project.technologies[3]}</li>
 </ul>
 <div class="btnWrapper">
 <button class="btn-project project1">See Project</button>
</div>
</div>
</div>
`
), '');

const reverse = document.querySelectorAll('.worksFlexContainer');
reverse.forEach((rev, index) => {
  if (index % 2 !== 0) {
    rev.classList.toggle('flexReverse');
  }
});

const modalPage = document.getElementById('modal');
const modalDiv = document.createElement('div');
modalDiv.className = 'modal-main-container';
modalPage.appendChild(modalDiv);
const seeProjectBtn = document.querySelectorAll('.project1');
const modal = document.querySelector('.modal-main-container');

seeProjectBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    modalDiv.innerHTML = `
    
    <div class="modal-container">
    <div class="close-btn">
      <h3 class="projecTitle">${projects[index].name}</h3>
      <img src="image/close.svg" alt=""> 
    </div>
    <div class="modal-heading canopyContainer">
      <h4>${projects[index].subHeading}</h4>
      <ol class="projectOrderedList">
       <li>${projects[index].detail[0]}</li>
       <li>${projects[index].detail[1]}</li>
      </ol>
    </div>
    <div class="modal-img">
      <img src=${projects[index].image} alt="">
    </div>
    <div>
    <div class="modal-detail">
    <p class="projectDetail txt-width">${projects[index].description}</p>
     
    <div class="modal-btn-container">
      <ul class="projectUnorderdList">
        <li>${projects[index].technologies[0]}</li>
        <li class="mobileNone">${projects[index].technologies[1]}</li>
        <li>${projects[index].technologies[2]}</li>
        <li>${projects[index].technologies[3]}</li>
      </ul>
      <div class="btn">
        <div class="btnWrapper modal-btn">
          <button class="btn-project"><a class="live project-link" href="">See live</a><img src="image/live.svg" alt=""></button>
          <button class="btn-project"><a class="source project-link" href="">See source</a><img src="image/source.svg" alt=""></button>
         </div>
      </div>
    </div>
    

  </div>
     
    `;

    modal.classList.toggle('active');
    const modalCloseBtn = document.querySelector('.modal-main-container .close-btn img');
    modalCloseBtn.addEventListener('click', () => {
      modal.classList.toggle('active');
    });
  });
});

const form = document.querySelector('form');
const email = document.querySelector('#email');
const emailError = document.querySelector('.error');

if (form) {
  form.addEventListener('submit', (event) => {

    const validEmail = email.value.toLowerCase();
    emailError.textContent = '';
    if (email.value !== validEmail) {
      event.preventDefault();
      const message = document.createTextNode('Email Must be lowercase');
      emailError.appendChild(message);
      emailError.style.color = 'red';
      return false;
    }
    return true;
  });
}
