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

var main = getEl('main');
var sections = getEls('section');
var indicator = getEl('.indicator');
var sectionAngle = 90;
var viewWidth = 0;
var currentView = 0;

var init = function() {
  viewWidth = sections[0].offsetWidth;
  sections.forEach(function(section, idx) {
    section.setAttribute('style','transform: rotateY('+ (idx * sectionAngle) +'deg) translateZ('+ (viewWidth / 2) +'px)');
  });
  rotatePage();
};

var rotatePage = function() {
  main.setAttribute('style', `transform: translateZ(-${viewWidth / 2}px) rotateY(${currentView}deg)`);
};

indicator.addEventListener('click', function(e) {
  e.preventDefault();
  var li = e.target.parentNode;
  var liIdx = Array.prototype.indexOf.call(getEls('li', indicator), li);
  currentView = liIdx * sectionAngle * -1;

  rotatePage();
});

init();

window.addEventListener('resize', init);
