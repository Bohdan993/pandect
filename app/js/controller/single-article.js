// import { timers } from 'jquery';
import {
	InitCardSlider,
	InitPopup,
	InitCartPopup,
	InitBurgerMenu,
	InitAnimation,
	initAccordeon,
	InitSeoTextToggle,
	InitScrollBarPlugin,
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
	$animationBlocks,
	$accordeons,
	$fields,
	$seoTextBtn,
	$seoTextArticle,
	$cardsSliderTrack,
	$cardsSlider,
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
		this.icp()
		this.ip()
		this.ibm()
		this.ia()
		this.ian()
		this.istt()
		this.isbp()
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
	istt(){
		if($seoTextBtn && $seoTextArticle) {
			InitSeoTextToggle($seoTextBtn, $seoTextArticle)
		}
	},
	isbp(){
		if($cardsSliderTrack) {
			InitScrollBarPlugin($cardsSliderTrack, 'cards', 15)
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