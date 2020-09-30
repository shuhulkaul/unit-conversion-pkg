exports.formula = function (value, selectedUnit) {
  var temp = value;
  var response = { measure: '', value: value, unit: '', result: {} };
  var unit,
    illegal = false;
  //volume
  function volume() {
    switch (selectedUnit) {
      case 'ml':
        temp = temp;
        unit = 'milliliters';
        break;
      case 'l':
        temp = temp * 1000;
        unit = 'liters';
        break;
      case 'cum':
        temp = temp * 1000000;
        unit = 'cubic meters';
        break;
      case 'cuin':
        temp = temp * 16.387064;
        unit = 'cubic inches';
        break;
      case 'cuft':
        temp = temp * 28316.84659;
        unit = 'cubic feet';
        break;
      case 'cuyd':
        temp = temp * 764554.858;
        unit = 'cubic yard';
        break;
      case 'ozimp':
        temp = temp * 28.4130625;
        unit = 'fluid ounce imperial';
        break;
      case 'ptimp':
        temp = temp * 568.26125;
        unit = 'pint imperial';
        break;
      case 'galimp':
        temp = temp * 4546.09;
        unit = 'gallons imperial';
        break;
      case 'ozus':
        temp = temp * 29.57352956;
        unit = 'fluid ounce US';
        break;
      case 'ptus':
        temp = temp * 473.176473;
        unit = 'pint US';
        break;
      case 'galus':
        temp = temp * 3785.411784;
        unit = 'gallon US';
        break;
      default:
        console.log('ERR: "' + selectedUnit + '" is not a valid parameter.');
        illegal = true;
        break;
    }
  }
  volume();
  if (!illegal) {
    response.measure = 'volume';
    response.unit = unit;

    //millilitres cc
    response.result['ml'] = temp;

    //litres
    response.result['l'] = temp / 1000;

    //cu. m
    response.result['cum'] = temp / 1000000;

    //cu. in
    response.result['cuin'] = temp / 16.387064;

    //cu ft.
    response.result['cuft'] = temp / 28316.84659;

    //cu yd
    response.result['cuyd'] = temp / 764554.858;

    //fluid ounce
    response.result['ozimp'] = temp / 28.4130625;

    //pt imp
    response.result['ptimp'] = temp / 568.26125;

    //gal imp
    response.result['galimp'] = temp / 4546.09;

    //fl oz
    response.result['ozus'] = temp / 29.57352956;

    //pt us
    response.result['ptus'] = temp / 473.176473;

    //gal us
    response.result['galus'] = temp / 3785.411784;
  } else {
    response = null;
  }
  return response;
};
