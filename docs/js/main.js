$(document).ready(function() {

	// Выпадающее меню
    const pull = $('#navToggle')
    const menu = $('#navMenu')
	const navBar = $('.nav-bar span')
   
	// Выезжает справа
	$(pull).on('click', function(){
        $(menu).toggleClass('active')
        $(this).toggleClass('active')
        $(navBar).toggleClass('active')
	})
	$(window).resize(function(){
		$(menu).removeClass('active')
		$(pull).removeClass('active')
	})

	// Слайдер
	$('.flexslider').flexslider({
		animation: "fade",
		animationSpeed: 600,
		slideshow: false,
		controlNav: false,
		directionNav: false,
		keyboard: false,
		start: function(slider){
			$('.owl-next').click(function(event){
				event.preventDefault()
				slider.flexAnimate(slider.getTarget("next"))
			})
			$('.owl-prev').click(function(event){
				event.preventDefault()
				slider.flexAnimate(slider.getTarget("prev"))
			})
		}
	})
	$(".owl-carousel").owlCarousel({
		items: 1,
		nav: true,
		navText: [
			'<div class="slider-small__controls slider-small__control-left"><img src="./img/slide-control-left.svg" alt="left"></div>',
			'<div class="slider-small__controls slider-small__control-right"><img src="./img/slide-control-right.svg" alt="left"></div>'
		],
		dots: false,
		loop: true,
		smartSpeed: 150,
		stagePadding: 0,
		responsive: {
			1200:{
				stagePadding: 80
			}
		}
	})

	// Маска для поля формы 'Телефон*'
	$('#phone').inputmask({
		'mask': '+7(999) 999-9999', 
		showMaskOnHover: false
	})

	// Модальное окно popup-form
    $('.js-button-form').click(function(){
		$('.js-overlay-form').fadeIn()
	})
    $('.js-close-form').click(function(){
		$('.js-overlay-form').fadeOut()
	})
    $(document).mouseup(function (e) {
        const popup = $('.js-popup-form')
        if (e.target!=popup[0]&&popup.has(e.target).length === 0) { 
			$('.js-overlay-form').fadeOut()
        }
	})

	// Модальное окно thank
	// При нажатие 'отправить'
	$('.js-form-btn').click(function(){
		$('.js-overlay-form').fadeOut()
		$('.js-overlay-thank').fadeIn()
	})
    $('.js-close-thank').click(function(){
		$('.js-overlay-thank').fadeOut()
	})
    $(document).mouseup(function (e) {
        const popup = $('.js-popup-thank')
        if (e.target!=popup[0]&&popup.has(e.target).length === 0) { 
			$('.js-overlay-thank').fadeOut()
        }
	})

	// Модальное окно popup-electro-voice
    $('.js-button').click(function(){
        $('.js-overlay').fadeIn()
	})
    $('.js-close').click(function(){
        $('.js-overlay').fadeOut()
	})
    $(document).mouseup(function (e) {
        const popup = $('.js-popup')
        if (e.target!=popup[0]&&popup.has(e.target).length === 0) { 
            $('.js-overlay').fadeOut()
        }
	})
})
