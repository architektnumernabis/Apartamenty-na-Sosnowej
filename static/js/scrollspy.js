const allSections = document.querySelectorAll('.section')
const navMobileItemsForScrollSpy = document.querySelectorAll('.mobile-item')
const navItemsForScrollSpy = document.querySelectorAll('.nav-item')

//FUNCTION THAT CHANGES COLOR OF NAV ITEM DEPENDING ON WHICH SECTION YOU ARE AT

window.onscroll = () => {

    allSections.forEach(section => {
        let top = window.scrollY
        let sectionOffsetTop = section.offsetTop
        let sectionHeight = section.offsetHeight
        let sectionId = section.getAttribute('id')
        let currentWidth = window.innerWidth
        //63.5 IS THE HEIGHT OF NAVIGATION

        if (currentWidth >= 992 && top >= sectionOffsetTop - 63.5 && top < sectionOffsetTop + sectionHeight - 63.5) {
            navItemsForScrollSpy.forEach(item => {
                item.classList.remove('nav-active')
                document.querySelector('.nav-item[href*=' + sectionId + ']').classList.add('nav-active')
            })
        } else if (top >= sectionOffsetTop - 63.5 && top < sectionOffsetTop + sectionHeight - 63.5) {
            navMobileItemsForScrollSpy.forEach(item => {
                item.classList.remove('nav-active')
                document.querySelector('.nav-mobile-item[href*=' + sectionId + ']').classList.add('nav-active')
            })
        }
    })
}