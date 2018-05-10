(function(g) {
	'use strict';
	var doc = document;

	g.el = function(selector, context) {
		if (!selector) {
			throw new Error('DOM 객체를 생성할 선택자를 넣어주세요');
		}

		context = !context ? document : (typeof context === 'string') ? el(context) : context;

		return context.querySelector(selector);
	};

	g.els = function(selector, context) {
		if (!selector) {
			throw new Error('DOM 객체를 생성할 선택자를 넣어주세요');
		}

		context = !context ? document : (typeof context === 'string') ? el(context) : context;

		return context.querySelectorAll(selector);
	};

}(window));