 // ==UserScript==
//
// @name           TL.net Automatic calendar refresher
// @description    After 15 minutes Refreshes Calendar every Minute
// @namespace      Yoshi
// @author         Yoshi-
// @version        0.1
// @include        http://www.teamliquid.net/*
//
// ==/UserScript==

var main = function() {
	setTimeout(function() {
		setInterval(refreshCalendar,60000)}, 900000
	);
};

var script = document.createElement('script');
script.textContent = '(' + main.toString() + ')();';
document.body.appendChild(script);
