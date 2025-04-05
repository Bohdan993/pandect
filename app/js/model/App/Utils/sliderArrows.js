export function sliderArrows(Splide, Components) {

    const {
        Controller
    } = Components


    function mount() {

        const {
            id
        } = Splide.root

        const arrows = Splide.root.querySelector(`.${id}__arrows`);
        const prevArrow = arrows.querySelector(`.${id}__arrow--prev`)
        const nextArrow = arrows.querySelector(`.${id}__arrow--next`)


        prevArrow.addEventListener('click', click)
        nextArrow.addEventListener('click', click)

    }


    function click(e) {

        const {
            perMove
        } = Splide.options;
        const {
            id
        } = Splide.root;
        const {index, length} = Splide;



        if (this.classList.contains(`${id}__arrow--prev`)) {
            // if()
            // Controller.go(`-${perMove}`)

            if(index - perMove < 0) {
                Controller.go(`-${length%perMove}`);
            } else {
                Controller.go(`-${perMove}`);
            }

            return
        }

        if(index + perMove > length - perMove) {
            Controller.go(`+${length%perMove}`);
        } else {
            Controller.go(`+${perMove}`);
        }

        return

    }


    return {
        mount
    }
}