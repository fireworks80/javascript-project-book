(function() {
	var wrap = document.querySelector('.wrap');
	var banner = wrap.querySelector('.banner');
	var soundBtn = wrap.querySelector('.btn-sound');
	var audio = wrap.querySelector('audio');
	var bannerCloseBtn = wrap.querySelector('.btn-status');
	var balloons = banner.querySelectorAll('img');
	var wrapWidth = wrap.offsetWidth;
	var balloonsConfig = [];
	var animationID = null;

	var setBalloonState = function() {

		balloons.forEach(function(balloon, idx) {
			var config = {
				x: Math.random() * (wrapWidth - balloon.width),
				y: -120,
				rotate: Math.random() * 360,
				speed: Math.random() * 2 + 1
			};

			balloonsConfig.push(config);
		});
	};

	var displayBalloons = function() {

		var start = function(balloon, idx) {

			balloon.y = (balloon.y < 220) ? balloon.y += balloon.speed : -120;

			balloon.rotate += 5;

			balloons[idx].style = `top: ${balloon.y}px; left: ${balloon.x}px;`;
			balloons[idx].style.transform = 'rotate('+ balloon.rotate +'deg)';
		};

		balloonsConfig.forEach(start);

		animationID = requestAnimationFrame(displayBalloons);
	};


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

		if (animationID) {
			cancelAnimationFrame(animationID);
			animationID = null;
		} else {
			displayBalloons();
		}

	});

	setBalloonState();
	displayBalloons();

}());