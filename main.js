const navIconEl = document.querySelector('.nav__icon');
const navCloseEl = document.querySelector('.nav__close');
const navList = document.querySelector('.nav__list');

const navOpen = () => {
    navList.classList.add('show');
    document.body.style='visibility: visible; height: 100vh; width: 100vw; overflow: hidden;';
}

const navClose = () => {
    navList.classList.remove('show');
    document.body.style='visibility: visible; height: initial; width: 100%; ';
}

navIconEl.addEventListener('click', navOpen);
navCloseEl.addEventListener('click', navClose);

// aos animation //
AOS.init({
    offset: 200,
    delay: 100,
    duration: 400,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',
})


// product page //

