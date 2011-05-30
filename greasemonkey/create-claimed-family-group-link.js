// ==UserScript==
// @name           create-claimed-family-group-link.js
// @namespace      Erin
// @include        http://www.geni.com/people/*
// @include        http://www.geni.com/profile/*
// ==/UserScript==

var els = document.getElementsByTagName("meta");
var id = "";
for (var i = 0 ; i < els.length ; i++) {
	if (els[i].getAttribute("property") != null
			&& els[i].getAttribute("property") == "og:url") {
		id = els[i].content;
		id = id.replace(/.*\//, "");
	}
}

var div = document.getElementById("match_count_container").parentNode;
div.innerHTML += "<div><a href='http://www.geni.com/list?focus_id=" + id + "&group=family&claimed_status=claimed'>Find Claimed Family</a></div>";
