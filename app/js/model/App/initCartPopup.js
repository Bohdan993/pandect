import {
    tippy
} from "../../../libs/libs.js"

const InitCartPopup = (el, template) => {

    template.style.display = 'block'
    let backdrop

    let instance = tippy(el, {
        content: template,
        arrow: false,
        allowHTML: true,
        interactive: true,
        interactiveBorder: 5,
        interactiveDebounce: 0,
        placement: 'bottom-end',
        maxWidth: 475,
        // getReferenceClientRect: () => ({
        //     width: 100,
        //     height: 100,
        //     left: document.clientWidth/2,
        //     right: document.clientWidth/2,
        //     top: document.clientHeight/2,
        //     botom: document.clientHeight/2,
        // }),
        offset: [0, 20],
        hideOnClick: true,
        trigger: 'click',
        // popperOptions: {
        //     strategy: 'fixed'
        // },
        appendTo: () => document.body,
        onCreate(instance) {
            instance.popper.classList.add('header__cart-tippy')
            // const closePopup = instance.popper.querySelector('.cart-popup__close')
            // closePopup.addEventListener('click', onClick)

            // function onClick(e) {
            //     instance.hide()
            // }
            return
        },
        onShow(instance) {
            backdrop = document.createElement('div')
            backdrop.classList.add('header__cart-tippy-backdrop')
            backdrop.classList.add('is-active')
            document.body.append(backdrop)
            return
        },
        onHide(instance) {
            backdrop.classList.remove('is-active')
            backdrop.addEventListener('animationend', onAnimationEnd)

            function onAnimationEnd(e) {
                backdrop.remove()
                backdrop = null
            }

            return
        }
    })

    window.CartPopupInstance = instance

    return instance
}


export {
    InitCartPopup
}