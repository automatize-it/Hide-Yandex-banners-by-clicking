﻿var loginTimer;

function doact(){
		
	if (loginTimer) {
		window.clearTimeout(loginTimer);
	}

	var what = $('a:contains("Мешает просмотру контента")').text();
	if (what && what != ""){
		
		$('a:contains("Мешает просмотру контента")').each(function() {
			
			var wha = $(this)[0].outerHTML;
			//alert($($.parseHTML(wha)).attr('class'));
			var clickid = $($.parseHTML(wha)).attr('class');
			document.getElementsByClassName(clickid)[0].click();
		});
	}
	else{
	
		loginTimer = window.setTimeout(doact, 1000);
	}
	
}

window.addEventListener("load", doact() );

