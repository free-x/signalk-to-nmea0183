/*
   $IIXDR,C,22.65,C,ENV_INAIR_T*37 
*/
// $IIXDR,C,22.65,C,ENV_INAIR_T*37

const nmea = require('../nmea.js')
module.exports = function (app) {
  return {
    title: 'XDR (InsideTemperature) - Inside temperature.',
    keys: ['environment.inside.mainCabin.temperature'],
    f: function (temperature) {
      var celcius = temperature - 273.15
      return nmea.toSentence([
        '$IIXDR',
        'C',
        celcius.toFixed(2),
        'C',
        'ENV_INAIR_T'
      ])
    }
  }
}
