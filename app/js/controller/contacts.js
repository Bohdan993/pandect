import {
	InitPopup,
	InitCartPopup,
	InitBurgerMenu,
	InitScrollBarPlugin,
	InitCardSlider,
	InitAnimation,
	initAccordeon,
	InitContactsTabs,
	InitButtonsStopPropagation,
	InitMaskInput,
	initWebpSupportCheck,
	// initCaptcha
} from '../model/index.js';



import {
	$headerBtn,
	$callBackPopup,
	$headerBtnMobile,
	$headerCart,
	$cartPopup,
	$burgerBtn,
	$headerMenuWrap,
	$cardsSliderTrack,
	$animationBlocks,
	$accordeons,
	$fields,
	$addressBlocks,
	$contactMap,
	$cardsSlider,
	$cardButtons,
	$headerThanksPopupTrigger, 
	$thanksPopup,
	$phones,
	$body,
	$oneClickBuyButtons,
	$oneClickBuyPopup,
	// $grecaptchaContainer1,
	// $grecaptchaContainer2
} from '../view/index.js';


const app = {
	init() {
		this.icp()
		this.ip()
		this.ibm()
		this.ics()
		this.isbp()
		this.ia()
		this.ian()
		this.ict()
		this.ibsp()
		this.imi()
		this.iwsc()
		// this.ic()
	},
	ip(){
		if($headerBtn && $callBackPopup) {
			InitPopup($headerBtn, $callBackPopup)
		}
		
		if($headerBtnMobile && $callBackPopup) {
			InitPopup($headerBtnMobile, $callBackPopup)
		}

		if($headerThanksPopupTrigger && $thanksPopup) {
			InitPopup($headerThanksPopupTrigger, $thanksPopup)
		}

		if($oneClickBuyButtons.length && $oneClickBuyPopup) {
			$oneClickBuyButtons.forEach($oneClickBuyButton => {
				InitPopup($oneClickBuyButton, $oneClickBuyPopup);
			})
		}
		
	},
	icp(){
		if($headerCart && $cartPopup) {
			InitCartPopup($headerCart, $cartPopup)
		}
		
	},
	ibm(){
		if($burgerBtn && $headerMenuWrap) {
			InitBurgerMenu($burgerBtn, $headerMenuWrap)
		}
		
	},
	ics(){
		if($cardsSlider) {
			InitCardSlider($cardsSlider)
		}
	},
	isbp(){
		if($cardsSliderTrack) {
			InitScrollBarPlugin($cardsSliderTrack, 'cards', 15)
		}
	},
	ia(){
		if($animationBlocks) {
			InitAnimation($animationBlocks)
		}
	},
	ian(){
		if($accordeons && $fields) {
			initAccordeon($accordeons, $fields)
		}
	},
	ict(){
		if($addressBlocks && $contactMap) {
			InitContactsTabs($addressBlocks, $contactMap)
		}
	},
	ibsp(){
		if($cardButtons) {
			InitButtonsStopPropagation($cardButtons)
		}
	},
	imi(){
		if($phones) {
			InitMaskInput($phones)
		}
	},
	iwsc(){
		initWebpSupportCheck($body)
	},
	// ic(){
	// 	initCaptcha({
	// 		$grecaptchaContainer1,
	// 		$grecaptchaContainer2
	// 	})
	// }
}


export {
	app
}