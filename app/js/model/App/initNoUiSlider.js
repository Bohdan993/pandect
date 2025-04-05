import {
    noUiSlider
} from "../../../libs/libs.js"



const InitNoUiSlider = (slider, inputs) => {

    const min = [parseFloat(slider.dataset.rangeMin || 0)];
    const max = [parseFloat(slider.dataset.rangeMax || 5000)];
    const decimals = 0;

    const options = {
        connect: true,
        range: {
          min, max
        }
    }


    if (max && min != max) {
        options['start'] = [ parseFloat(slider.dataset.startMin || 0), parseFloat(slider.dataset.startMax || 3500) ]
      } else {
        options['start'] = parseFloat(slider.dataset.startMin || 0);
      }

    noUiSlider.create(slider, options);

    slider.noUiSlider.on('update', function (values, handle) {
        const value = values[handle];
        inputs[handle].value = parseInt(value);
    });
    
    function forEachInput(input, ind, inputsArr) {
        const arr = Array(inputsArr.length).fill(null)

        input.addEventListener('change', function () {
            arr[ind] = this.value
            slider.noUiSlider.set(arr);

            if(window.ocfilterObject) {
                const ocfilter = window.ocfilterObject;
                const positions = slider.noUiSlider.getPositions();
                const values = slider.noUiSlider.get(true);
                const $element = $(slider);
                ///
                ocfilter.params.remove.call(ocfilter, $element.data().optionId);
                if ((positions[1] - positions[0]) < 100) {
                    ocfilter.params.set.call(ocfilter, $element.data().optionId, values[0].toFixed(decimals) + '-' + values[1].toFixed(decimals));
                  }
                ///
                ocfilter.update.call(ocfilter, $element);
            }
        });
    }

    inputs.forEach(forEachInput)
}


export {
    InitNoUiSlider
}