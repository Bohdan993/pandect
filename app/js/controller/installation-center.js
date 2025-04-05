import {
	InitScrollBarPlugin,
	InitSeoTextToggle,
	InitPopup,
	InitCartPopup,
	InitBurgerMenu,
	InitCardSlider,
	InitAnimation,
	initAccordeon,
	InitButtonsStopPropagation,
	InitMaskInput,
	InitImagePopup,
	initWebpSupportCheck,
	// initCaptcha
} from '../model/index.js';



import {
	$body,
	$installationImages,
	$seoTextArticle,
	$seoTextBtn,
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
	$cardsSlider,
	$cardButtons,
	$headerThanksPopupTrigger, 
	$thanksPopup,
	$phones,
	$installationCertificatesImages,
	$imagePopup,
	$oneClickBuyButtons,
	$oneClickBuyPopup,
	// $grecaptchaContainer1,
	// $grecaptchaContainer2
} from '../view/index.js';


const app = {
	init() {
		this.isbp()
		this.istt()
		this.icp()
		this.ip()
		this.ibm()
		this.ics()
		this.ia()
		this.ian()
		this.ibsp()
		this.imi()
		this.iip()
		this.iwsc()
		// this.ic()
	},
	isbp(){
		if($installationImages) {
			InitScrollBarPlugin($installationImages, 'installation', 5)
		}
		
		if($cardsSliderTrack) {
			InitScrollBarPlugin($cardsSliderTrack, 'cards', 15)
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
	iip(){
		if(	$installationCertificatesImages && $imagePopup) {
			$installationCertificatesImages.forEach(el => {
				InitImagePopup(el, $imagePopup)
			})
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