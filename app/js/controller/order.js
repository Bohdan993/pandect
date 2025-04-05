// import { timers } from 'jquery';
import {
	initOrderAccordeon,
	InitBurgerMenu,
	InitPopup,
	InitCartPopup,
	initAccordeon,
	InitCardSlider,
	InitScrollBarPlugin,
	InitAnimation,
	InitButtonsStopPropagation,
	InitMaskInput,
	initWebpSupportCheck
} from '../model/index.js';



import {
	$accordeons,
	$fields,
	$headerMenuWrap,
	$burgerBtn,
	$headerBtn,
	$headerBtnMobile, 
	$callBackPopup,
	$headerCart,
	$cartPopup,
	$cardsSlider,
	$cardsSliderTrack,
	$animationBlocks,
	$oneClickBuyPopup,
	$oneClickBuyButton,
	$cardButtons,
	$headerThanksPopupTrigger, 
	$thanksPopup,
	$phones,
	$body
} from '../view/index.js';


const app = {
	init() {
		this.ioa()
		this.ibm()
		this.ip()
		this.icp()
		this.ian()
		this.ics()
		this.isbp()
		this.ia()
		this.ibsp()
		this.imi()
		this.iwsc()
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
	ioa(){
		if($accordeons && $fields) {
			initOrderAccordeon($accordeons, $fields)
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
	icp(){
		if($headerCart && $cartPopup) {
			InitCartPopup($headerCart, $cartPopup)
		}
	},
	ian(){
		if($accordeons && $fields) {
			initAccordeon($accordeons, $fields)
		}
	},
	ia(){
		if($animationBlocks) {
			InitAnimation($animationBlocks)
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
	}
}


export {
	app
}