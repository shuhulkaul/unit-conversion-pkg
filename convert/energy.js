exports.formula = function (value, selectedUnit) {
  var temp = value;
  var response = { measure: '', value: value, unit: '', result: {} };
  var unit,
    illegal = false;
  //Energy
  function energy() {
    switch (selectedUnit) {
      case 'j':
        temp = temp;
        unit = 'joules';
        break;
      case 'kj':
        temp = temp * 1000;
        unit = 'kilojoules';
        break;
      case 'mj':
        temp = temp * 1000000;
        unit = 'megajoules';
        break;
      case 'kwh':
        temp = temp * 3600000;
        unit = 'kilowatt-hours';
        break;
      case 'cal':
        temp = temp * 4.1868;
        unit = 'calories';
        break;
      case 'kcal':
        temp = temp * 4186.8;
        unit = 'kilocalories';
        break;
      case 'btu':
        temp = temp * 1055.055853;
        unit = 'british thermal units';
        break;
      default:
        console.log('ERR: "' + selectedUnit + '" is not a valid parameter.');
        illegal = true;
        break;
    }
  }
  energy();

  if (!illegal) {
    response.measure = 'energy';
    response.unit = unit;

    //joules
    response.result['j'] = temp;
    //kJ
    response.result['kj'] = temp / 1000;
    //MJ
    response.result['mj'] = temp / 1000000;
    //kWh
    response.result['kwh'] = temp / 3600000;
    //cal
    response.result['cal'] = temp / 4.1868;
    //kcal
    response.result['kcal'] = temp / 4186.8;
    //BTU
    response.result['btu'] = temp / 1055.055853;
  } else {
    response = null;
  }
  return response;
};
