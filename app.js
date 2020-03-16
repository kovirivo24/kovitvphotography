const navSlide = () => {
    const navmenu = document.querySelector('.navmenu');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

navmenu.addEventListener('click',() => {
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/5+0.5}s`;
        }
    });
    navmenu.classList.toggle('toggle');
});
}

navSlide();

