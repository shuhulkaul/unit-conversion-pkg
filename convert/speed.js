exports.formula = function (value, selectedUnit) {
  var temp = value;
  var response = { measure: '', value: value, unit: '', result: {} };
  var unit,
    illegal = false;
  //speed
  function speed() {
    switch (selectedUnit) {
      case 'mps':
        temp = temp;
        unit = 'meters per second';
        break;
      case 'kph':
        temp = temp * 0.277777778;
        unit = 'kilometers per hour';
        break;
      case 'ftps':
        temp = temp * 0.3048;
        unit = 'feet per second';
        break;
      case 'mph':
        temp = temp * 0.44704;
        unit = 'miles per hour';
        break;
      case 'kt':
        temp = temp * 0.514444444;
        unit = 'knots';
        break;
      default:
        console.error('ERR: "' + selectedUnit + '" is not a valid parameter.');
        illegal = true;
        break;
    }
  }

  speed();
  if (!illegal) {
    response.measure = 'speed';
    response.unit = unit;
    //mps
    response.result['mps'] = temp;
    //kmph
    response.result['kmph'] = temp / 0.277777778;
    //ftps
    response.result['ftps'] = temp / 0.3048;
    //mph
    response.result['mph'] = temp / 0.44704;
    //kt
    response.result['kt'] = temp / 0.514444444;
  } else {
    response = null;
  }
  return response;
};
