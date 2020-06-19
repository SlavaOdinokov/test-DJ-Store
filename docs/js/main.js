$(document).ready(function() {
	
	$(".owl-carousel").owlCarousel({
		items: 1,
		nav: true,
		navText: [
			'<div class="slider-small__controls slider-small__control-left"><img src="./img/slide-control-left.svg" alt="left"></div>',
			'<div class="slider-small__controls slider-small__control-right"><img src="./img/slide-control-right.svg" alt="left"></div>'
		],
		dots: false,
		loop: true,
		stagePadding: 80,
		smartSpeed: 150
	})


	// Модальное окно popup-electro-voice
	// Открыть по кнопке
    $('.js-button').click(function(){
        $('.js-overlay').fadeIn()
    })

    // Закрытие окна
    $('.js-close').click(function(){
        $('.js-overlay').fadeOut()
    })

    // Закрытие по клику вне окна
    $(document).mouseup(function (e) {
        var popup = $('.js-popup')
        if (e.target!=popup[0]&&popup.has(e.target).length === 0) { 
            $('.js-overlay').fadeOut()
        }
	})
	

	// Модальное окно popup-form
	// Открыть по кнопке
    $('.js-button-form').click(function(){
		$('header').css('filter','blur(2px)')
		$('main').css('filter','blur(2px)')
		$('.js-overlay-form').fadeIn()
		// $('body').addClass('noscroll')
    })

    // Закрытие окна
    $('.js-close-form').click(function(){
		$('.js-overlay-form').fadeOut()
		$('header').css('filter','none')
		$('main').css('filter','none')
		// $('body').removeClass('noscroll')
    })

    // Закрытие по клику вне окна
    $(document).mouseup(function (e) {
        var popup = $('.js-popup-form')
        if (e.target!=popup[0]&&popup.has(e.target).length === 0) { 
			$('.js-overlay-form').fadeOut()
			$('header').css('filter','none')
			$('main').css('filter','none')
			// $('body').removeClass('noscroll')
        }
	})



	// Отправка заявки 
	// Раскомментировать код ниже если тестировать на сервере!!!
	// В файле mail/mail.php поменять эл.почту в переменной $recepient
	// $(document).ready(function() {
	// 	$('#backcall-form').submit(function() { 
	// 		if (document.form.name.value == '' || document.form.phone.value == '') {
	// 			valid = false;
	// 			alert('Заполните все обязательные поля!')
	// 			return valid;
	// 		}
	// 		$.ajax({
	// 			type: "POST",
	// 			url: "mail/mail.php",
	// 			dataType: 'html',
	// 			data: $(this).serialize()
	// 		}).done(function() {
	// 			$('.js-overlay-send').fadeIn()
	// 			$('header').css('filter','blur(2px)')
	// 			$('main').css('filter','blur(2px)')
	// 			$(this).find('input').val('')
	// 			$('#backcall-form').trigger('reset')
	// 		})
	// 		return false;
	// 	})
	// })
	// Раскомментировать!!!


	// При нажатие 'отправить'
	// Закомментировать код ниже если тестировать локально!!!
	$('.js-form-btn').click(function(){
		$('header').css('filter','blur(2px)')
		$('main').css('filter','blur(2px)')
		$('.js-overlay-send').fadeIn()
	})
	// Закомментировать!!!



	// Закрытие окна "Спасибо"
    $('.js-close-send').click(function(){
		$('.js-overlay-send').fadeOut()
		$('header').css('filter','none')
		$('main').css('filter','none')
		$("body").removeClass('noscroll')
	})
	
	// Закрытие "Спасибо" по клику вне окна
    $(document).mouseup(function (e) {
        var popup = $('.js-popup-send')
        if (e.target!=popup[0]&&popup.has(e.target).length === 0) { 
			$('.js-overlay-send').fadeOut()
			$('header').css('filter','none')
			$('main').css('filter','none')
			$("body").removeClass('noscroll')
        }
	})


})
