const InitContactsTabs = (blocks, map) => {

    function clickHandler(e) {
        const address = this.dataset.address
        map.src = `https://maps.google.com/maps?width=100%&height=100%&hl=ua&q=${address}&ie=UTF8&t=&z=18&iwloc=B&output=embed`

        return
    }

    function forEachBlock(block, ind) {

        if(ind === 0) {
            const address = block.dataset.address
            map.src = `https://maps.google.com/maps?width=100%&height=100%&hl=ua&q=${address}&ie=UTF8&t=&z=18&iwloc=B&output=embed`
        }
        block.addEventListener('click', clickHandler)

        return
    }


    blocks.forEach(forEachBlock)
}



export {
    InitContactsTabs
}