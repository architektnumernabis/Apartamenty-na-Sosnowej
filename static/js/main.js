const navMobile = document.querySelector('.nav-mobile-items')
const burgerIcon = document.querySelector('.hamburger')
const navMobileItems = document.querySelectorAll('.nav-mobile-item')
const navbar = document.querySelectorAll('.nav')
const footerYear = document.querySelector('.footer__year')

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

//FUNCTION THAT CHANGES NAVBA COLOR DEPENDING ON WINDOWSCROLLY
const navChangeColor = () => {
    navbar.forEach(item => {
        if (window.scrollY >= 73 && !navMobile.classList.contains('active')) {
            item.classList.add('black')
        } else {
            item.classList.remove('black')
        }
    })
}

document.addEventListener('scroll', navChangeColor)

//FUNCTION THAT DELETES BLACK COLOR ON ACTIVE MOBILE MENU
const mobileRemoveBlack = () => {
    navbar.forEach(item => {
        if (item.classList.contains('black')) {
            item.classList.remove('black')
        } else if (window.scrollY >= 73) {
            item.classList.add('black')
        }
    })
}

burgerIcon.addEventListener('click', mobileRemoveBlack)

//FUNCTION THAT CHANGES FOOTER YEAR
const changeFooterYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year; 
}

changeFooterYear();