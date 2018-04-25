// helper
var getEl = function(sel, context) {
  context = !context ? document : typeof context === 'string' ? getEl(context) : context;

  return context.querySelector(sel);
};

var list = null;
var lightBox = null;
var lightBoxBtns = null;
var lightBoxCloseBtn = null;
var dim = null;

// event
var showLightBox = function(e) {
  var target = e.target;

  lightBox.hidden = false;
  dim.hidden = false;

  getEl('img', lightBox).setAttribute('src', target.src);
  lightBoxBtns.querySelectorAll('button')[target.dataset.num - 1].focus();
};

var showSelectImg = function(e) {
  var target = e.target;
  var imgSrc = getEl('[data-num="'+ target.innerHTML +'"]', list).getAttribute('src');

  getEl('img', lightBox).setAttribute('src', imgSrc);
};

var hideLightBox = function() {
  lightBox.hidden = true;
  dim.hidden = true;
};

var init = function() {
  list = getEl('.list');
  lightBox = getEl('.light-box');
  lightBoxBtns = getEl('.light-box__counter', lightBox);
  lightBoxCloseBtn = getEl('.light-box__close', lightBox);
  dim = getEl('.dim');

  list.addEventListener('click', showLightBox);
  lightBoxBtns.addEventListener('click', showSelectImg);
  lightBoxCloseBtn.addEventListener('click', hideLightBox);
};

init();
