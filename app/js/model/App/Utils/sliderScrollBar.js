import {
    OverlayScrollbars
} from '../../../../libs/libs.js'

export function sliderScrollBar(Splide, Components) {

    let scroller
    let scrolled
    let position = {
        x: 0
    }
    let instances = {
        overlayscrollbars: null
    }

    function mount() {

        const {
            // Scroll,
            Controller
        } = Components
        const {
            list
        } = Components.Elements
        const listScrollWidth = list.scrollWidth
        const listClientWidth = list.clientWidth
        draw()

        instances.overlayscrollbars = OverlayScrollbars(scrolled, {
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
                    Controller.scroll(currScrollCoeficient * (listScrollWidth - listClientWidth) * -1, 0)
                    Splide.refresh()
                }
            }
        })


        Splide.on('moved resized', update)
        Splide.on('resized', resize)

    }


    function update() {
        const {
            list
        } = Components.Elements
        const listScrollWidth = list.scrollWidth
        const listClientWidth = list.clientWidth

        position.x = Math.round(+getComputedStyle(list).transform.replace(/[^0-9-,.]/g, "").split(',')[4]) || 0

        instances.overlayscrollbars.scroll({
            x: `${position.x * 100 / (listScrollWidth - listClientWidth) * -1}%`
        })

    }


    function draw() {
        const {
            list
        } = Components.Elements
        const {
            id
        } = Splide.root
        const extensionsLayer = Splide.root.querySelector('.splide__extensions-layer')
        const listScrollWidth = list.scrollWidth
        const listClientWidth = list.clientWidth
        scrolled = document.createElement('div')
        scrolled.classList.add(`${id}__scrolled`)
        scroller = document.createElement('div')
        scroller.classList.add(`${id}__scroller`)
        scrolled.append(scroller)

        extensionsLayer.append(scrolled)

        const scrolledClientWidth = scrolled.clientWidth
        scroller.style.width = listScrollWidth / listClientWidth * scrolledClientWidth + 'px'
    }


    function resize() {
        const {
            list
        } = Components.Elements
        const {
            // Scroll,
            Controller
        } = Components
        const listScrollWidth = list.scrollWidth
        const listClientWidth = list.clientWidth
        const scrolledClientWidth = scrolled.clientWidth
        scroller.style.width = listScrollWidth / listClientWidth * scrolledClientWidth + 'px'


        instances.overlayscrollbars.options({
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
                    Controller.scroll(currScrollCoeficient * (listScrollWidth - listClientWidth) * -1, 0)
                }
            }
        })
    }


    function destroy(){
        instances.overlayscrollbars.destroy()
        instances.overlayscrollbars = null
        scrolled.remove()
        scrolled = null
        scroller = null
    }


    return {
        mount,
        destroy
    }
}