exports.formula = function (value, selectedUnit) {
  var temp = value;
  var response = { measure: '', value: value, unit: '', result: {} };
  var unit,
    illegal = false;
  //area
  function area() {
    switch (selectedUnit) {
      case 'sqmm':
        temp = temp;
        unit = 'square millimeters';
        break;
      case 'sqcm':
        temp = temp * 100;
        unit = 'square centimeters';
        break;
      case 'sqm':
        temp = temp * 1000000;
        unit = 'square meters';
        break;
      case 'ha':
        temp = temp * 10000000000;
        unit = 'hectares';
        break;
      case 'sqkm':
        temp = temp * 1000000000000;
        unit = 'square kilometers';
        break;
      case 'sqin':
        temp = temp * 645.16;
        unit = 'square inches';
        break;
      case 'sqft':
        temp = temp * 92903.04;
        unit = 'square feet';
        break;
      case 'sqyd':
        temp = temp * 836127.36;
        unit = 'square yard';
        break;
      case 'ac':
        temp = temp * 4046856422;
        unit = 'acres';
        break;
      case 'sqmi':
        temp = temp * 2589988110000;
        unit = 'square miles';
        break;
      default:
        console.log('ERR: "' + selectedUnit + '" is not a valid parameter.');
        illegal = true;
        break;
    }
  }
  area();

  if (!illegal) {
    response.measure = 'area';
    response.unit = unit;
    //sq mm
    response.result['sqmm'] = temp;
    //sq cm
    response.result['sqcm'] = temp / 100;
    //sq m
    response.result['sqm'] = temp / 1000000;
    //hectares
    response.result['ha'] = temp / 10000000000;
    //sq km
    response.result['sqkm'] = temp / 1000000000000;
    //sq in
    response.result['sqin'] = temp / 645.16;
    //sq ft
    response.result['sqft'] = temp / 92903.04;
    //sq yd
    response.result['sqyd'] = temp / 836127.36;
    //acres
    response.result['ac'] = temp / 4046856422;
    //sq miles
    response.result['sqmi'] = temp / 2589988110000;
  } else {
    response = null;
  }
  return response;
};
