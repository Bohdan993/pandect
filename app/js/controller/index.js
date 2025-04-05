// import { timers } from 'jquery';
import {
	InitPreviewSlider,
	InitCardSlider,
	InitCartPopup,
	InitBurgerMenu,
	InitScrollBarPlugin,
	InitSeoTextToggle,
	InitPlayVideo,
	InitPopup,
	InitAnimation,
	initAccordeon,
	InitButtonsStopPropagation,
	InitMaskInput,
	initWebpSupportCheck,
	// initCaptcha
} from '../model/index.js';



import {
	$body,
	$headerCart,
	$cartPopup,
	$headerMenuWrap,
	$burgerBtn,
	$cardsSliderTrack,
	$newsContainer,
	$seoTextArticle,
	$seoTextBtn,
	$installationCenterPlayVideo,
	$headerBtn,
	$callBackPopup,
	$headerBtnMobile,
	$animationBlocks,
	$accordeons,
	$fields,
	$cardsSlider,
	$previewSlider,
	$cardButtons,
	$headerThanksPopupTrigger,
	$thanksPopup,
	$phones,
	$oneClickBuyButtons,
	$oneClickBuyPopup,
	// $grecaptchaContainer1,
	// $grecaptchaContainer2

} from '../view/index.js';


const app = {
	init() {
		// this.ips()
		this.ics()
		this.icp()
		this.ibm()
		this.isbp()
		this.istt()
		this.ipv()
		this.ip()
		this.ia()
		this.ian()
		this.ibsp()
		this.imi()
		this.iwsc()
		// this.ic()
	},
	ips() {
		if($previewSlider) {
			InitPreviewSlider($previewSlider)
		}
	},
	ics(){
		if($cardsSlider) {
			InitCardSlider($cardsSlider)
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
	isbp(){
		if($cardsSliderTrack) {
			InitScrollBarPlugin($cardsSliderTrack, 'cards', 15)
		}
		
		if($newsContainer) {
			InitScrollBarPlugin($newsContainer, 'news', 5)
		}
		
	},
	istt(){
		if($seoTextBtn && $seoTextArticle) {
			InitSeoTextToggle($seoTextBtn, $seoTextArticle)
		}
	},
	ipv(){
		if($installationCenterPlayVideo) {
			InitPlayVideo($installationCenterPlayVideo)
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

		if($oneClickBuyButtons.length && $oneClickBuyPopup) {
			$oneClickBuyButtons.forEach($oneClickBuyButton => {
				InitPopup($oneClickBuyButton, $oneClickBuyPopup);
			})
		}
		
	},
	ia(){
		if($animationBlocks) {
			InitAnimation($animationBlocks)
		}
		
	},
	ian() {
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