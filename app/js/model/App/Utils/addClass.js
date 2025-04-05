export function addClass(elem, ...classes) {
    classes.forEach(clazz => {
        elem.classList.add(clazz)
    })


    return elem
}