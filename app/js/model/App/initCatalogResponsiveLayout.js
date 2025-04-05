import {
    addClass,
    debounce,
    removeClass
} from "./Utils/index.js"



const InitCatalogResponsiveLayout = (lists, tabs) => {
    const debouncedResizeHandler = debounce(resizeHandler, 150)
    const debouncedResizeHandler2 = debounce(resizeHandler2, 150)

    if (window.innerWidth <= 992) {
        lists.forEach(forEachList)
    }

    function forEachList(list) {
        addClass(removeClass(list, 'list'), 'grid')
    }


    function forEachTab(tab) {
        if(tab.classList.contains('active')) {
            let attr = tab.dataset.tab
            removeClass((lists[0]), lists[0].classList[lists[0].classList.length - 1])
            addClass(lists[0], attr.slice(1))

            return
        }
    }

    function resizeHandler(e) {
        if (this.innerWidth <= 992) {
            lists.forEach(forEachList)
            window.removeEventListener('resize', debouncedResizeHandler)
            window.addEventListener('resize', debouncedResizeHandler2)
        }
    }


    function resizeHandler2(e) {
        if (this.innerWidth > 992) {
            tabs.forEach(forEachTab)
            window.removeEventListener('resize', debouncedResizeHandler2)
            window.addEventListener('resize', debouncedResizeHandler)
        }
    }


    window.addEventListener('resize', debouncedResizeHandler)
    window.addEventListener('resize', debouncedResizeHandler2)
}


export {
    InitCatalogResponsiveLayout
}