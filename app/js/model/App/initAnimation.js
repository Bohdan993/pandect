import {
    throttle
} from './Utils/index.js'

const InitAnimation = (blocks) => {

    if (!!window.IntersectionObserver) {
        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const animation = entry.target.getAttribute('data-animation')
                    entry.target.classList.add('animated')
                    entry.target.style.animationName = animation
                    observer.unobserve(entry.target);
                }
            });
        }, {
            // rootMargin: "550px 0px 0px 0px",
            threshold: 0.2
        });
        blocks.forEach(block => {
            observer.observe(block)
        });
    } else {
        
    }
}


export {
    InitAnimation
}