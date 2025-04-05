import {
	InitScrollBarPlugin,
	InitBurgerMenu,
	InitPopup,
	InitCartPopup,
	initAccordeon,
	InitButtonsStopPropagation,
	initCompareProducts,
	initTabs,
	InitMaskInput,
	initWebpSupportCheck
} from '../model/index.js';



import {
	$body,
	$compareMain,
	$headerMenuWrap,
	$burgerBtn,
	$compareActionsClean,
	$compareActionsMore,
	$compareDeletePopup,
	$compareFilterPopup,
	$callBackPopup,
	$headerBtnMobile,
	$headerBtn,
	$headerCart,
	$cartPopup,
	$accordeons,
	$fields,
	$cardButtons,
	$filterFields,
	$dataPositions,
	$compareCharacteristicsLists,
	$tabs,
	$sections,
	$headerThanksPopupTrigger, 
	$thanksPopup,
	$phones,
	$compareSections,
	$oneClickBuyButtons,
	$oneClickBuyPopup,
	// $grecaptchaContainer1,
	// $grecaptchaContainer2
} from '../view/index.js';


const app = {
	init() {
		this.isbp()
		this.ibm()
		this.ip()
		this.icp()
		this.ian()
		this.icpp()
		this.it()
		this.ibsp()
		this.imi()
		this.iwsc()
		// this.ic()
	},
	isbp(){
		if($compareMain) {
			InitScrollBarPlugin($compareMain, 'compare', 10)
		}
	},
	ibm(){
		if($burgerBtn && $headerMenuWrap) {
			InitBurgerMenu($burgerBtn, $headerMenuWrap)
		}	
	},
	ip(){
		if($compareActionsClean && $compareDeletePopup) {
			InitPopup($compareActionsClean, $compareDeletePopup, true)
		}
		
		if($compareActionsMore && $compareFilterPopup) {
			InitPopup($compareActionsMore, $compareFilterPopup, true)
		}
		
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
	ian() {
		if($accordeons && $fields) {
			initAccordeon($accordeons, $fields)
		}
	},

	icpp(){
		initCompareProducts($filterFields, $dataPositions, $compareCharacteristicsLists, $compareSections)
	},
	it(){
		if($tabs && $sections) {
			initTabs($tabs,$sections)
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