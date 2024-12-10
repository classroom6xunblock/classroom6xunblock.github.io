$('document').ready(function () {
	// slider
    $('.recommended-games__slider').slick({
        dots: false,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="icon-arrow-prev"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="icon-arrow-next"></i></button>',
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        rows: 1,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: true,
                    dots: true,
                    rows: 2,
                    slidesToShow: 2,
                    slidesPerRow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });
});

// search
var searchGame = function() {
	if ($( window ).width() < 1040) {
		$('#search-form')[0].submit();
	}
	if ($(this).hasClass('active')) {
		$('#search-form')[0].submit();
	} else {
		$('.search-input').on('keyup input', function(){
			$(this).next().addClass('active');
			if ($(this).val() == '') { 
				$(this).next().removeClass('active');
			} else {
				$(this).next().addClass('active');
				$('.btn-search.active').on('click', function(e){
					$('#search-form')[0].submit();
				});
			}
		});
		
		if ($('.search').hasClass('active')) {
			$('.search').removeClass('active');
		} else {
			$('.search').addClass('active');
		}
	}
}
$('#js-player-start').click(function(e) {
         e.preventDefault();
         $('.player-overlay').css("display","none");
         $('.no_display').css("display","block");
		 $('.btn-fullscreen').css("display","flex");
         //$('.game-offer__window__frame').append($(this).data('code'));

    });
	
// fullscreen
	$('body').on('click', '.btn-fullscreen', function() {
        $('.game-offer__window__frame').addClass('fullscreen').fullscreen();
        $('.exitfullscreen').removeAttr('style');
        return false;
    });
	// exit fullscreen
	$('body').on('click', '.exitfullscreen', function() {
		$(this).css('display', 'none');
		$.fullscreen.exit();
		$('.game .game__player__content').removeClass('fullscreen');
		return false;
	});	