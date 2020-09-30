exports.formula = function (value, selectedUnit) {
  var temp = value;
  var response = { measure: '', value: value, unit: '', result: {} };
  var unit,
    illegal = false;
  //force
  function force() {
    switch (selectedUnit) {
      case 'micn':
        temp = temp;
        unit = 'micronewtons';
        break;
      case 'mn':
        temp = temp * 1000;
        unit = 'millinewtons';
        break;
      case 'n':
        temp = temp * 1000000;
        unit = 'newtons';
        break;
      case 'kn':
        temp = temp * 1000000000;
        unit = 'kilonewtons';
        break;
      case 'kgf':
        temp = temp * 9806650;
        unit = 'kilogram-force';
        break;
      case 'lbf':
        temp = temp * 4448221.62;
        unit = 'pound-force';
        break;
      default:
        console.log('ERR: "' + selectedUnit + '" is not a valid parameter.');
        illegal = true;
        break;
    }
  }
  force();

  if (!illegal) {
    response.measure = 'force';
    response.unit = unit;

    //microN
    response.result['micn'] = temp;
    //milliN
    response.result['mn'] = temp / 1000;
    //N
    response.result['n'] = temp / 1000000;
    //kN
    response.result['kn'] = temp / 1000000000;
    //kgf
    response.result['kgf'] = temp / 9806650;
    //lbf
    response.result['lbf'] = temp / 4448221.62;
  } else {
    response = null;
  }
  return response;
};
