$(function() {



// Открытие и закрытие поиска
$(".header .search").click(function(e) {
  $('.search').addClass('active');

  e.preventDefault();
});
$(document).on('click', function(e) {
  if (!$(e.target).closest(".search").length) {
    $('.search').removeClass('active');
  }
});


// Использование атрибута data для смены цвета квадрата
$('.square').each(function(e) {
	$(this).css('background', $(this).attr('data-bg'));
});



/*   **************SLICK SLIDER*******************   */
$('.clients__slider').slick({
	dots: true,
	arrows: true,
	infinite: true,
	speed: 1000,
	slidesToShow: 4,
	slidesToScroll: 4,
	autoplay: true,
	autoplaySpeed: 5000,
	variableWidth: true,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				arrows: false,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	]
});



}); // jQuery

