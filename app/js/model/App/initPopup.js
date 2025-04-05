import {
    tippy,
    IMask
} from "../../../libs/libs.js"
import { initSendForm } from "./initSendForm.js"

import { changeHandler as compare } from "./initCompareProducts.js"

import {
    $dataPositions, $compareCharacteristicsLists, $compareSections
} from '../../view/index.js'
// import { grecaptchaObserver } from "./Utils/observer.js"


if(!window.popupInstancesArr) {
    window.popupInstancesArr = []
}

// let grecaptchaPopupInit;

const InitPopup = (el, template, useTemplate = false) => {
    const sitekey = "6LcAGHImAAAAAPDxLU-Kr1_tSMZVEIXi--GscSGx";
    let content
    
    if(useTemplate) {
        template.style.display = 'block'
    } else {
        content = template.cloneNode(true)
        content.style.display = 'block'
    }

    let backdrop;

    

    let instance = tippy(el, {
        content: useTemplate ? template : content,
        arrow: false,
        allowHTML: true,
        interactive: true,
        interactiveBorder: 5,
        interactiveDebounce: 0,
        maxWidth: 475,
        offset: [0, 20],
        hideOnClick: true,
        trigger: 'click',
        popperOptions: {
            strategy: 'fixed'
        },
        appendTo: () => document.body,
        onCreate(instance) {
            window.popupInstancesArr.push(instance);
            instance.popper.classList.add(`${template.id}-tippy`);
            instance.popper.classList.add(`popup-tippy`);

            const closePopup = instance.popper.querySelector('.popup__close');
            const form = instance.popper.querySelector('form');
            // const grecaptchaErrorContainer = instance.popper.querySelector('.grecaptchaError');

            closePopup.addEventListener('click', onClick);

            if(form) {
                form.addEventListener('submit', onSubmit);
                const phone = form.querySelector('input[type="tel"]');
                if(phone) {
                    const maskOptions = {
                        mask: '+{38\\0} (00) 000-00-00'
                      }
                    const mask = IMask(phone, maskOptions);
                }

            }

            function onClick(e) {
                instance.hide()
            }

            function onSubmit(e) {
                e.preventDefault();


                if(this.id === "callback-popup-form") {
                    // let response = grecaptcha.getResponse(
                    //     window.grecaptchaWidgets["widgetId3"]
                    // );
                    // if(response) {
                    //     grecaptchaErrorContainer.style.display = "none";
                    //     initSendForm(form, response);
                    // } else {
                    //     grecaptchaErrorContainer.style.display = "block";
                    // }

                    initSendForm(form);
                    return;
                }

                if(this.id === "one-click-buy-popup-form") {
                    // let response = grecaptcha.getResponse(
                    //     window.grecaptchaWidgets["widgetId4"]
                    // );
                    // if(response) {
                    //     grecaptchaErrorContainer.style.display = "none";
                    //     initSendForm(form, response);
                    // } else {
                    //     grecaptchaErrorContainer.style.display = "block";
                    // }
                    initSendForm(form);
                    return;
                }
              
            }


            ////////////////////
            if(instance.popper.classList.contains('compare-filter-popup-tippy')) {
                const checkboxes = instance.popper.querySelectorAll('input[type="checkbox"]')

                checkboxes.forEach(forEachCheckbox)

                function forEachCheckbox(checkbox) {
                    const bindedChangeHandler = compare.bind(checkbox, $compareCharacteristicsLists, $compareSections, $dataPositions)
                    checkbox.addEventListener('change', bindedChangeHandler)
                }
            }

            /////////////

            if(instance.popper.classList.contains('callback-popup-tippy')) {
                // grecaptchaPopupInit = function (item){
                //     if(item === 'Grecaptcha is ready!') {
                //         let inst = instance.popper;
                //         let $grecaptchaContainer3 = inst.querySelector('#grecaptchaContainer3');
                //         if($grecaptchaContainer3) {
                //             window.grecaptchaWidgets['widgetId3'] = grecaptcha.render($grecaptchaContainer3, {
                //                 'sitekey' : sitekey
                //               }) 
                //           }
                //     }
                // }
                // grecaptchaObserver.subscribe(grecaptchaPopupInit);
            }

            if(instance.popper.classList.contains('one-click-buy-popup-tippy')) {
                // grecaptchaPopupInit = function (item){
                //     if(item === 'Grecaptcha is ready!') {
                //         let inst = instance.popper;
                //         let $grecaptchaContainer4 = inst.querySelector('#grecaptchaContainer4');
                //         if($grecaptchaContainer4) {
                //             window.grecaptchaWidgets['widgetId4'] = grecaptcha.render($grecaptchaContainer4, {
                //                 'sitekey' : sitekey
                //               });
                //           }
                //     }
                // }
                // grecaptchaObserver.subscribe(grecaptchaPopupInit);
            }
           


        },
        onShow(instance) {
            backdrop = document.createElement('div')
            backdrop.classList.add(`${template.id}-tippy-backdrop`)
            backdrop.classList.add('popup-tippy-backdrop')
            backdrop.classList.add('is-active')
            document.body.append(backdrop)

            return;
        },
        onHide(instance) {
            backdrop.classList.remove('is-active')
            backdrop.addEventListener('animationend', onAnimationEnd)

            function onAnimationEnd(e) {
                backdrop.remove()
                backdrop = null
            }
            
            return;
        }
    })

    return instance;

}


export {
    InitPopup
}