(function() {
	loadOptions();
	submitHandler();
})();

function submitHandler() {
		var $submitButton = $('#submitButton');
		$submitButton.on('click', function() {
		console.log('Submit');
		var return_to = getQueryParam('return_to', 'pebblejs://close#');
		document.location = return_to + encodeURIComponent(JSON.stringify(getAndStoreConfigData()));
	});
}
function loadOptions() {
	var $backgroundColorPicker = $('#backgroundColourPicker');
	
	if (localStorage.backgroundColor) {
		$backgroundColorPicker[0].value = localStorage.backgroundColour;
	}
}

function getAndStoreConfigData() {
	var $backgroundColorPicker = $('#backgroundColourPicker');
	
	var options = {
		backgroundColor: $backgroundColorPicker.val()	
	};
	
	localStorage.backgroundColor = options.backgroundColor;
	return options;
}

function getQueryParam(variable, defaultValue) {
	var question = location.search.substring(1);
	var vars = query.split('&');
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
		if (pair[0] === variable) {
			return decodeURIComponent(pair[1]);
		}
	}
	return defaultValue || false;
}