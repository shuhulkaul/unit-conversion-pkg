exports.formula = function (value, selectedUnit) {
  var temp = value;
  var response = { measure: '', value: value, unit: '', result: {} };
  var unit,
    illegal = false;
  //data
  function data() {
    switch (selectedUnit) {
      case 'b':
        temp = temp;
        unit = 'bytes';
        break;
      case 'kib':
        temp = temp * 1024;
        unit = 'kibibytes';
        break;
      case 'mib':
        temp = temp * 1048576;
        unit = 'mebibytes';
        break;
      case 'gib':
        temp = temp * 1073741824;
        unit = 'gibibytese';
        break;
      case 'tib':
        temp = temp * 1099511628000;
        unit = 'tebibytes';
        break;
      case 'kb':
        temp = temp * 1000;
        unit = 'kilobytes';
        break;
      case 'mb':
        temp = temp * 1000000;
        unit = 'megabytes';
        break;
      case 'gb':
        temp = temp * 1000000000;
        unit = 'gigabytes';
        break;
      case 'tb':
        temp = temp * 1000000000000;
        unit = 'terabytes';
        break;
      default:
        console.log('ERR: "' + selectedUnit + '" is not a valid parameter.');
        illegal = true;
        break;
    }
  }

  data();

  if (!illegal) {
    response.measure = 'data';
    response.unit = unit;
    //bytes
    response.result['b'] = temp;
    //Kibi
    response.result['kib'] = temp / 1024;
    //Mebi
    response.result['mib'] = temp / 1048576;
    //Gibi
    response.result['gib'] = temp / 1073741824;
    //Tebi
    response.result['tib'] = temp / 1099511628000;
    //Kilo
    response.result['kb'] = temp / 1000;
    //Mega
    response.result['mb'] = temp / 1000000;
    //Giga
    response.result['gb'] = temp / 1000000000;
    //Tera
    response.result['tb'] = temp / 1000000000000;
  } else {
    response = null;
  }
  return response;
};
