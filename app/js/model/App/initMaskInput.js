import {
    IMask
} from "../../../libs/libs.js"


const InitMaskInput = (inputs) => {
    const maskOptions = {
        mask: '+{38\\0} (00) 000-00-00'
    }
    
    function forEachInput(input) {
        const mask = IMask(input, maskOptions)
    }

    inputs.forEach(forEachInput)
}


export {
    InitMaskInput
}