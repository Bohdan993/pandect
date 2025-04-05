import {
    Choices,
    OverlayScrollbars
} from "../../../libs/libs.js"
import {
    addClass,
    removeClass,
} from "./Utils/index.js"



const InitSelects = (selects) => {




    function forEachSelect(select) {
        const choices = new Choices(select, {
            // choices:
            searchEnabled: false,
            shouldSort: false,
            position: 'bottom',
            classNames: {
                containerOuter: 'choices pg-select',
                containerInner: 'pg-select__inner',
                itemSelectable: 'pg-select__selectable',
                listDropdown: `choices__list--dropdown`,
                list: 'pg-select__inner-list',
            },
            callbackOnInit(){
                if(this.passedElement.element.classList.contains('portfolio__select')) {
                    const {dropdown : { element: dropdown }} = this

                    const instance = OverlayScrollbars(dropdown, {
                        className: "os-theme-dark",
                        sizeAutoCapable: true,
                        paddingAbsolute: true,
                        scrollbars: {
                            clickScrolling: true,
                            visibility: 'v'
                        }
                    })
                }
            }
        });
    }


    selects.forEach(forEachSelect)
}


export {
    InitSelects
}