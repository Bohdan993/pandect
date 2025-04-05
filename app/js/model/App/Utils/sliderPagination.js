export function sliderPagination(Splide, Components) {
    const {
        Controller
    } = Components
    let list
    let buttons = []


    function mount() {

        const {
            id
        } = Splide.root
        const {
            slides
        } = Components.Elements

        const paginationLayer = Splide.root.querySelector(`.${id}__pagination`)
        list = document.createElement('ul')
        list.classList.add(`${id}__pagination-list`)
        slides.forEach(forEachSlide)
        paginationLayer.append(list)

        Splide.on('move', update);

    }

    function update() {
        buttons.forEach((button) => {
            button.classList.remove('is-active')
        })

        buttons[Splide.index].classList.add('is-active')
    }

    function forEachSlide(slide, idx) {
        const {
            id
        } = Splide.root
        const li = document.createElement('li')
        const button = document.createElement('button')
        button.classList.add(`${id}__pagination-button`)
        button.setAttribute('data-idx', idx)
        button.setAttribute('type', 'button')
        if (Splide.index === idx) {
            button.classList.add('is-active')
        }
        buttons.push(button)
        li.append(button)
        list.append(li)

        button.addEventListener('click', click)

    }


    function click(e) {
        const {
            idx
        } = this.dataset
        buttons.forEach((button) => {
            button.classList.remove('is-active')
        })
        Controller.go(+idx)
        this.classList.add('is-active')

    }


    return {
        mount
    }
}