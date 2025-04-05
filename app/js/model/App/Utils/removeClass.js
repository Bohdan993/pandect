export function removeClass(elem, ...classes) {
    classes.forEach(clazz => {
        elem.classList.remove(clazz)
    })


    return elem
}