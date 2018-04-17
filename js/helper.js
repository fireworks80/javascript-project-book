(function(global) {

    var el = function(selector, context) {
        context = context ? context : document;
        return context.querySelector(selector);
    };

    var els = function(selector, context) {
        context = context ? context : document;
        return context.querySelectorAll(selector);
    };

    global.el = el;
    global.els = els;

}(window));
