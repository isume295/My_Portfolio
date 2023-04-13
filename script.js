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
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'css', 'ruby', 'javaScript'],
    detail: ['Full Stack Dev', '2015'],
    demo: 'https://isume295.github.io/My_Portfolio/',
    sourceCode: 'https://github.com/isume295/My_Portfolio',
  },
  {
    name: 'Facebook 360',
    subHeading: 'CANOPY',
    image: 'image/work3.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
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
      <p class="projectDetail">${projects[index].description}</p>
     
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

// const projectImage = document.querySelectorAll('.workImgContainer img');
// const h3 = document.querySelectorAll('.workDetailContainer h3');
// const h4 = document.querySelectorAll('.canopyContainer h4');
// const technologyList = document.querySelectorAll('.projectUnorderdList li');
// const devType = document.querySelectorAll('.projectOrderedList li');
// const seeProjectBtn = document.querySelectorAll('.project1');
// const modal = document.querySelector('.modal-main-container');

// let i = -1;
// let j = -1;
// projects.forEach((project, index) => {
//   const heading = document.createTextNode(project.name);
//   const subHeading = document.createTextNode(project.subHeading);
//   h3[index].appendChild(heading);
//   h4[index].appendChild(subHeading);
//   projectImage[index].setAttribute('src', project.image);
//   project.technologies.forEach((tech) => {
//     const technologies = document.createTextNode(tech);
//     technologyList[i += 1].appendChild(technologies);
//   });
//   project.detail.forEach((type) => {
//     const typeList = document.createTextNode(type);
//     devType[j += 1].appendChild(typeList);
//   });
// });

// const modalH3 = document.querySelector('.modal-container h3');
// const modalH4 = document.querySelector('.modal-container h4');
// const modalTechType = document.querySelectorAll('.modal-container .projectOrderedList li');
// const modalImage = document.querySelector('.modal-container img');
// const modalDetails = document.querySelector('.modal-container p');
// const modalTechList = document.querySelectorAll('.modal-container .projectUnorderdList li');
// const modalLivebtn = document.querySelector('.modal-container .live');
// const modalSourceCodebtn = document.querySelector('.modal-container .live');
// const modalCloseBtn = document.querySelector('.modal-main-container .close-btn img');
// console.log(modalCloseBtn);

// seeProjectBtn.forEach((btn, index) => {
//   btn.addEventListener('click', () => {
//     const heading = document.createTextNode(projects[index].name);
//     const subHeading = document.createTextNode(projects[index].subHeading);
//     const details = document.createTextNode(projects[index].description);

//     modalH3.appendChild(heading);
//     modalH4.appendChild(subHeading);
//     modalImage.setAttribute('src', projects[index].image);
//     modalDetails.appendChild(details);
//     modalSourceCodebtn.setAttribute('href', projects[index].sourceCode);
//     modalLivebtn.setAttribute('href', projects[index].demo);

//     projects[index].detail.forEach((type, index) => {
//       const devType = document.createTextNode(type);
//       modalTechType[index].appendChild(devType);
//     });

//     projects[index].technologies.forEach((tech, index) => {
//       const technologies = document.createTextNode(tech);
//       modalTechList[index].appendChild(technologies);
//     });

//     modal.classList.toggle('active');

//     modalCloseBtn.addEventListener('click', () => {
//       modal.classList.toggle('active');
//       modalH3.removeChild(heading);
//       modalH4.removeChild(subHeading);
//       modalImage.setAttribute('src', '');
//       modalDetails.removeChild(details);
//       modalSourceCodebtn.setAttribute('href', '');
//       modalLivebtn.setAttribute('href', '');

//       projects[index].technologies.forEach((tech, index) => {
//         const technologies = document.createTextNode(tech);
//         modalTechList[index].remove(technologies);
//       });

//     });
//   });
// });
