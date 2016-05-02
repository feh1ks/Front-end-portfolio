// jQuery for page scrolling feature - requires jQuery Easing plugin
$('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 71
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Offset for Main Navigation
$('#mainNav').affix({
    offset: {
        top: 100
    }
})

var el = $('.circle'),
    inited = false;

el.appear({ force_process: true });

el.on('appear', function() {
    if (!inited) {
        el.circleProgress({
            size: 160,
            startAngle: -Math.PI/2,
            thickness: 16,
        });
        inited = true;
    }
});

$('#circle-1').circleProgress({
    value: 0.9,
    fill: {
        color: "#30bae7"
    }
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(90 * progress) + '<i>%</i>');
});

$('#circle-2').circleProgress({
    value: 0.75,
    fill: {
        color: "#d74680"
    }
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(75 * progress) + '<i>%</i>');
});

$('#circle-3').circleProgress({
    value: 0.7,
    fill: {
        color: "#15c7a8"
    }
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(70 * progress) + '<i>%</i>');
});

$('#circle-4').circleProgress({
    value: 0.85,
    fill: {
        color: "#eb7d4b"
    }
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(85 * progress) + '<i>%</i>');
});

// Isotope
$(window).load(function(){
    $(function(){
        var $container = $('#posts');

        $container.isotope({
            itemSelector: '.item',
            layoutMode: 'fitRows'
        });

        $('#filters').on( 'click', 'a', function() {
            var filterValue = $(this).attr('data-filter');
            $('#filters a').removeClass('active');
            $(this).addClass('active');
            $container.isotope({ filter: filterValue });
        });
    }); 
});

//Page Preloader
$(window).load(function() { 
    $("#loader").delay(400).fadeOut(); 
    $(".mask").delay(600).fadeOut("slow");
});

// WOW js
var wow = new WOW(
    {
        boxClass: 'reveal',
        mobile:   false,
        offset:   200
    }
);
wow.init();
