const myName = document.querySelector('.my-name');
  myName.innerText = '< RT / >';

const down = document.querySelector(".down");  
  down.innerText = "SCROLE DOWN ---->";

  //********/
let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');
let listeNav = document.querySelector('ul')

toggle.addEventListener('click', function (){
    body.classList.toggle('open');
    listeNav.classList.toggle('ulRotate');
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
  