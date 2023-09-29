const myName = document.querySelector('.my-name');
  myName.innerText = '< RT / >';

  //********/
let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

toggle.addEventListener('click', function (){
    body.classList.toggle('open');
})

const allLink = document.querySelectorAll('.item-nav');
allLink.forEach(item => {
    item.addEventListener('click', () => {
        body.classList.toggle('open');
    })
})

//********/

document.addEventListener('DOMContentLoaded', function() {
    const navigationLinks = document.querySelectorAll('.menu a');
  
    navigationLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
  
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        }
      });
    });
  });
  
  // Animation de la page d'accueil
  const header = document.querySelector('header');

  const h1 = document.getElementById('titre-anime');
  const listeUl = document.querySelectorAll('.menu ul li');
  const downIcon = document.querySelectorAll('.bulle');
  const logoJs = document.querySelector('.row-skill .js');
  const logoHtml = document.querySelector('.row-skill .html');
  const logosCss = document.querySelector('.row-skill .css');
  const logoBootstrap = document.querySelector('.row-skill .bootstrap');

  window.addEventListener('load', () => {
    const TL = gsap.timeline({paused: true});
    TL
    .staggerFrom(header, 1, {top: -50, opacity:0, ease: "power2.out"},0.3)
    .staggerFrom(h1, 1, {top: -50, opacity:0, ease: "power2.out"},0.3)
    .staggerFrom(listeUl, 1, {top: -50, opacity:0, ease: "power2.out"},0.3)
    .staggerFrom(logoJs, 1, {top: -500, ease: "power2.out"},0.4, '-=1')
    .staggerFrom(logoHtml, 1.5, {top: -500, ease: "power2.out"},0.4, '-=1')
    .staggerFrom(logosCss, 2, {top: -700, ease: "power2.out"},0.4, '-=1')
    .staggerFrom(logoBootstrap, 1, {top: -700, ease: "power2.out"},0.4, '-=1')
    .staggerFrom(downIcon, 1, {left: -100, top:-700, ease: "power2.out"},0.3, '-=1')
    TL.play();
})