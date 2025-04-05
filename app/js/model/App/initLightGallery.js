import {
    lg,
    lgAutoplay
} from "../../../libs/libs.js"

import {
    throttle
} from "./Utils/index.js"

const InitLightGallery = (gallery) => {
    const settings = {
        plugins: [lgAutoplay],
        addClass: 'portfolio-single',
        mode: 'lg-tube',
        download: false,
        hideBarsDelay: 0,
        nextHtml: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"><path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path></svg>',
        prevHtml: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"><path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path></svg>'
    }
    const throttleResize = throttle(resize, 50)

    if (window.innerWidth > 576) {
        init()
    } else {
        window.addEventListener('resize', checkWindowWidth)
    }

    function checkWindowWidth(e) {
        if (this.innerWidth > 576) {
            init()
            window.removeEventListener('resize', checkWindowWidth)
            return
        }
    }


    function init() {
        lg(gallery, settings)
        window.addEventListener('resize', throttleResize)
        return
    }

    function resize(e) {

        if (this.innerWidth > 576) {
            if (!window.lgData[gallery.getAttribute('lg-uid')]) {
                init()
            }
        } else {
            destroy()
            window.addEventListener('resize', checkWindowWidth)
        }
    }


    function destroy() {
        window.removeEventListener('resize', throttleResize)
        window.lgData[gallery.getAttribute('lg-uid')].destroy(true)
    }

}


export {
    InitLightGallery
}