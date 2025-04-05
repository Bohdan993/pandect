export function removeStyle(style, ...elems) {

    elems.forEach(el => {
        for (let key in style) {
            el.style[key] = ''

        }
    })

    return elems
}