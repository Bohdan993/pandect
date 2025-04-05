// import { timers } from 'jquery';
import {
	initTabs,
	InitPopup,
	InitCartPopup,
	InitBurgerMenu,
	InitAnimation,
	initAccordeon,
	InitSeoTextToggle,
	InitSelects,
	InitButtonsStopPropagation,
	InitPortfolioSliderMain,
	InitScrollBarPlugin,
	initPortfolioSelectChangeLink,
	InitMaskInput,
	initWebpSupportCheck,
	// initCaptcha
} from '../model/index.js';



import {
	$tabs,
	$sections,
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
	$selects,
	$cardButtons,
	$portfolioSlider,
	$portfolioSliderTrack,
	$headerThanksPopupTrigger,
	$thanksPopup,
	$phones,
	$body,
	// $grecaptchaContainer1,
	// $grecaptchaContainer2
} from '../view/index.js';


const app = {
	init() {
		this.it()
		this.icp()
		this.ip()
		this.ibm()
		this.ia()
		this.ian()
		this.istt()
		this.is()
		this.ibsp()
		this.ipsm()
		this.isbp()
		this.ipscl()
		this.imi()
		this.iwsc()
		// this.ic()
	},
	it(){
		if($tabs && $sections) {
			initTabs($tabs,$sections)
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
	is() {
		if($selects) {
			InitSelects($selects)
		}
	},
	ibsp(){
		if($cardButtons) {
			InitButtonsStopPropagation($cardButtons)
		}
	},
	ipsm(){
		if($portfolioSlider){
			InitPortfolioSliderMain($portfolioSlider)
		}
	},
	isbp(){
		if($portfolioSliderTrack) {
			InitScrollBarPlugin( $portfolioSliderTrack, 'portfolio-slider', 15)
		}
		
	},
	ipscl(){
		if($selects) {
			initPortfolioSelectChangeLink($selects)
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