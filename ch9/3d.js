// ==========================================
// helper
// ==========================================
(function(g) {
  var doc = document;

  g.getEl = function(sel, context) {

    context = !context ? doc : context && typeof context === 'string' ? g.getEl(context) : context;

    return context.querySelector(sel);
  };

  g.getEls = function(sel, context) {
    context = !context ? doc : context && typeof context === 'string' ? g.getEl(context) : context;

    return context.querySelectorAll(sel);
  };
}(window));

// ==========================================
// rotateView
// ==========================================
var rotateView = (function() {

  var main = getEl('main');
  var sections = getEls('section');
  var viewWidth = 0;
  var angle = 90;
  var currentIdx = 0;

  var rotatePage = function(idx) {

    main.setAttribute('style', `transform: translateZ(-${viewWidth / 2}px) rotateY(${(angle * idx * -1)}deg)`);
  };

  var init = function() {
    viewWidth = sections[0].offsetWidth;
    sections.forEach(function(section, idx) {
      section.setAttribute('style','transform: rotateY('+ (idx * angle) +'deg) translateZ('+ (viewWidth / 2) +'px)');
    });
    rotatePage(0);
    window.addEventListener('resize', init);
  };

  return {
    init: init,
    setCurrIdx: function(val) {
      currentIdx = val;
    },
    getCurrIdx: function() {
      return currentIdx;
    },
    getMainEl: function() {
      return main;
    },
    getTotalViewLen: function() {
      return sections.length;
    },
    rotate: rotatePage
  };
}());


// ==========================================
// indicator
// ==========================================
var indicator = (function(rotateView) {
  var indicator = getEl('.indicator');
  var indicatorItems = getEls('.indicator__item', indicator);

  var activateIndicator = function(liIdx) {

    var resetHook = function(node, idx) {
        if (node.nodeName === 'LI') {
          node.classList.remove('is-active');
        }
    };
    // debugger;
    indicatorItems.forEach(resetHook);
    indicatorItems.item(liIdx).classList.add('is-active');
  };

  // event handler
  var onIndicatorHandler = function(e) {
    e.preventDefault();

    var currentLi = e.target.parentNode;
    var liIdx = Array.prototype.indexOf.call(indicatorItems, currentLi);

    rotateView.rotate(liIdx);
    rotateView.setCurrIdx(liIdx);
    activateIndicator(liIdx);
  };

  var init = function() {
      indicator.addEventListener('click', onIndicatorHandler);
  };

  return {
    init: init,
    active: activateIndicator
  };
}(rotateView));

