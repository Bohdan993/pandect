import {
    throttle,
    addClass,
    removeClass
} from './index.js'



export function sliderCenteringSlides(Splide, Components) {


    const throttledUpdate = throttle(update, 250)
    const elements = {}
    let isMobile = false

    function mount() {

        checkWindowWidth();
        throttledUpdate();

        Splide.on('mounted resize destroy', checkWindowWidth)
        Splide.on('mounted resized', throttledUpdate);
    }


    function checkWindowWidth() {
        if(window.innerWidth <= 576) {
            isMobile = true
        } else {
            isMobile = false
        }
    }

    function update() {
        const {
            perPage
        } = Splide.options;
        const {
            length
        } = Components.Elements.slides
        const {
            list
        } = Components.Elements


        if(!elements['list'] && !isMobile) {
            elements['list'] = list
        }

        if(!isMobile) {
            if(length < perPage) {
                addClass(list, 'justify-center')
            } else {
                removeClass(list, 'justify-center')
            }
        }
    
    }


    function destroy() {
        elements['list'] && removeClass(elements['list'], 'justify-center')
        elements['list'] = null
    }



    return {
        mount,
        destroy
    }
}