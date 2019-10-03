$('#carouselControlsFirst').carousel({
	interval: 2000
});

$('#carouselControlsFirst .carousel-item').each(function(){
	var minPerSlide = 3;
	var next = $(this).next();
	if (!next.length) {
		next = $(this).siblings(':first');
	}
	next.children(':first-child').clone().appendTo($(this));
	
	for (var i=0; i<minPerSlide; i++) {
		next=next.next();
		if (!next.length) {
			next = $(this).siblings(':first');
		}
		
		next.children(':first-child').clone().appendTo($(this));
	}
});


$('#carouselControlsSecond').carousel({
	interval: 2000
});


$('#carouselControlsSecond .carousel-item').each(function(){
	var minPerSlide = 2;
	var next = $(this).next();
	if (!next.length) {
		next = $(this).siblings(':first');
	}
	next.children(':first-child').clone().appendTo($(this));
	
	for (var i=0; i<minPerSlide; i++) {
		next=next.next();
		if (!next.length) {
			next = $(this).siblings(':first');
		}
		
		next.children(':first-child').clone().appendTo($(this));
	}
});