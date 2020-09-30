exports.formula = function (value, selectedUnit) {
  var temp = value;
  var response = { measure: '', value: value, unit: '', result: {} };
  var unit,
    illegal = false;
  //mass
  function mass() {
    switch (selectedUnit) {
      case 'micg':
        temp = temp;
        unit = 'micrograms';
        break;
      case 'mg':
        temp = temp * 1000;
        unit = 'milligrams';
        break;
      case 'g':
        temp = temp * 1000000;
        unit = 'grams';
        break;
      case 'kg':
        temp = temp * 1000000000;
        unit = 'kilograms';
        break;
      case 't':
        temp = temp * 1000000000000;
        unit = 'tonnes';
        break;
      case 'oz':
        temp = temp * 28349523.13;
        unit = 'ounces';
        break;
      case 'lb':
        temp = temp * 453592370;
        unit = 'pounds';
        break;
      case 'st':
        temp = temp * 6350293180;
        unit = 'stone';
        break;
      case 'cwtus':
        temp = temp * 45359237000;
        unit = 'hundredweight us';
        break;
      case 'cwtuk':
        temp = temp * 50802345440;
        unit = 'hundredweight uk';
        break;
      case 'stus':
        temp = temp * 907184740000;
        unit = 'short ton us';
        break;
      case 'stuk':
        temp = temp * 1016046909000;
        unit = 'short ton uk';
        break;
      default:
        console.log('ERR: "' + selectedUnit + '" is not a valid parameter.');
        illegal = true;
        break;
    }
  }
  mass();
  if (!illegal) {
    response.measure = 'mass';
    response.unit = unit;
    //micrograms
    response.result['micg'] = temp;

    //milligrams
    response.result['mg'] = temp / 1000;

    //grams
    response.result['g'] = temp / 1000000;

    //kilograms
    response.result['kg'] = temp / 1000000000;
    //tonnes
    response.result['t'] = temp / 1000000000000;

    //ounces
    response.result['oz'] = temp / 28349523.13;

    //pounds
    response.result['lb'] = temp / 453592370;

    //stone
    response.result['st'] = temp / 6350293180;
    //Hundredweight us
    response.result['cwtus'] = temp / 45359237000;

    //Hundredweight uk
    response.result['cwtuk'] = temp / 50802345440;
    //short tons us
    response.result['stus'] = temp / 907184740000;
    //long tons uk
    response.result['stuk'] = temp / 1016046909000;
  } else {
    response = null;
  }
  return response;
};
