export function slideNumber(type, Splide, Components) {

    let elm;
    let curr;
    let total;

    function mount() {

        const {
            id
        } = Splide.root
        const extensionsLayer = Splide.root.querySelector('.splide__extensions-layer')
        elm = document.createElement('div')
        elm.classList.add(`${id}__numbers`)
        curr = document.createElement('span')
        curr.classList.add(`${id}__numbers-current`)
        total = document.createElement('span')
        total.classList.add(`${id}__numbers-total`)
        elm.append(curr)
        elm.append(total)
        if (type === 'cardSlider' || type === 'portfolioSlider') {
            extensionsLayer.prepend(elm)
        } else {
            extensionsLayer.append(elm)
        }

        update();
        Splide.on('move mounted scrolled resized', update);

    }

    function update() {
        const {
            perPage
        } = Splide.options;
        curr.textContent = `${ Math.round(Splide.index/perPage) + 1 } \n`;
        total.textContent = ` / ${ Math.round(Splide.length/perPage) }`;
    }


    function destroy() {
        elm.remove();
    }



    return {
        mount,
        destroy
    }
}