



const initPortfolioSelectChangeLink = (selects) => {
    
    function changeHandler(e) {
        const link = e.detail.value
        window.location = link
    }

    function forEachSelect(select) {
        select.addEventListener('change', changeHandler)
    }

    selects.forEach(forEachSelect)
}


export {
    initPortfolioSelectChangeLink
}