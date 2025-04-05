import { grecaptchaObserver } from "./Utils/observer.js";



const initCaptcha = ({
    $grecaptchaContainer1,
	$grecaptchaContainer2
}) => {
    const sitekey = "6LcAGHImAAAAAPDxLU-Kr1_tSMZVEIXi--GscSGx";
    function onloadCallback () {
      // Renders the HTML element with id 'example1' as a reCAPTCHA widget.
      // The id of the reCAPTCHA widget is assigned to 'widgetId1'.
      if($grecaptchaContainer1) {
        window.grecaptchaWidgets['widgetId1'] = grecaptcha.render($grecaptchaContainer1, {
            'sitekey' : sitekey
          });
      }

      if($grecaptchaContainer2){
        window.grecaptchaWidgets['widgetId2'] = grecaptcha.render($grecaptchaContainer2, {
            'sitekey' : sitekey
          });
      }

      grecaptchaObserver.ready = true;
      grecaptchaObserver.fire('Grecaptcha is ready!');
      
    };

    window.onloadCallback = onloadCallback;
}


export {
    initCaptcha
}