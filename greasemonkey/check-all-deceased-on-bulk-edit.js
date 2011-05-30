// ==UserScript==
// @name           check-all-deceased-on-bulk-edit
// @namespace      Erin
// @include        http://www.geni.com/list*
// ==/UserScript==

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//
//       THIS SCRIPT IS PROBABLY BROKEN. USE AT YOUR OWN RISK.
//
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

var s = document.getElementsByTagName("input"); 
for (each in s){
	if(s[each].id && s[each].id.search('is_alive_false') > 0){
		s[each].checked = 'checked';
		var fldId = s[each].id.split("_")[0];
		fldId = fldId.split("_")[0];
		document.getElementById(fldId + "_dirty").value = "true";
	}
}
