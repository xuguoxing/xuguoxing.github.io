$(document).ready ( function() {
    i18n.init({ fallbackLng: 'pt', detectLngQS: 'lang' }, function(t) {
	$("html").i18n();
    });
});	
