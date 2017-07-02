$(function(){
	showBanner();
	hideBanner();
})

function showBanner(){
	$('#collapse-navbar').on('show.bs.collapse', function() {
		$('.banner').css('transform', 'translate(-50%, -40%');
	});
}

function hideBanner(){	
	$('#collapse-navbar').on('hide.bs.collapse', function() {
		$('.banner').css('transform', 'translate(-50%, -50%');
	});
}

