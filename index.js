var area = require('./convert/area');
var data = require('./convert/data');
var distance = require('./convert/distance');
var energy = require('./convert/energy');
var force = require('./convert/force');
var mass = require('./convert/mass');
var power = require('./convert/power');
var pressure = require('./convert/pressure');
var speed = require('./convert/speed');
var temperature = require('./convert/temperature');
var time = require('./convert/time');
var volume = require('./convert/volume');
exports.measure = function (measure, num, unit) {
  var value = null;
  switch (measure) {
    case 'dist':
      value = distance.formula(num, unit);
      break;
    case 'area':
      value = area.formula(num, unit);
      break;
    case 'vol':
      value = volume.formula(num, unit);
      break;
    case 'mass':
      value = mass.formula(num, unit);
      break;
    case 'speed':
      value = speed.formula(num, unit);
      break;
    case 'time':
      value = time.formula(num, unit);
      break;
    case 'force':
      value = force.formula(num, unit);
      break;
    case 'press':
      value = pressure.formula(num, unit);
      break;
    case 'energy':
      value = energy.formula(num, unit);
      break;
    case 'power':
      value = power.formula(num, unit);
      break;
    case 'temp':
      value = temperature.formula(num, unit);
      break;
    case 'data':
      value = data.formula(num, unit);
      break;
    default:
      console.log('"' + measure + '" is not a valid parameter.');
      break;
  }
  return value;
};
