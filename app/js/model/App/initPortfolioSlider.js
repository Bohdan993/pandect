import {
    Splide
} from "../../../libs/libs.js"
import {
    slideNumber,
    sliderScrollBar
} from "./Utils/index.js"



const InitPortfolioSlider = (slider) => {

    const portfolioSingleSlider = new Splide(slider, {
        focus: 'center',
        updateOnMove: true,
        pagination: false,
        gap: '5px',
        drag: false,
        breakpoints: {
            768: {
                destroy: false
            },
            576: {
                destroy: true,
            }
        }
    })


    const bindedSlideNumber = slideNumber.bind(portfolioSingleSlider, 'portfolioSlider')

    portfolioSingleSlider.mount({
        sliderScrollBar,
        bindedSlideNumber
    })

}


export {
    InitPortfolioSlider
}