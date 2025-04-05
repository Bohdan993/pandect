import {
    OverlayScrollbars
} from "../../../libs/libs.js"

import {
    addClass,
    removeClass,
    throttle
} from "./Utils/index.js"



const InitScrollBarPlugin = (block, clazz, padding) => {
    let scrolled
    let scroller
    let parent = block.parentNode
    const instances = {
        overlayscrollbarsBlock: null,
        overlayscrollbarsParent: null
    }

    const throttleResize = throttle(resize, 50)
    const throttleCheckWindowWidth = throttle(checkWindowWidth, 50)


    if (window.innerWidth < 576) {
        const blockScrollWidth = block.scrollWidth
        const blockClientWidth = block.clientWidth
        if (blockScrollWidth > blockClientWidth) {
            init()
        }
    } else {
        window.addEventListener('resize', throttleCheckWindowWidth)
    }

    function checkWindowWidth(e) {
        if (this.innerWidth < 576) {
            const blockScrollWidth = block.scrollWidth
            const blockClientWidth = block.clientWidth
            if (blockScrollWidth > blockClientWidth) {
                init()
                window.removeEventListener('resize', throttleCheckWindowWidth)
            }
        }
    }

    function draw() {
        const blockScrollWidth = block.scrollWidth
        const blockClientWidth = block.clientWidth


        const coef = blockScrollWidth / blockClientWidth
        parent.style.position = 'relative'
        parent.style.overflowX = 'auto'
        parent.style.overflowY = 'hidden'
        addClass(parent, 'pg-parent')
        block.style.overflow = 'visible'
        scrolled = document.createElement('div')
        addClass(scrolled, `${clazz}__scrolled`, 'pg-scrolled')
        scrolled.style.position = 'absolute'
        scroller = document.createElement('div')
        addClass(scroller, `${clazz}__scroller`, 'pg-scroller')
        scrolled.append(scroller)

        parent.append(scrolled)

        if (padding) {
            const widthWithPadding = blockScrollWidth - padding * 2
            scrolled.style.width = widthWithPadding + 'px'
            scroller.style.width = coef * widthWithPadding + 'px'
            return
        }
        scrolled.style.width = blockScrollWidth + 'px'
        scroller.style.width = coef * blockScrollWidth + 'px'
    }

    function init() {
        draw()
        instances.overlayscrollbarsParent = OverlayScrollbars(addClass(parent, 'os-host-flexbox'), {
            className: "os-theme-dark",
            sizeAutoCapable: true,
            paddingAbsolute: true,
            scrollbars: {
                clickScrolling: false,
                visibility: 'h'
            },
            callbacks: {
                onScroll() {
                    const {
                        position: {
                            x: positionX
                        },
                        max: {
                            x: maxX
                        }
                    } = this.scroll()
                    const currScrollCoeficient = positionX / maxX
                    instances.overlayscrollbarsBlock.scroll({
                        x: `${currScrollCoeficient * 100}%`,
                        y: "0"
                    })
                }
            }
        })

        instances.overlayscrollbarsBlock = OverlayScrollbars(scrolled, {
            className: "os-theme-dark",
            sizeAutoCapable: true,
            paddingAbsolute: true,
            scrollbars: {
                clickScrolling: true,
            },
            callbacks: {
                onScroll() {
                    const {
                        position: {
                            x: positionX
                        },
                        max: {
                            x: maxX
                        }
                    } = this.scroll()
                    const currScrollCoeficient = positionX / maxX

                    instances.overlayscrollbarsParent.scroll({
                        x: `${currScrollCoeficient * 100}%`,
                        y: "0"
                    })
                }
            }
        })

        window.addEventListener('resize', throttleResize)
    }

    function reinit() {
        const blockScrollWidth = block.scrollWidth
        const blockClientWidth = block.clientWidth
        const coef = blockScrollWidth / blockClientWidth

        if (padding) {
            const widthWithPadding = blockScrollWidth - padding * 2
            scrolled.style.width = widthWithPadding + 'px'
            scroller.style.width = coef * widthWithPadding + 'px'

        } else {
            scrolled.style.width = blockScrollWidth + 'px'
            scroller.style.width = coef * blockScrollWidth + 'px'
        }
    }

    function resize(e) {
        if (this.innerWidth < 576) {

            if (instances.overlayscrollbarsBlock) {
                reinit()
            } else {
                init()
            }

        } else {
            destroy()
            window.addEventListener('resize', throttleCheckWindowWidth)
        }
    }

    function destroy() {
        window.removeEventListener('resize', throttleResize)
        instances.overlayscrollbarsBlock.destroy()
        instances.overlayscrollbarsBlock = null
        instances.overlayscrollbarsParent.destroy()
        instances.overlayscrollbarsParent = null
        scrolled.remove()
        scrolled = null
        scroller = null
        block.style = ''
        removeClass(parent, 'pg-parent')
        parent.style = ''
    }
}

export {
    InitScrollBarPlugin
}