exports.formula = function (value, selectedUnit) {
  var temp = value;
  var response = { measure: '', value: value, unit: '', result: {} };
  var unit,
    illegal = false;
  //pressure
  function pressure() {
    switch (selectedUnit) {
      case 'pa':
        temp = temp;
        unit = 'pascal';
        break;
      case 'hpa':
        temp = temp * 100;
        unit = 'hectopascal';
        break;
      case 'kpa':
        temp = temp * 1000;
        unit = 'kilopascal';
        break;
      case 'mpa':
        temp = temp * 1000000;
        unit = 'megapascal';
        break;
      case 'mbar':
        temp = temp * 100;
        unit = 'millibar';
        break;
      case 'bar':
        temp = temp * 100000;
        unit = 'bar';
        break;
      case 'atm':
        temp = temp * 101325;
        unit = 'atmosphere (std)';
        break;
      case 'kgpsqcm':
        temp = temp * 98066.5;
        unit = 'kilogram per sq. cm';
        break;
      case 'psi':
        temp = temp * 6894.75729;
        unit = 'pound per sq. inch';
        break;
      case 'hg':
        temp = temp * 3386.389;
        unit = 'inches of mercury (hg)';
        break;
      case 'torr':
        temp = temp * 133.3223684;
        unit = 'torr';
        break;
      default:
        console.log('ERR: "' + selectedUnit + '" is not a valid parameter.');
        illegal = true;
        break;
    }
  }
  pressure();
  if (!illegal) {
    response.measure = 'pressure';
    response.unit = unit;
    //pascal
    response.result['pa'] = temp;
    //hectopascal
    response.result['hpa'] = temp / 100;
    //kilopascal
    response.result['kpa'] = temp / 1000;
    //megapascal
    response.result['mpa'] = temp / 1000000;
    //millibar
    response.result['mbar'] = temp / 100;
    //bar
    response.result['bar'] = temp / 100000;
    //atm
    response.result['atm'] = temp / 101325;
    //kg per sq cm
    response.result['kgpsqcm'] = temp / 98066.5;
    //kg per sq in
    response.result['psi'] = temp / 6894.75729;
    //in hg
    response.result['hg'] = temp / 3386.389;
    //Torr
    response.result['torr'] = temp / 133.3223684;
  } else {
    response = null;
  }
  return response;
};
