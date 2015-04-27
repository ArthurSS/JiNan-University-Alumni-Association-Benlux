function getElementsByAttribute(attribute,attributeValue) {
	var elementArray= new Array();
	var matchedArray=new Array();
	if (document.all) {
		elementArray=document.all;
	} else {
		elementArray=document.getElementsByTagName("*");
	}
	for (var i=0; i<elementArray.length; i++) {
		if(attribute=="class") {
			var pattern=new RegExp("(^| )"+attributeValue+"( |$)");
			if (pattern.test(elementArray[i].className)) {
				matchedArray[matchedArray.length]=elementArray[i];
			}
	    }
		else if (attribute=="for") {
             if(elementArray[i].getAttribute("htmlFor") || elementArray[i].getAttribute("for")) {
             	if (elementArray[i].htmlFor == attributeValue) {
             		matchedArray[matchedArray]=elementArray[i];
             	}
             }  
		}
		else if (elementArray[i].getAttribute(attribute)==attributeValue) {
			matchedArray[matchedArray.length]=elementArray[i];
		}
	}
	return matchedArray;
}
function addLoadListener (func) {
	if (typeof window.addEventListener!="undefined") {
		window.addEventListener("load",func,false);                    //------标准方法
	} else if(typeof document.addEventListener!="undefined") {
		document.addEventListener("load",func,false);
	} else if(typeof window.attachEvent !="undefined") {
		window.attachEvent("onload",func);                             //------IE方法
	} else {
		var oldfunc=window.onload;
		if (typeof window.onload!="function") {
			window.onload=func;
		} else {
			window.onload=function () {
				oldfunc();
				func();
			}
		}
	}
}
function setCookie(name,value) {
	var Days = 30;
	var exp = new Date();
	exp.setTime(exp.getTime() + Days*24*60*60*1000);
	document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}

//读取cookies
function getCookie(name) {
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	if(arr=document.cookie.match(reg)) {
		return (arr[2]);
	} else {
		return null;
	}      
}

//删除cookies
function delCookie(name) {
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval=getCookie(name);
	if(cval!=null)
		document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}

function changeLang() {
	var englishs=document.getElementsByClassName("englishs");
	var chineses=document.getElementsByClassName("chineses");
	if (getCookie("language")==null || getCookie("language")=="chineses") {
		for (var i=0;i<englishs.length;i++) {
			englishs[i].style.display="none";
		}
		for (var j=0;j<chineses.length;j++) {
			chineses[j].style.display="inline";
		}
	} else if (getCookie("language")=="englishs") {
		for (var i=0;i<englishs.length;i++) {
			englishs[i].style.display="inline";
		}
		for (var j=0;j<chineses.length;j++) {
			chineses[j].style.display="none";
		}
	}

	var englishss=getElementsByAttribute("name","englishs");
	var chinesess=getElementsByAttribute("name","chineses");
	if (getCookie("language")==null || getCookie("language")=="chineses") {
		for (var i=0;i<englishss.length;i++) {
			englishss[i].style.display="none";
		}
		for (var j=0;j<chinesess.length;j++) {
			chinesess[j].style.display="block";
		}
	} else if (getCookie("language")=="englishs") {
		for (var i=0;i<englishss.length;i++) {
			englishss[i].style.display="block";
		}
		for (var j=0;j<chinesess.length;j++) {
			chinesess[j].style.display="none";
		}
	}
}
addLoadListener(changeLang);
function englishs() {
	delCookie("language");
	setCookie("language","englishs");
	changeLang();
}
function chineses() {
	delCookie("language");
	setCookie("language","chineses");
	changeLang();
}