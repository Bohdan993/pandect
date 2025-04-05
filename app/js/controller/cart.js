
import {
	InitCardSlider,
	InitScrollBarPlugin,
	InitPopup,
	InitBurgerMenu,
	InitAnimation,
	initAccordeon,
	InitButtonsStopPropagation,
	InitMaskInput,
	initWebpSupportCheck
} from '../model/index.js';



import {
	$body,
	$cardsSliderTrack,
	$oneClickBuyButton,
	$oneClickBuyPopup,
	$headerBtn,
	$callBackPopup,
	$headerBtnMobile,
	$burgerBtn, 
	$headerMenuWrap,
	$animationBlocks,
	$accordeons,
	$fields,
	$cardsSlider,
	$cardButtons,
	$headerThanksPopupTrigger,
	$thanksPopup,
	$phones
} from '../view/index.js';


const app = {
	init() {
		this.ics()
		this.isbp()
		this.ip()
		this.ibm()
		this.ian()
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
	}
}


export {
	app
}