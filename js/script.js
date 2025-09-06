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

// skill reveal effect
ScrollReveal().reveal('.progress', {
  distance: '80px',
  origin: 'left',
  duration: 1200,
  delay: 200,
  easing: 'ease-in-out',
  reset: true,
  afterReveal: (el) => {
    // Animate bar
    const skillLevel = el.querySelector('.skill-level');
    const percent = el.style.getPropertyValue('--skill-width');
    if (skillLevel) {
      setTimeout(() => {
        skillLevel.style.width = percent;
      }, 300);
    }

    // Animate number count
    const span = el.querySelector('.skill-percent');
    if (span) {
      const target = parseInt(percent); // e.g., 60
      let current = 0;
      const interval = setInterval(() => {
        if (current >= target) {
          clearInterval(interval);
        } else {
          current++;
          span.textContent = current + "%";
        }
      }, 30); // speed (20ms per step → ~1.2s for 60%)
    }
  },
  beforeReset: (el) => {
    // Reset bar
    const skillLevel = el.querySelector('.skill-level');
    if (skillLevel) {
      skillLevel.style.width = "0%";
    }

    // Reset number
    const span = el.querySelector('.skill-percent');
    if (span) {
      span.textContent = "0%";
    }
  }
});


// ===== scroll reveal ===== //
  ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .title, .home-img', { origin: 'top' });

// project reveal boxes //
ScrollReveal().reveal('.project-box', {
  distance: '60px',
  origin: 'bottom',
  duration: 1200,
  interval: 200,   // stagger animation (each project delays by 200ms)
  easing: 'ease-in-out',
  reset: true      // animate again when scrolling back
});

ScrollReveal().reveal('.about-img', {
  distance: '80px',
  origin: 'left',     // 👈 slide in from top
  duration: 1200,
  delay: 200,
  easing: 'ease-in-out',
  reset: true        // animate again when scrolling back
});
