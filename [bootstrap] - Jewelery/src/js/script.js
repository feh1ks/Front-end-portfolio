$(document).ready(function(){

	// Offset for Main Navigation
	$('#mainNav').affix({
	    offset: {
	        top: 100
	    }
	})

	$(".owl-carousel").owlCarousel({

        // Options
        navText:        ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        loop:           true, 
        items:          1,    
        margin:         10,   
        slideBy:        1,    
        nav:            true, 
        dots: 			false,
        merge:          false,
        mergeFit:       true, 
        pullDrag:       true, 
        freeDrag:       false,
        mouseDrag:      true, 
        touchDrag:      true, 
        dotsEach:       false,
        autoWidth:      false,
        navRewind:      true, 
        stagePadding:   0

    });

});