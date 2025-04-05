// import { timers } from 'jquery';
import {
	InitPortfolioSlider,
	InitLightGallery,
	InitScrollBarPlugin,
	InitSeoTextToggle,
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
	$lightGallery,
	$portfolioSingleSliderTrack,
	$seoTextArticle,
	$seoTextBtn,
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
	$portfolioSingleSlider,
	$cardButtons,
	$headerThanksPopupTrigger,
	$thanksPopup,
	$phones,
	$body

} from '../view/index.js';


const app = {
	init() {
		this.ips()
		this.ilg()
		this.isbp()
		this.istt()
		this.icp()
		this.ip()
		this.ibm()
		this.ia()
		this.ian()
		this.ibsp()
		this.imi()
		this.iwsc()
	},
	
	ips(){
		if($portfolioSingleSlider) {
			InitPortfolioSlider($portfolioSingleSlider)
		}
	},
	ilg(){
		if($lightGallery) {
			InitLightGallery($lightGallery)
		}
	},
	isbp(){
		if($portfolioSingleSliderTrack) {
			InitScrollBarPlugin($portfolioSingleSliderTrack, 'portfolio-single', 5)
		}
	},
	istt(){
		if($seoTextBtn && $seoTextArticle) {
			InitSeoTextToggle($seoTextBtn, $seoTextArticle)
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