const initTabs = (tabs, sections) => {

    function forEachRemoveClass(elem) {
        elem.classList.remove('active')
    }

    function clickHandler(e) {
        if (sections) {
            sections.forEach(forEachRemoveClass)
        }

        tabs.forEach(forEachRemoveClass)

        let attr = this.dataset.tab

        if (sections) {
            if (attr && attr.startsWith('%')) {
                sections[0].classList.remove(sections[0].classList[sections[0].classList.length - 1])
                sections[0].classList.add('animation')
                sections[0].classList.add(attr.slice(1))
                sessionStorage.setItem('view', JSON.stringify(attr.slice(1)))
            } else {
                sections.forEach(section => {
                    if (section?.dataset.section === attr) {
                        section?.classList.add('active')
                    }
                })
            }

        }


        this.classList.add('active')
    }


    function forEachTab(tab, ind, tabs) {
        
        let attr;
        if (tab.classList.contains('active')) {
            attr = tab.dataset.tab
        }


        if (sections) {
            if (attr && attr.startsWith('%')) {
                const view = JSON.parse(sessionStorage.getItem('view'))
                sections[0].classList.add('animation')
                if(!view) {
                    sections[0].classList.add(attr.slice(1))
                    sessionStorage.setItem('view', JSON.stringify(attr.slice(1)))
                } else {
                    sections[0].classList.remove(sections[0].classList[sections[0].classList.length - 1])
                    sections[0].classList.add(view)
                    tabs.forEach(t => {
                        t.classList.remove('active')
                        if(t.dataset.tab.includes(view)) {
                            t.classList.add('active')
                        }
                    })
                }
                
                sections[0].addEventListener('animationend', function(){
                    this.classList.remove('animation')
                })
            } else {
                sections.forEach(section => {
                    if (section?.dataset.section === attr) {
                        section?.classList.add('active')
                    }
                })
            }

        }

        tab.addEventListener('click', clickHandler)
        tab.addEventListener('change', clickHandler)
    }

    tabs.forEach(forEachTab)
}


export {
    initTabs
}