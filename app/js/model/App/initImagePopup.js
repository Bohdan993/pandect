import {
    tippy,
    IMask
} from "../../../libs/libs.js"




const InitImagePopup = (el, template, useTemplate = false) => {
    let content
    
    if(useTemplate) {
        template.style.display = 'block'
    } else {
        content = template.cloneNode(true)
        const img = document.createElement('img'); 
        const layer = content.querySelector('.img__layer')
        img.src = el.src 
        layer.append(img)
        content.style.display = 'block'
    }

    let backdrop
    

    let instance = tippy(el, {
        content: useTemplate ? template : content,
        arrow: false,
        allowHTML: true,
        interactive: true,
        interactiveBorder: 5,
        interactiveDebounce: 0,
        maxWidth: '90vw',
        offset: [0, 20],
        hideOnClick: true,
        trigger: 'click',
        popperOptions: {
            strategy: 'fixed'
        },
        appendTo: () => document.body,
        onCreate(instance) {

            instance.popper.classList.add(`${template.id}-tippy`)
            instance.popper.classList.add(`popup-img-tippy`)
            const closePopup = instance.popper.querySelector('.popup__close')
            closePopup.addEventListener('click', onClick)

            function onClick(e) {
                instance.hide()
            }

        },
        onShow(instance) {
            backdrop = document.createElement('div')
            backdrop.classList.add(`${template.id}-tippy-backdrop`)
            backdrop.classList.add('popup-tippy-backdrop')
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

    return instance

}


export {
    InitImagePopup
}