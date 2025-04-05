import {
    throttle
} from './Utils/index.js'

const InitBurgerMenu = (menuBtn, menu) => {
    let menuOpen = false

    function openMenu(e) {
        if (!menuOpen) {
            // menuBtn.classList.add('open')
            menu.classList.add('shown')
            this.classList.add('close')
            this.addEventListener('click', closeMenu, {
                once: true
            })
            menuOpen = true
        }
    }

    function closeMenu(e) {
        if (menuOpen) {
            menu.classList.remove('shown')
            this.classList.remove('close')
            this.addEventListener('click', openMenu, {
                once: true
            })
            menuOpen = false
        }
    }

    function resizeFunc() {
        if (this.innerWidth > 1200 && menuOpen) {
            closeMenu.call(menuBtn)
        }
    }


    menuBtn.addEventListener('click', openMenu, {once: true})
    // menuBtn.addEventListener('click', closeMenu)
    resizeFunc = throttle(resizeFunc, 150)
    window.addEventListener('resize', resizeFunc)
}


export {
    InitBurgerMenu
}