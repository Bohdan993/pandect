// import { timers } from 'jquery';
import {

	InitCardSlider,
  	InitSingleSlider,
	initCountdownClock,
	initAccordeon,
	initTabs,
	InitScrollBarPlugin,
	InitBurgerMenu,
	InitPopup,
	InitAnimation,
	InitCartPopup,
	InitButtonsStopPropagation,
	InitMaskInput,
	initWebpSupportCheck,
	// initCaptcha
	
} from '../model/index.js';



import {
	$accordeons,
	$fields,
	$tabs,
	$sections,
	$cardsSliderTrack,
	$headerMenuWrap,
	$burgerBtn,
	$oneClickBuyButton,
	$oneClickBuyPopup,
	$headerBtn,
	$callBackPopup,
	$headerBtnMobile,
	$animationBlocks,
	$headerCart,
	$cartPopup,
	$cardsSlider,
	$thumbnailSlider,
	$imageSlider,
	$clockdiv,
	$cardButtons,
	$headerThanksPopupTrigger,
	$thanksPopup,
	$phones,
	$body,
	// $grecaptchaContainer1,
	// $grecaptchaContainer2
} from '../view/index.js';


const app = {
	init() {
		this.ics()
    	this.iss()
		this.icc()
		this.ian()
		this.it()
		this.isbp()
		this.ibm()
		this.ip()
		this.ia()
		this.icp()
		this.ibsp()
		this.imi()
		this.iwsc()
		// this.ic()
		
	},
	ics(){
		if($cardsSlider) {
			InitCardSlider($cardsSlider)
		}
	},
	iss(){
		if($imageSlider && $thumbnailSlider) {
			InitSingleSlider($imageSlider, $thumbnailSlider)
		}
	},
	icc(){
		if($clockdiv) {
			initCountdownClock($clockdiv)
		}
	},
	ian(){
		if($accordeons && $fields) {
			initAccordeon($accordeons, $fields, 25)
		}
	},
	it(){
		if($tabs && $sections) {
			initTabs($tabs,$sections)
		}
	},
	isbp(){
		if($cardsSliderTrack) {
			InitScrollBarPlugin($cardsSliderTrack, 'cards', 15)
		}
	},
	ibm(){
		if($burgerBtn && $headerMenuWrap) {
			InitBurgerMenu($burgerBtn, $headerMenuWrap)
		}
	},
	ip(){
		if($headerBtn && $callBackPopup) {
			InitPopup($headerBtn, $callBackPopup)
		}
		
		if($oneClickBuyButton && $oneClickBuyPopup) {
			InitPopup($oneClickBuyButton, $oneClickBuyPopup)
		}
		
		if($headerBtnMobile && $callBackPopup) {
			InitPopup($headerBtnMobile, $callBackPopup)
		}

		if($headerThanksPopupTrigger && $thanksPopup) {
			InitPopup($headerThanksPopupTrigger, $thanksPopup)
		}
		
	},
	ia(){
		if($animationBlocks) {
			InitAnimation($animationBlocks)
		}
	},
	icp(){
		if($headerCart && $cartPopup) {
			InitCartPopup($headerCart, $cartPopup)
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