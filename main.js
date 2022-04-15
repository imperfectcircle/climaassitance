/* eslint-disable no-undef */

// * Transparent navbar

const navbar = document.querySelector('#navbar');

if (window.matchMedia('(min-width: 768px)').matches) {
    document.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        if (scrolled > 150) {
            navbar.classList.remove('bg-transparent');
            navbar.classList.add('bg-gamma');
            navbar.classList.add('box-shadow-90deg');
        } else {
            navbar.classList.remove('bg-gamma');
            navbar.classList.remove('box-shadow-90deg');

            navbar.classList.add('bg-transparent');
        }
    });
} else {
    navbar.classList.add('bg-gamma');
    navbar.classList.add('box-shadow-90deg');
}

// * Active link on scroll

const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul li.nav-item');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 300) {
            current = section.getAttribute('id');
        }
    });
    navLi.forEach((li) => {
        li.classList.remove('active-custom');
        if (li.classList.contains(current)) {
            li.classList.add('active-custom');
        }
    });
});
