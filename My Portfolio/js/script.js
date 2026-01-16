/*====== toggle icon navbar =======*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// remove toggle icon and navbar when click navbar link (scroll) //
menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}



/*====== scroll section active link =======*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    let top = window.scrollY;
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector(`header .navbar a[href*='${id}']`).classList.add('active');
      });
    }
  });

  // ===== sticky navbar ===== //
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);
};

window.addEventListener('load', () => {
    document.querySelectorAll('.progress').forEach(progress => {
    progress.classList.add('loaded');
    });
});

//===== typing text animation =====//
const texts = ["Junior Developer!", "Web Developer!", "Frontend Developer!"];
  let textIndex = 0;
  let charIndex = 0;
  const speed = 100;

  function typeText() {
    if (charIndex < texts[textIndex].length) {
      document.getElementById("typing-text").textContent += texts[textIndex].charAt(charIndex);charIndex++;
      setTimeout(typeText, speed);
    } else {
      setTimeout(eraseText, 1500);
    }
  }

  function eraseText() {
    if (charIndex > 0) {
      document.getElementById("typing-text").textContent = texts[textIndex].substring(0, charIndex - 1); charIndex--;
      setTimeout(eraseText, speed / 2);
    } else {
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(typeText, 500);
    }
  }

  typeText();


// ===== scroll reveal ===== //
  ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

// ===== Animate headings ===== //
ScrollReveal().reveal('.sub-heading, .sub-title', {
  origin: 'top',
  distance: '30px',
  duration: 1200,
  easing: 'ease-in-out',
  interval: 150
});

// ====== Animate Technical Skills columns ====== //
ScrollReveal().reveal('.techskills-row .techskills-column', {
  origin: 'bottom',
  distance: '30px',
  duration: 1200,
  easing: 'ease-in-out',
  interval: 150
});

// ===== skills  reveal ===== //
ScrollReveal().reveal('.skill-card', {
  distance: '30px',
  duration: 1200,
  easing: 'ease-in-out',
  origin: 'bottom',
  interval: 150
});

ScrollReveal().reveal('.home-content, .heading, .title, .home-img', { origin: 'top' });

// ====== project reveal boxes ======= //
ScrollReveal().reveal('.project-box', {
  distance: '60px',
  origin: 'bottom',
  duration: 1200,
  interval: 200,
  easing: 'ease-in-out',
  reset: true
});

ScrollReveal().reveal('.about-img', {
  distance: '80px',
  origin: 'left',     
  duration: 1200,
  delay: 200,
  easing: 'ease-in-out',
  reset: true        // animate again when scrolling back //
});





