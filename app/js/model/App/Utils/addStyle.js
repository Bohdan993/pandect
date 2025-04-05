export function addStyle(style, ...elems) {

    elems.forEach(el => {
        for (let key in style) {
            el.style[key] = style[key]
        }
    })

    return elems
}