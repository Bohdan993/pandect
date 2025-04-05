import Splide from "@splidejs/splide";
import noUiSlider from 'nouislider';
import 'lightGallery.js';
import OverlayScrollbars from "overlayscrollbars";
import 'lg-autoplay.js'
import tippy from 'tippy.js'
import Choices from 'choices.js'
import 'sharer.js'


// enable treeshaking
import IMask from 'imask/holder'; // imports only factory
// add needed features
import 'imask/esm/masked/number'
// now factory can work with number masks, but not any other
// import 'imask/esm/masked/regexp'
import 'imask/esm/masked/pattern'

// import IMask from 'imask'; // imports all modules

const lg = window.lightGallery
const lgAutoplay = window.lgAutoplay

export {
    Splide,
    noUiSlider,
    lg,
    OverlayScrollbars,
    lgAutoplay,
    tippy,
    Choices,
    IMask
}