exports.formula = function (value, selectedUnit) {
  var temp = value;
  var response = { measure: '', value: value, unit: '', result: {} };
  var unit,
    illegal = false;
  //distance
  function distance() {
    switch (selectedUnit) {
      case 'mic':
        temp = temp;
        unit = 'mircons';
        break;
      case 'mm':
        temp = temp * 1000;
        unit = 'millimeters';
        break;
      case 'cm':
        temp = temp * 10000;
        unit = 'centimeters';
        break;
      case 'm':
        temp = temp * 1000000;
        unit = 'meters';
        break;
      case 'km':
        temp = temp * 1000000000;
        unit = 'kilometers';
        break;
      case 'mil':
        temp = temp * 25.4;
        unit = 'mils/thou';
        break;
      case 'in':
        temp = temp * 25400;
        unit = 'inches';
        break;
      case 'ft':
        temp = temp * 304800;
        unit = 'feet';
        break;
      case 'yd':
        temp = temp * 914400;
        unit = 'yards';
        break;
      case 'mi':
        temp = temp * 1609344000;
        unit = 'miles';
        break;
      case 'nm':
        temp = temp * 1852000000;
        unit = 'nautical miles';
        break;
      case 'fm':
        temp = temp * 1828800;
        unit = 'fathoms';
        break;
      case 'ch':
        temp = temp * 20116800;
        unit = 'chains';
        break;
      case 'fur':
        temp = temp * 201168000;
        unit = 'furlongs';
        break;
      case 'ly':
        temp = temp * 9460730473000000000000;
        unit = 'light years';
        break;
      default:
        console.log('ERR: "' + selectedUnit + '" is not a valid parameter.');
        illegal = true;
        break;
    }
  }

  distance();

  if (!illegal) {
    response.measure = 'distance';
    response.unit = unit;

    //Microns
    response.result['mic'] = temp;

    //Millimeter

    response.result['mm'] = temp / 1000;

    //Centimeter

    response.result['cm'] = temp / 10000;

    //Meter
    response.result['m'] = temp / 1000000;

    //Kilometer
    response.result['km'] = temp / 1000000000;

    //Mils/Thou
    response.result['mil'] = temp / 25.4;

    //Inches
    response.result['in'] = temp / 25400;

    //Feet

    response.result['ft'] = temp / 304800;

    //Yard
    response.result['yd'] = temp / 914400;

    //Miles
    response.result['mi'] = temp / 1609344497.89;

    //Nautical Miles
    response.result['nm'] = temp / 1851999325.87;

    //Fathoms
    response.result['fm'] = temp / 1828798.82;

    //Chains
    response.result['ch'] = temp / 20116798.12;

    //Furlongs
    response.result['fur'] = temp / 201168385.98;

    //Light Years
    response.result['ly'] = temp * 0.0000000000000000000001057;
  } else {
    response = null;
  }
  return response;
};
