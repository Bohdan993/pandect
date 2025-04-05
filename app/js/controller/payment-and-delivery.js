// import { timers } from 'jquery';
import {
	InitPopup,
	InitCartPopup,
	InitBurgerMenu,
	InitAnimation,
	initAccordeon,
	InitButtonsStopPropagation,
	InitMaskInput,
	initWebpSupportCheck
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
	$cardButtons,
	$headerThanksPopupTrigger,
	$thanksPopup,
	$phones,
	$body
} from '../view/index.js';


const app = {
	init() {
		this.icp()
		this.ip()
		this.ibm()
		this.ia()
		this.ian()
		this.ibsp()
		this.imi()
		this.iwsc()
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