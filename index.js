
/**
 * Module dependencies.
 */

var transform = require('transform-property');


/**
 * Regexp to check "End with %"
 */

var percentRegexp = /%$/;


/**
 * Expose `translate`.
 */

module.exports = transform ? translate : function() {};


/**
 * Translate `el` by `(x, y)`.
 *
 * @param {Element} el
 * @param {Number|String} x
 * @param {Number|String} y 
 * @api public
 */


function translate(el, x, y){
  if (!percentRegexp.test(x)) x += 'px';
  if (!percentRegexp.test(y)) y += 'px';

  el.style[transform] = 'translate3d(' + x + ', ' + y + ', 0)';
}
