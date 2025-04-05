const initOrderAccordeon = (accordeons, fields) => {

    const slideToggle = (elem) => {

        if (parseInt(elem.style.height) > 0) {
            elem.style.height = `0px`
            return
        }

        elem.style.height = `${elem.scrollHeight}px`;
        return
    }

    function transitionendHandler(e) {
        if (parseInt(this.style.height) <= 0) {
            this.style.display = 'none';
            return
        }
    }

    function forOneField(attr, elem) {
        const field = elem.dataset.fields

        if (field === attr) {

            elem.style.display = 'block';
            slideToggle(elem)

            return
        }
    }


    function changeHandler(e) {
        const attr = this.dataset.accordeon

        const group = [].filter.call(accordeons, el => {
            return el.name === this.name
        })

        group.forEach((elem) => {
            const accordeon = elem.dataset.accordeon
            fields.forEach((element) => {
                const field = element.dataset.fields

                if (field === accordeon) {
                    slideToggle(element)
                }
            })
        })

        fields.forEach(forOneField.bind(undefined, attr))

        return

    }

    function forEachField(elem) {
        elem.addEventListener('transitionend', transitionendHandler)
        return
    }

    function forEachAccordeon(elem) {
        elem.addEventListener('change', changeHandler)
        start(elem)
        return
    }


    function start(accordeon) {
        if (accordeon.checked) {
            const attr = accordeon.dataset.accordeon

            fields.forEach(forOneField.bind(undefined, attr))
            return
        }

    }



    fields.forEach(forEachField)
    accordeons.forEach(forEachAccordeon)
}


export {
    initOrderAccordeon
}