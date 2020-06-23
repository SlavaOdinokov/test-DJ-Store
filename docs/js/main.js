$(document).ready(function() {

	// Выпадающее меню
    const pull = $('#navToggle')
    const menu = $('#navMenu')
    const navBar = $('.nav-bar')
    
    $(pull).on('click', function(e){
        e.preventDefault()
        menu.slideToggle()
        $(navBar).toggleClass('active')
    })
    // При изменении ширины окна 
    $(window).resize(function(){
        const w = $(window).width()
        if(w > 640 && menu.is(':hidden')) {
            menu.removeAttr('style')
        }
    })


	// Слайдер
	$('.flexslider').flexslider({
		animation: "fade",
		animationSpeed: 600,
		slideshow: false,
		controlNav: false,
		directionNav: false,
		touch: false,

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


	// Отправка заявки 
	// Раскомментировать код ниже если тестировать на сервере!!!
	// В файле mail/mail.php поменять эл.почту в переменной $recepient
	// $('#backcall-form').submit(function() { 
	// 	if (document.form.name.value == '' || document.form.phone.value == '') {
	// 		valid = false
	// 		alert('Заполните все обязательные поля!')
	// 		return valid
	// 	}
	// 	else if ($("#check").prop('checked')) {
	// 		$.ajax({
	// 			type: "POST",
	// 			url: "mail/mail.php",
	// 			dataType: 'html',
	// 			data: $(this).serialize()
	// 		}).done(function() {
	// 			$('.js-overlay-form').fadeOut()
	// 			$('.js-overlay-thank').fadeIn()
	// 			$(this).find('input').val('')
	// 			$('#backcall-form').trigger('reset')
	// 		})
	// 		return false
	// 	} 
	// 	else {
	// 		valid = false
	// 		alert('Примите согласие обработки персональных данных!')
	// 		return valid
	// 	}
	// })
	// Раскомментировать!!!


	// Модальное окно thank
	// Закомментировать код ниже если тестировать на сервере!!!
	// При нажатие 'отправить'
	$('.js-form-btn').click(function(){
		$('.js-overlay-form').fadeOut()
		$('.js-overlay-thank').fadeIn()
	})
	// Закомментировать!!!

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
