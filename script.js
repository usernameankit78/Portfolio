const navLink = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const menuIcon = document.querySelector('#menu-icon');
const navBar = document.querySelector('header nav');
const barsBox = document.querySelector('.bars-box');
const header = document.querySelector('header');
const sections = document.querySelectorAll('section'); 

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x')
    navBar.classList.toggle('active')
});


const activePage = () => {
    header.classList.remove('active');
    void header.offsetWidth;
    setTimeout(() => {
        header.classList.add('active');
    }, 50);

    navLink.forEach(link => {
        link.classList.remove('active');
    });

    barsBox.classList.remove('active');
    void barsBox.offsetWidth;
    setTimeout(() => {
        barsBox.classList.add('active');
    }, 50);

    sections.forEach(section => {
        section.classList.remove('active');
    });

    menuIcon.classList.remove('bx-x')
    navBar.classList.remove('active')
};


navLink.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();
            link.classList.add('active');
            if (sections[idx]) {
                setTimeout(() => {
                    sections[idx].classList.add('active');
                }, 1100);
            }
        }
    });
});


logoLink.addEventListener('click', () => {
    if (!navLink[0].classList.contains('active')) {
        activePage();
        navLink[0].classList.add('active');
        if (sections[0]) {
            setTimeout(() => {
                sections[0].classList.add('active');
            }, 1100);
        }
    }
});


const resumeBtn = document.querySelectorAll('.resume-btn');
resumeBtn.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail'); 

        resumeBtn.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');

        resumeDetails.forEach(details => details.classList.remove('active'));
        resumeDetails[idx].classList.add('active');
    });
});


const arrowRight = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');
const imgSlide = document.querySelector('.portfolio-carousel .imgslide');
const portfolioDetails = document.querySelectorAll('.portfolio-details');


let index = 0;
const slides = document.querySelectorAll('.portfolio-carousel .imgslide img');
const totalSlides = slides.length;


const activePortfolio = () => {
    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portfolioDetails.forEach((details, i) => {
        details.classList.toggle('active', i === index);
    });
    arrowLeft.classList.toggle('disabled', index === 0);
    arrowRight.classList.toggle('disabled', index === totalSlides - 1);
};


arrowRight.addEventListener('click', () => {
    if (index < totalSlides - 1) {
        index++;
        activePortfolio();
    }
});


arrowLeft.addEventListener('click', () => {
    if (index > 0) {
        index--;
        activePortfolio();
    }
});
activePortfolio();
