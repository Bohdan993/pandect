const data = {}
const keyNodes = []

const initCompareProducts = (checkboxes, nodes, lists, sections) => {


    function forEachSection(section, i){
        const tables = section.querySelectorAll('.compare__table')
        const bindedForEachTable = forEachTable.bind(null, 'section-' + i)
        data['section-' + i] = {}
        tables.forEach(bindedForEachTable)
    }

    function forEachTable(sectionIndex, table, index){
        const valuesNodes = table.querySelectorAll('.compare__characteristic-value')
        valuesNodes.forEach((value, ind) => {
            if(!data[sectionIndex][ind]) {
                data[sectionIndex][ind] = [value.textContent]
            } else {
                data[sectionIndex][ind].push(value.textContent)
            }
        })
    }

    function forEachCheckbox(checkbox) {
        const bindedChangeHandler = changeHandler.bind(checkbox, lists, sections, nodes)
        checkbox.addEventListener('change', bindedChangeHandler)
    }


    checkboxes.forEach(forEachCheckbox)
    sections.forEach(forEachSection)
}



function changeHandler(lists, sections, nodes, e) {
    let { id } = this.dataset
    const clonedData = JSON.parse(JSON.stringify(data))

    lists.forEach(list => {
        const nodes = list.querySelectorAll('[data-position-key]')
        nodes.forEach(node => {
            keyNodes.push(node)
        })
    })
    
    switch(id) {
        case 'different': {
            const diff = {}
            let i = 0


            for(let key in clonedData) {
                diff[key] = {}
                for(let k in clonedData[key]) {
                    const sorted = clonedData[key][k].sort()
                    if(sorted[0] !== sorted[sorted.length - 1]) {
                        diff[key][k] = clonedData[key][k]
                    }
                }



                const keys = Object.keys(diff[key])
                const nodes = sections[i].querySelectorAll('[data-position]')
                const keyNodes = lists[i].querySelectorAll('[data-position-key]')

                nodes.forEach(node => {
                    const attr = node.getAttribute('data-position')
                    node.style.display = 'block'
                    if(!(keys.includes(attr))) {
                        node.style.display = 'none'
                    }
                })

                keyNodes.forEach(node => {
                    const attr = node.getAttribute('data-position-key')
                    node.style.display = 'block'
                    if(!(keys.includes(attr))) {
                        node.style.display = 'none'
                    }
                })

                i++
            }

            

            break;
        }
        case 'same': {
            const same = {}
            let i = 0

            for(let key in clonedData) {
                same[key] = {}
                for(let k in clonedData[key]) {
                    const sorted = clonedData[key][k].sort()
                    if(sorted[0] === sorted[sorted.length - 1]) {
                        same[key][k] = clonedData[key][k]
                    }
                }
         


                const keys = Object.keys(same[key])

                const nodes = sections[i].querySelectorAll('[data-position]')
                const keyNodes = lists[i].querySelectorAll('[data-position-key]')

                nodes.forEach(node => {
                    const attr = node.getAttribute('data-position')
                    node.style.display = 'block'
                    if(!(keys.includes(attr))) {
                        node.style.display = 'none'
                    }
                })

                keyNodes.forEach(node => {
                    const attr = node.getAttribute('data-position-key')
                    node.style.display = 'block'
                    if(!(keys.includes(attr))) {
                        node.style.display = 'none'
                    }
                })

                i++
            }

            break;
        }
        case 'all':

            nodes.forEach(node => {
                node.style.display = 'block'
            })

            keyNodes.forEach(node => {
                node.style.display = 'block'
            })

            break;
    }
}


export {
    initCompareProducts,
    changeHandler
}