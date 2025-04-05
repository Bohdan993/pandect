import {
    Splide
} from "../../../libs/libs.js"
import {
    addClass,
    removeClass,
    sliderArrows,
    sliderPagination
} from "./Utils/index.js"



const InitPreviewSlider = (slider) => {

    const previewSlider = new Splide(slider, {
        type: 'loop',
        focus: 'center',
        updateOnMove: true,
        arrows: false,
        pagination: false,
        // pauseOnHover: true,
        // autoWidth: false
        drag: false
    })


    // previewSlider.mount({sliderArrows, sliderPagination})
    previewSlider.mount()

}


export {
    InitPreviewSlider
}