const navMobile = document.querySelector('.nav-mobile-items')
const burgerIcon = document.querySelector('.hamburger')

//FUNCTION THAT HANDLES MOBILE NAVIGATION
const handleNav = () => {
    navMobile.classList.toggle('active')
    burgerIcon.classList.toggle('is-active')
}

burgerIcon.addEventListener('click', handleNav)