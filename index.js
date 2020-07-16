function toggleNavbar() {
    const options = document.querySelector('.options')
    options.classList.toggle('options-show')
    const navbar = document.querySelector('.navbar')
    navbar.classList.toggle('navbar-toggled')
}

window.onload = function() {
    document.querySelector('.toggle').addEventListener('click', toggleNavbar)
}

window.onscroll = function() {
    const navbar = document.querySelector('.navbar')
    const alpha = (window.scrollY > 100 ? 1 : window.scrollY / 100);
    console.log(alpha)
    navbar.style.backgroundColor =  'rgba(65, 27, 163, ' + alpha + ')'
    // navbar.classList.toggle('scrolled', window.scrollY > 50);
    console.log(window.scrollY)
};