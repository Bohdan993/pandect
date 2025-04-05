import { throttle } from './Utils/index.js';


const initAccordeon = (accordeons, fields, px = 0) => {

    const throttledResize = throttle(resizeHandler, 150);

   const slideToggle = (elem) => {
        if (parseInt(elem.style.height) > 0) {
            elem.style.height = `0px`;
            return;
        }
        elem.style.display = 'block';
        elem.style.height = `${elem.scrollHeight + (+elem.dataset.padding || 0)}px`;
        return;
    }

    function transitionendHandler(e) {
        if (parseInt(this.style.height) <= 0) {
            this.style.display = 'none';
            return;
        }
    }

    function forOneField(attr, elem) {
        const field = elem.dataset.fields;


        if (field === attr) {
            slideToggle(elem);
            return;
        }
    }


    function clickHandler(e) {
        const attr = this.dataset.accordeon;
        this.classList.toggle('open');
        fields.forEach(forOneField.bind(undefined, attr));
        return;
    }


    function resizeHandler(e) {
        fields.forEach((field, ind) => {
            const breakpoint = +field.getAttribute('data-breakpoint');
            if(breakpoint) {
                if(this.innerWidth <= breakpoint) {
                    field.style.display = 'none';
                    field.style.height = '0px';
                    accordeons?.[ind]?.classList.remove('open');
                } else {
                    field.style.display = 'block';
                    field.style.height = field.scrollHeight + 'px';
                    
                }
            }
        })
    }

    function forEachField(elem) {
        elem.style.height = elem.scrollHeight + 'px';
        elem.addEventListener('transitionend', transitionendHandler);
        return;
    }

    function forEachAccordeon(elem) {
        elem.addEventListener('click', clickHandler);
        return;
    }


    // if(breakpoint) {
        // resizeHandler()
    window.addEventListener('resize', throttledResize);
    // }
    fields.forEach(forEachField);
    accordeons.forEach(forEachAccordeon);
}


export {
    initAccordeon
}