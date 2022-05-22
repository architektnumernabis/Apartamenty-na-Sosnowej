const navMobile = document.querySelector('.nav-mobile-items')
const burgerIcon = document.querySelector('.hamburger')
const navMobileItems = document.querySelectorAll('.nav-mobile-item')

//FUNCTION THAT HANDLES MOBILE NAVIGATION
const handleNav = () => {
    navMobile.classList.toggle('active')
    burgerIcon.classList.toggle('is-active')

    navMobileItems.forEach(item => {
        item.addEventListener('click', () => {
            navMobile.classList.remove('active')
            burgerIcon.classList.remove('is-active')
        })
    })
}

burgerIcon.addEventListener('click', handleNav)