// slider

const swiper = new Swiper('.materials__slider', {
	// Optional parameters
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	autoplay: {
		disableOnInteraction: false,
		delay: 5000,
	}

});


const refs = {
	headerEl: document.querySelector('.header'),
	headerContainerEl: document.querySelector('.header__container'),
	videoBtnEl: document.querySelector('#open-video-btn'),

}

window.addEventListener('scroll', function () {
	scrollY > 0 ? refs.headerEl.classList.add('scroll') : refs.headerEl.classList.remove('scroll')
	scrollY > 0 ? refs.headerContainerEl.classList.add('scroll') : refs.headerContainerEl.classList.remove('scroll')
})
