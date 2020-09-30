exports.formula = function (value, selectedUnit) {
  var temp = value;
  var response = { measure: '', value: value, unit: '', result: {} };
  var unit,
    illegal = false;
  //time
  function time() {
    switch (selectedUnit) {
      case 'ns':
        temp = temp;
        unit = 'nanoseconds';
        break;
      case 'mics':
        temp = temp * 1000;
        unit = 'microseconds';
        break;
      case 'ms':
        temp = temp * 1000000;
        unit = 'milliseconds';
        break;
      case 's':
        temp = temp * 1000000000;
        unit = 'seconds';
        break;
      case 'min':
        temp = temp * 60000000000;
        unit = 'minutes';
        break;
      case 'hr':
        temp = temp * 3600000000000;
        unit = 'hours';
        break;
      case 'd':
        temp = temp * 86400000000000;
        unit = 'days';
        break;
      case 'wk':
        temp = temp * 604800000000000;
        unit = 'weeks';
        break;
      case 'yrg':
        temp = temp * 31557600000000000;
        unit = 'years (gregorian)';
        break;
      case 'yrj':
        temp = temp * 31556952000000000;
        unit = 'years (julian)';
        break;
      default:
        console.log('ERR: "' + selectedUnit + '" is not a valid parameter.');
        illegal = true;
        break;
    }
  }

  time();
  if (!illegal) {
    response.measure = 'time';
    response.unit = unit;
    //ns
    response.result['ns'] = temp;
    //microsec
    response.result['mics'] = temp / 1000;
    //millisec
    response.result['ms'] = temp / 1000000;
    //sec
    response.result['s'] = temp / 1000000000;
    //min
    response.result['min'] = temp / 60000000000;
    //hr
    response.result['hr'] = temp / 3600000000000;
    //days
    response.result['d'] = temp / 86400000000000;
    //wk
    response.result['wk'] = temp / 604800000000000;
    //yr gregorian
    response.result['yrg'] = temp / 31557600000000000;
    //years julian
    response.result['yrj'] = temp / 31556952000000000;
  } else {
    response = null;
  }
  return response;
};
