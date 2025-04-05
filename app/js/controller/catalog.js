import {
	InitCardSlider,
	InitNoUiSlider,
	initTabs,
	InitSelects,
	initAccordeon,
	InitScrollBarPlugin,
	InitCatalogFiltersShow,
	InitCatalogResponsiveLayout,
	InitCartPopup,
	InitBurgerMenu,
	InitPopup,
	InitAnimation,
	InitSeoTextToggle,
	InitButtonsStopPropagation,
	InitMaskInput,
	initWebpSupportCheck,
	// initCaptcha
} from '../model/index.js';



import {
	$body,
	$noUiSlider,
	$productTabs,
	$viewTabs,
	$catalogCardsLists,
	$selects,
	$catalogInputs,
	$accordeons,
	$fields,
	$cardsSliderTrack,
	$catalogFilterButton,
	$catalogFilters,
	$catalogFiltersClose,
	$headerCart,
	$cartPopup,
	$burgerBtn,
	$headerMenuWrap,
	$headerBtn,
	$callBackPopup,
	$headerBtnMobile,
	$animationBlocks,
	$seoTextBtn,
	$seoTextArticle,
	$cardsSlider,
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
		this.ics()
		this.inus()
		this.it()
		this.is()
		this.ian()
		this.isbp()
		this.icfs()
		this.icrl()
		this.icp()
		this.ibm()
		this.ip()
		this.ia()
		this.istt()
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
	inus() {
		if($noUiSlider && $catalogInputs) {
			InitNoUiSlider($noUiSlider, $catalogInputs)
		}
	},
	it() {
		if($productTabs) {
			initTabs($productTabs)
		}
		
		if($viewTabs && $catalogCardsLists) {
			initTabs($viewTabs, $catalogCardsLists)
		}
	},
	is() {
		if($selects) {
			InitSelects($selects)
		}
	},
	ian() {
		if($accordeons && $fields) {
			initAccordeon($accordeons, $fields)
		}
	},
	isbp() {
		if($cardsSliderTrack) {
			InitScrollBarPlugin($cardsSliderTrack, 'cards', 15)
		}
	},
	icfs() {
		if($catalogFilterButton && $catalogFiltersClose && $catalogFilters) {
			InitCatalogFiltersShow($catalogFilterButton, $catalogFiltersClose, $catalogFilters)
		}
	},
	icrl(){
		if($catalogCardsLists && $viewTabs) {
			InitCatalogResponsiveLayout($catalogCardsLists, $viewTabs)
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
	istt(){
		if($seoTextBtn && $seoTextArticle) {
			InitSeoTextToggle($seoTextBtn, $seoTextArticle)
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