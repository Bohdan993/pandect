
const InitPlayVideo = (btn) => {


    function clickHandler(e) {
        const parent = this.closest(`[data-video]`)
        const video = parent.getAttribute('data-video')

        const iframe = '<iframe src="https://www.youtube.com/embed/' + video + '?autoplay=1" frameborder="0" rel="0" allow="autoplay; encrypted-media" allowfullscreen>'
        parent.insertAdjacentHTML("beforeend", iframe)
    }


    btn.addEventListener('click', clickHandler)
}


export {
    InitPlayVideo
}