// (function() {
// 	loadOptions();
// 	submitHandler();
// })();

function getConfigData() {
    var backgroundColorPicker = document.getElementById('backgroundColourPicker');
 
    var options = {
      'background_color': backgroundColorPicker.value
    };
    // Save for next launch
    localStorage['backgroundColor'] = options['backgroundColor'];
    console.log('Got options: ' + JSON.stringify(options));
    return options;
 }
  
 function getQueryParam(variable, defaultValue) {
    var query = location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');
      if (pair[0] === variable) {
        return decodeURIComponent(pair[1]);
      }
    }
    return defaultValue || false;
 }

 var submitButton = document.getElementById('submitButton');
 submitButton.addEventListener('click', function() {
    console.log('Submit');
    // Set the return URL depending on the runtime environment
    var return_to = getQueryParam('return_to', 'pebblejs://close#');
    document.location = return_to + encodeURIComponent(JSON.stringify(getConfigData()));
 });
	
(function() {
	var backgroundColorPicker = document.getElementById('backgroundColourPicker');
	if(localStorage['backgroundColor']) {
		backgroundColorPicker.value = localStorage['backgroundColor'];
	}
})();