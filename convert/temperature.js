exports.formula = function (value, selectedUnit) {
  var temp = value;
  var response = { measure: '', value: value, unit: '', result: {} };
  var unit,
    illegal = false;
  //Temperature
  function temperature() {
    switch (selectedUnit) {
      case 'c':
        temp = temp;
        unit = 'celsius';
        break;
      case 'f':
        temp = ((temp - 32) * 5) / 9;
        unit = 'fahrenheit';
        break;
      case 'k':
        temp = temp - 273.15;
        unit = 'kelvin';
        break;
      default:
        console.log('ERR: "' + selectedUnit + '" is not a valid parameter.');
        illegal = true;
        break;
    }
  }

  temperature();
  if (!illegal) {
    response.measure = 'temperature';
    response.unit = unit;
    //C
    response.result['c'] = temp;
    //F
    response.result['f'] = (temp * 9) / 5 + 32;
    //K
    response.result['k'] = parseFloat(temp) + 273.15;
  } else {
    response = null;
  }
  return response;
};
