(function(obj) {
	var hammer = new Hammer(obj.getMainEl());

	var onHammerHandler = function(idx) {

		obj.setCurrentView(idx * obj.getSectionAng() * -1);
		obj.activeIndicator(idx);
	  obj.rotatePage();
	};

	hammer.on('swipeleft', function() {
		idx = obj.getLiIdx();
		if (idx < obj.getIndicatorItemLen() - 1) {
			obj.setLiIdx(idx += 1);
			onHammerHandler(idx);
		} else {
			alert('마지막 페이지 입니다');
			return;
		}
	});


	hammer.on('swiperight', function() {
		idx = obj.getLiIdx();
		if (idx > 0) {
			obj.setLiIdx(idx -= 1);
			onHammerHandler(idx);
		} else {
			alert('첫번째 페이지 입니다');
			return;
		}
	});
}(effect3dPage));

