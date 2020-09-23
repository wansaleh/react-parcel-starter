'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = calculateMeasurement;
function calculateMeasurement(value, delta) {
  var op = arguments.length <= 2 || arguments[2] === undefined ? function (a, b) {
    return a + b;
  } : arguments[2];

  if (typeof value === 'number') {
    return op(value, delta);
  }

  var matches = value.match(/^(-?\d+)(.*)$/);
  if (matches) {
    return '' + op(parseFloat(matches[1]), delta) + matches[2];
  }

  throw new Error('Invalid input format: ' + value);
}