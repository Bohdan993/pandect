import {
    addClass,
    removeClass,
    debounce
} from "./Utils/index.js"



const InitSeoTextToggle = (btn, block) => {

    let shown = false;
    const debounceResizeHandler = debounce(resizeHandler, 150);


    block.style.maxHeight = block.scrollHeight + 'px';

    function clickHandler(e) {
        e.preventDefault();
        if (!shown) {
            addClass(block, 'active');
            btn.querySelector('span').innerText = 'Приховати';
            shown = true;
            return;
        }

        removeClass(block, 'active');
        btn.querySelector('span').innerText = 'Читати більше';
        shown = false;
        return;

    }

    function resizeHandler(e) {
        if (this.innerWidth > 576) {
            removeClass(block, 'active');
            btn.querySelector('span').innerText = 'Читати більше';
            shown = false;
            return;
        }

        if(this.innerWidth < 576) {
            block.style.maxHeight = block.scrollHeight + 'px';
            return;
        }
    }

    window.addEventListener('resize', debounceResizeHandler);
    btn.addEventListener('click', clickHandler);

}


export {
    InitSeoTextToggle
}