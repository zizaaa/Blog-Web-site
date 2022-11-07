// scroll effect
const nav = document.getElementById('nav');
const sections = document.querySelector('.sections');
const locator = document.getElementById('locate');

window.addEventListener('scroll', () => {
    if (window.scrollY > sections.offsetTop) {
        sections.classList.add('active');
        nav.classList.add('disable');
    } else {
        sections.classList.remove('active');
        nav.classList.remove('disable');
    }

    if (window.scrollY < locate.offsetTop) {
        sections.classList.remove('active');
        nav.classList.remove('disable');
    }
});

// image slider
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const img = document.querySelectorAll('.recent-img');

nextBtn.addEventListener('click', () => {
    img.forEach(imgs => {
        imgs.style.transform = 'translateX(-1230px)';
    });
});


prevBtn.addEventListener('click', () => {
    img.forEach(imgs => {
        imgs.style.transform = 'translateX(0)';
        console.log('click');
    });
});