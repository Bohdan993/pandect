import {
    Splide
} from "../../../libs/libs.js"
import {
    addClass,
    removeClass
} from "./Utils/index.js"



const InitSingleSlider = (slider, secondSlider) => {

    const thumbnailSlider = new Splide(secondSlider, {
        fixedWidth: 80,
        height: 80,
        gap: 36,
        rewind: true,
        cover: true,
        pagination: false,
        isNavigation: true,
        focus: 'center',
        arrows: false,
        breakpoints: {
            992: {
                fixedWidth: 60,
                height: 60,
                gap: 25,
            },
            768 : {
                fixedWidth: 45,
                height: 45,
                gap: 20,
            },
            576: {
                fixedWidth: 35,
                height: 35,
                gap: 10,
            }
        }
    })

    const imageSlider = new Splide(slider, {
        type: 'fade',
        heightRatio: (52 + 315 + 42)/776,
        pagination: false,
        arrows: true,
    })


    imageSlider.sync(thumbnailSlider.mount()).mount()

}


export {
    InitSingleSlider
}