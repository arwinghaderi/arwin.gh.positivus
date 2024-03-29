let hamburgerBox = document.querySelector('.hamburger-box ')
let menuMobail = document.querySelector(".menu-mobail")
let accordionContentIconBox = document.querySelectorAll('.accordion__content__icon-box')
let accordionBox = document.querySelectorAll('.accordion-box')
let accordionBoxContainerHead = document.querySelectorAll('.accordion-box__container-head')

let minus = '<svg width="15" height="6" viewBox="0 0 18 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 6.14V0.5H17.76V6.14H0Z" fill="black"/></svg>'
let plus = '<svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.6 25.58V15.86H0V10.22H9.6V0.5H15.48V10.22H25.08V15.86H15.48V25.58H9.6Z" fill="#191A23"/></svg>'
hamburgerBox.addEventListener("click", function () {
    hamburgerBox.classList.toggle('hamburger-box--active')
    menuMobail.classList.toggle("menu-mobail--active")
})
accordionBox.forEach(items => {
    items.addEventListener('click', function () {
        items.classList.toggle('accordion-box--active')


    })


})

accordionBoxContainerHead.forEach(accor => {

    accor.addEventListener("click", function () {
        var content = accor.nextElementSibling;

        if (content.style.display === "block") {
            content.style.display = "none";
            accordionContentIconBox.forEach(accordionContentIconBoxs => {
                accordionContentIconBoxs.innerHTML = plus
            })

        }
        else {
            content.style.display = "block"
            accordionContentIconBox.forEach(accordionContentIconBoxs => {

                accordionContentIconBoxs.innerHTML = minus


            })



        }


    })
})
let menuListItem = document.querySelectorAll('.menu__list-item')

menuListItem.forEach(menuListItems => {

    menuListItems.addEventListener("click", function (e) {

        e.preventDefault()
        document.querySelector('.menu__list-item--active').classList.remove('menu__list-item--active')
        menuListItems.classList.add('menu__list-item--active')


        let attributDesktop = menuListItems.getAttribute('data-id-name')
        let offset = document.querySelector(`${attributDesktop}`).offsetTop


        window.scrollTo({
            top: offset -10,
            behavior: "smooth"
        })
    })
})


let  menuListItemMobail = document.querySelectorAll('.menu__list-item-mobail')

menuListItemMobail.forEach(menuListItemMobails => {

    menuListItemMobails.addEventListener("click", function (e) {

        e.preventDefault()
        document.querySelector('.menu__list-item-mobail--active').classList.remove('menu__list-item-mobail--active')
        menuListItemMobails.classList.add('menu__list-item-mobail--active')


        let attributDesktop = menuListItemMobails.getAttribute('data-id-name')
        let offset = document.querySelector(`${attributDesktop}`).offsetTop


        window.scrollTo({
            top: offset -10 ,
            behavior: "smooth"
        })
    })
})


let  footerMenuListItem = document.querySelectorAll('.footer-menu__list-item')

footerMenuListItem.forEach(footerMenuListItems => {

    footerMenuListItems.addEventListener("click", function (e) {

        e.preventDefault()
        document.querySelector('.footer-menu__list-item--active').classList.remove('footer-menu__list-item--active')
        footerMenuListItems.classList.add('footer-menu__list-item--active')


        let attributDesktop = footerMenuListItems.getAttribute('data-id-name')
        let offset = document.querySelector(`${attributDesktop}`).offsetTop


        window.scrollTo({
            top: offset -10 ,
            behavior: "smooth"
        })
    })
})


