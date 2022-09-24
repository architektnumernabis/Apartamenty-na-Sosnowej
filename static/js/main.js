const navMobile = document.querySelector('.nav-mobile-items')
const burgerIcon = document.querySelector('.hamburger')
const hamburgerInner = document.querySelector('.hamburger-inner')
const navMobileItems = document.querySelectorAll('.nav-mobile-item')
const navbar = document.querySelectorAll('.nav-desktop')
const footerYear = document.querySelector('.footer__year')
const navDesktopImg = document.querySelector('.logo-desktop')
const navMobileImg = document.querySelector('.logo-mobile')
const allSectionsOnPage = document.querySelectorAll('.section')

//FUNCTION THAT HANDLES MOBILE NAVIGATION
const handleNav = () => {
    navMobile.classList.toggle('active')
    burgerIcon.classList.toggle('is-active')
    navMobileImg.classList.toggle('invisible')
    document.body.classList.toggle('body-no-scroll')

    navMobileItems.forEach(item => {
        item.addEventListener('click', () => {
            navMobile.classList.remove('active')
            burgerIcon.classList.remove('is-active')
            navMobileImg.classList.add('invisible')
            document.body.classList.remove('body-no-scroll')
        })
    })
}

burgerIcon.addEventListener('click', handleNav)

//FUNCTION THAT CHANGES NAVBAR COLOR DEPENDING ON WINDOWSCROLLY
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

//FUNCTION THAT SHOWS NAVBAR LOGO DEPENDING ON WINDOWSCROLLY
const navShowLogo = () => {
    if (window.scrollY >= 77) {
        navDesktopImg.classList.remove('invisible')
    } else {
        navDesktopImg.classList.add('invisible')
    }
}

document.addEventListener('scroll', navShowLogo)

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

//FUNCTION THAT CHANGES BURGER BTN COLOR
const observer = () => {
    const currentSection = window.scrollY

    allSectionsOnPage.forEach(section => {
        if(section.classList.contains('white-section') && section.offsetTop <= currentSection + 58.5) {
            hamburgerInner.classList.add('hamburger-black')
        } else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 58.5) {
            hamburgerInner.classList.remove('hamburger-black')
        }
    })
}

window.addEventListener('scroll', observer)