const InitButtonsStopPropagation = (buttons) => {


    function clickHandler(e) {
        e.stopPropagation()
        e.preventDefault()
    }


    function forEachButon(button) {
        button.addEventListener('click', clickHandler)
        
    }

    buttons.forEach(forEachButon)
}


export {
    InitButtonsStopPropagation
}