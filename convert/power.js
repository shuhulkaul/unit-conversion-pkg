exports.formula = function (value, selectedUnit) {
  var temp = value;
  var response = { measure: '', value: value, unit: '', result: {} };
  var unit,
    illegal = false;
  //Power
  function power() {
    switch (selectedUnit) {
      case 'w':
        temp = temp;
        unit = 'watts';
        break;
      case 'kw':
        temp = temp * 1000;
        unit = 'kilowatts';
        break;
      case 'mw':
        temp = temp * 1000000;
        unit = 'megawatts';
        break;
      case 'calps':
        temp = temp * 4.1868;
        unit = 'calories per second';
        break;
      case 'btuph':
        temp = temp * 0.29307107;
        unit = 'BTUs per hour';
        break;
      case 'hpi':
        temp = temp * 745.699872;
        unit = 'horsepower (mech)';
        break;
      case 'hpm':
        temp = temp * 735.49875;
        unit = 'horsepower (metric)';
        break;
      default:
        console.log('ERR: "' + selectedUnit + '" is not a valid parameter.');
        illegal = true;
        break;
    }
  }
  power();
  if (!illegal) {
    response.measure = 'power';
    response.unit = unit;

    //watts
    response.result['w'] = temp;
    //kW
    response.result['kw'] = temp / 1000;
    //MW
    response.result['mw'] = temp / 1000000;
    //cal/s
    response.result['calps'] = temp / 4.1868;
    //BTUph
    response.result['btuph'] = temp / 0.29307107;
    //hp I
    response.result['hpi'] = temp / 745.699872;
    //hp M
    response.result['hpm'] = temp / 735.49875;
  } else {
    response = null;
  }
  return response;
};
