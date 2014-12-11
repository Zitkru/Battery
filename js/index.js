var statusdiv;

var drawStatus = function(info){
	var s = "<p><b>Battery Status</b><br/>";
	s += "Level is "+info.level + "<br/>";
	s += "Plugged in is "+info.isPlugged;
	s += "</p>";
	statusdiv.innerHTML = s;
};

var battCrit = function(info) {
	navigator.notification.alert("Your battery is SUPER low!");
	drawStatus(info);
};

var battLow = function(info) {
	navigator.notification.alert("Your battery is low!");
	drawStatus(info);
};

var battStat = function(info) {
	drawStatus(info);
};

var onDeviceReady = function() {
	//listen for battery events
	window.addEventListener("batterycritical", battCrit, false);
	window.addEventListener("batterylow", battLow, false);
	window.addEventListener("batterystatus", battStat, false);
};

function init() {
	document.addEventListener("deviceready", onDeviceReady, true);
	statusdiv = document.getElementById("status");
}