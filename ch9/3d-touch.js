// ==========================================
// swipe
// ==========================================
var swipe = (function(rotateView, indicator) {
  var hammer = new Hammer(rotateView.getMainEl());

  var onHammerHandler = function(idx) {
    rotateView.setCurrIdx(idx);
    rotateView.rotate(idx);
    indicator.active(idx);
  };

  var init = function() {
    hammer.on('swipeleft', function() {
      var idx = rotateView.getCurrIdx();
      if (idx < rotateView.getTotalViewLen() - 1) {
        idx += 1;
        onHammerHandler(idx);
      } else {
        alert('마지막 페이지 입니다');
        return;
      }
    });

    hammer.on('swiperight', function() {
      var idx = rotateView.getCurrIdx();
      if (idx > 0) {
        idx -= 1;
        onHammerHandler(idx);
      } else {
        alert('첫번째 페이지 입니다');
        return;
      }
    });
  };

  return {
    init: init
  };
}(rotateView, indicator));
