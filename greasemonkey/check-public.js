// ==UserScript==
// @name           check-public
// @namespace      Erin
// @include        http://www.geni.com/people/*
// @include        http://www.geni.com/profile/*
// ==/UserScript==

var flashNotice = document.getElementById('flash_notice');
if (!flashNotice || !flashNotice.innerHTML || (flashNotice.innerHTML
		&& flashNotice.innerHTML.indexOf('Cannot make profile public') == -1)) {
	var el = document.getElementsByTagName("a");
	for (var i = 0; i <= el.length; i++){
		if (el[i] && el[i].innerHTML && el[i].innerHTML.indexOf("Check Public") >= 0) {
			var f = document.createElement('form');
			f.style.display = 'none';
			el[i].parentNode.appendChild(f);
			f.method = 'POST';
			f.action = el[i].href;
			f.submit();
		}
	}
}
