const initSendForm = (formid, captchaToken) => {
    function send_form(formid) {
        
		let form_id
		let msg

        if(typeof formid === 'string') {
            form_id = '#' + formid;
        } else {
            form_id = formid;
        }

		if($(form_id)?.[0]?.tagName !== 'FORM') {
			msg = $(form_id + ' :input').serialize() 
		} else {
			msg = $(form_id).serialize();
		}

		// msg += "&captcha_token=" + captchaToken;

		$.ajax({
			type: 'POST',
			url: 'index.php?route=extension/form_processing/form_processing',
			data: msg,
			success: function(data) {
				if (data == "send_success") {
					if($(form_id)[0].tagName !== 'FORM') {
						$(form_id).find('input').val('');
					} else {
						$(form_id)[0].reset();
                        window.popupInstancesArr.forEach(element => {
                            element.hide()
                        })
					}
					
					window.popupInstancesArr.forEach((element, ind) => {
						if(element.reference.classList.contains('header__thanks-popup-trigger')) {
							window.popupInstancesArr[ind].show()
							return
						}
					})

					dataLayer && dataLayer.push({
						'event': 'sendform'
					});	

					// Object.values(window.grecaptchaWidgets).forEach(widgetId => grecaptcha.reset(widgetId));
				}
				else {
					alert('Возникла ошибка при отправке. Попробуйте пожалуйста еще раз.');
				}
			},
			error: function(xhr, str){
				alert('Error: ' + xhr.responseCode + ' Please, try again later.');
			}
		});
	}

    send_form(formid);
}


window.initSendForm = initSendForm


export {
    initSendForm
}