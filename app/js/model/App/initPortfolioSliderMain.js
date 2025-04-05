import {
    Splide
} from "../../../libs/libs.js"

import {
    slideNumber,
    sliderArrows,
    sliderCenteringSlides
} from "./Utils/index.js"



const InitPortfolioSliderMain = (slider) => {

    const portfolioSlider = new Splide(slider, {
        gap: 37 / 14 + 'rem',
        arrows: false,
        pagination: false,
        trimSpace: false,
        perPage: 4,
        perMove: 4,
        lazyLoad: 'nearby',
        // cover      : true,
		// heightRatio: 0.25,
        breakpoints: {
            1200: {
                perPage: 3,
                perMove: 3,
                gap: 30 / 14 + 'rem',
            },
            992: {
                gap: 25 / 14 + 'rem',
                perPage: 3,
                perMove: 3,
            },
            768: {
                gap: 30 / 12 + 'rem',
                perPage: 2,
                perMove: 2,
            },
            576: {
                lazyLoad: false,
                destroy: true,
            }
        }
    })



    const bindedSlideNumber = slideNumber.bind(portfolioSlider, 'portfolioSlider')

    
    portfolioSlider.mount({
        bindedSlideNumber,
        sliderArrows,
        sliderCenteringSlides
    })

}


export {
    InitPortfolioSliderMain
}