var boilerplate = {};

boilerplate.loadFunction = function () {
	if (Enabler.isInitialized()) {
		init();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.INIT, init)
	}
}

function init() {
	if (Enabler.isPageLoaded()) {
		boilerplate.processAd ();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, boilerplate.processAd);
	}
}

boilerplate.processAd = function () {
	boilerplate.DynamicContentElements();
	
	var heroImg = document.getElementById("leftper");//Load hero image
	heroImg.onload = function() {
		document.getElementById("banner").className = "show"; //show banner
		boilerplate.executeAnimation();
	};
}

boilerplate.DynamicContentElements = function () {

	// Dynamic Content variables
	Enabler.setProfileId(10428225);
    var devDynamicContent = {};

    devDynamicContent.TAFEDynamicBannersOnlineDigital_320x50 = [{}];
    devDynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0]._id = 0;
    devDynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].unique_id = 1;
    devDynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].ad_name = "Business_Administration_1";
    devDynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].course_area = "Business Administration";
    devDynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].logo = {};
    devDynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].logo.Type = "file";
    devDynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].logo.Url = "https://s0.2mdn.net/ads/richmedia/studio/60006638/60006638_20180807215853334_logos.png";
    devDynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].hero_image = {};
    devDynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].hero_image.Type = "file";
    devDynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].hero_image.Url = "https://s0.2mdn.net/ads/richmedia/studio/60006638/60006638_20181017204209695_accounting_finance_320x50.png";
    devDynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].be_image1 = {};
    devDynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].be_image1.Type = "file";
    devDynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].be_image1.Url = "https://s0.2mdn.net/ads/richmedia/studio/60006638/60006638_20180816183043834_be_1.png";
    devDynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].be_image2 = "";
    devDynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].backgroundColor = "#cd8bda";
    devDynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].bub_backgroundColor = "#AA7BC9";
    devDynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].textColour = "#FFFFFF";
    devDynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].fontSize_HeadlineText = 20;
    devDynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].frame1ButtonText = "BE AMBITIOUS";
    devDynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].frame2HeadlineText = "BE EMPLOYED FASTER.";
    devDynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].frame2SubText = "Start your <span>Business Administration<\/span> course online.";
    devDynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].frame4Text = "Start anytime. <br>Study on your terms.";
    devDynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].fontSize_Text = 15;
    devDynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].rtoCode = "RTO 90003";
    devDynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].buttonText = "ENROL NOW";
    devDynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].buttonColour = "#000000";
    devDynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].buttonTextColour = "#FFFFFF";
    devDynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].exitUrl = "\/digital\/business-administration";
    devDynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].isDefault = false;
    devDynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].isActive = true;
    Enabler.setDevDynamicContent(devDynamicContent);
	

	f1_ctaText = document.getElementById('fstFramebuttontxt');
	f2_headline_text = document.getElementById('dy_headline');
	f2_subText = document.getElementById('dytxt2');
	//f3_text = document.getElementById('dytxt3');
	f4_text = document.getElementById('dytxt4');
	logo = document.getElementById('talogo');
	be_image = document.getElementById('betxt');
	hero_image = document.getElementById('leftper');
	rto_code = document.getElementById('rto-code');
	banner = document.getElementById('banner');
	bub1 = document.getElementById('bub1');
	bub2 = document.getElementById('bub2');
	cta = document.getElementById('cta');
	cta_text = document.getElementById('buttontxt');

	banner.style.cssText = "background-color:" + dynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].backgroundColor + ";";
	bub1.style.cssText = bub2.style.cssText = "background-color:" + dynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].bub_backgroundColor + ";";
	logo.src = dynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].logo.Url;
	be_image.src = dynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].be_image1.Url;
	hero_image.src = dynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].hero_image.Url;
	//f1_ctaText.innerHTML = dynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].frame1ButtonText;
	f2_headline_text.innerHTML = dynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].frame2HeadlineText;
	f2_headline_text.style.cssText = "font-size:" + dynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].fontSize_HeadlineText + "px; color:" + dynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].textColour + ";";
	f2_subText.innerHTML = dynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].frame2SubText;
	//f3_text.innerHTML = dynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].frame3Text;
	f4_text.innerHTML = dynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].frame4Text;
	f2_subText.style.cssText = f4_text.style.cssText = "font-size:" + dynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].fontSize_Text + "px; color:" + dynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].textColour + "; line-height:" + (dynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].fontSize_Text+1) + "px;";
	rto_code.innerHTML = dynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].rtoCode;
	cta_text.innerHTML = dynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].buttonText;
	cta_text.style.cssText = "color:" + dynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].buttonTextColour + ";";
	cta.style.cssText = "; background-color:" + dynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].buttonColour + ";";
	exitUrl = dynamicContent.TAFEDynamicBannersOnlineDigital_320x50[0].exitUrl.Url;

	boilerplate.clickTag();
}

//Clicktag
boilerplate.clickTag = function () {
	click_through.onclick = function () {
		Enabler.exitOverride('Background Exit', exitUrl);
	};		
};

//Animate contents
boilerplate.executeAnimation = function (){
	
	var tl = new TimelineMax({repeat:0, repeatDelay:10});
	//var tl = new TimelineMax({onComplete:completeHandler});

	animate();
	
	function animate () {
		
	tl.to('#dy_headline',.50,{opacity:1, ease: Power2. easeIn},'+=0.0')
	.to('#dy_headline',.50,{opacity:0, ease: Power2. easeInOut},'+=1.5')
	.to('#betxt', 0.5,{opacity:0, ease: Power2. easeInOut}, '-=0.5')
	.to('#leftper', 0.5,{opacity:1, ease: Power2. easeIn}, '-=0.0')
	.to('#bub1',.50,{width:'230px', height:'37px'},'=0.5')
	.to('#bub2',.80,{opacity:0.1, width:'255px'},'-=0.5')
	.to('#dytxt2',.50,{opacity:1, ease: Power2. easeIn},'-=1.8')
	.to('#dytxt2',.50,{opacity:0, ease: Power2. easeIn},'+=1.5')
	.to('#dytxt4',.50,{opacity:1, ease: Power2. easeIn},'=0.0')
	.to('#dytxt4',.50,{opacity:0, ease: Power2. easeIn},'+=1.5')
	.to('#bub1',.50,{width:'230px', height:'37px'},'=0.0')
	.to('#bub2',.50,{width:'158px', height:'13px', top:'37px'},'-=0.5')
	.to('#leftper', 0.5,{opacity:0, ease: Power2. easeInOut}, '-=0.5')
	.to('#talogo',.50,{opacity:1},'-=0.0')
	.to('#cta',.50,{opacity:1, ease: Power2. easeIn},'-=0.3')
	.to('#rto-code',1.0,{opacity:1},'+=0.30')
	}
	
	//Cta Button Effect
	function completeHandler () {
		document.getElementById('click_through').onmouseover = function() {
			TweenMax.to('#cta', 0.3, {background:'#333333', ease: Power3.easeOut});
		}

		document.getElementById('click_through').onmouseout = function() {
			TweenMax.to('#cta', 0.3, {background:'#000000', ease: Power3.easeOut});
		}
	}
}

window.onload = function() {
	boilerplate.loadFunction ();
}