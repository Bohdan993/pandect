import {
    addClass,
    debounce,
    removeClass,
} from "./Utils/index.js"



const InitCatalogFiltersShow = (btn, closeBtn, filter) => {
    let shown = false


    function clickHandler(e) {
        if (!shown) {
            addClass(filter, 'active')
            shown = true

            return
        }


        removeClass(filter, 'active')
        shown = false
        return
    }


    function resizeHandler(e) {
        if (this.innerWidth > 992 && shown) {
            removeClass(filter, 'active')
        }
    }


    const debouncedResizeHandler = debounce(resizeHandler, 150)
    window.addEventListener('resize', debouncedResizeHandler)
    btn.addEventListener('click', clickHandler)
    closeBtn.addEventListener('click', clickHandler)
}


export {
    InitCatalogFiltersShow
}