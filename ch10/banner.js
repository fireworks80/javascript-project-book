(function() {
	var wrap = document.querySelector('.wrap');
	var banner = wrap.querySelector('.banner');
	var soundBtn = wrap.querySelector('.btn-sound');
	var audio = wrap.querySelector('audio');
	var bannerCloseBtn = wrap.querySelector('.btn-status');
	var balloons = banner.querySelectorAll('img');
	var wrapWidth = wrap.offsetWidth;

	// balloons.forEach(function(balloon, idx) {
	// 	balloon.style.left = Math.random() * ( wrapWidth - balloon.width) + 'px';
	// });


	soundBtn.addEventListener('click', function(e) {
		var btn = e.target;
		btn.classList.toggle('is-active');

		if (btn.classList.contains('is-active')) {
			audio.play();
		} else {
			audio.pause();
			audio.currentTime = 0;
		} // if
	});

	bannerCloseBtn.addEventListener('click', function() {
		banner.classList.toggle('is-active');
	});

}());