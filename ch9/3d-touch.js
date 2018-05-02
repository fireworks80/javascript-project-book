var hammer = new Hammer(main);

var onHammerHandler = function(idx) {
	currentView = idx * sectionAngle * -1;
	activateIndicator(idx);
  rotatePage();
};

hammer.on('swipeleft', function() {

	if (liIdx < indicatorItems.length - 1) {
		liIdx += 1;
		onHammerHandler(liIdx);
	} else {
		alert('마지막 페이지 입니다');
		return;
	}
});


hammer.on('swiperight', function() {
	if (liIdx > 0) {
		liIdx -= 1;
		onHammerHandler(liIdx);
	} else {
		alert('첫번째 페이지 입니다');
		return;
	}
});