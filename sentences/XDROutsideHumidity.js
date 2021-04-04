/*
   $IIXDR,H,55.8,P,ENV_OUTAIR_H*41
*/
// $IIXDR,H,55.8,P,ENV_OUTAIR_H*41

const nmea = require('../nmea.js')
module.exports = function (app) {
  return {
    title: 'XDR (OutsideHumidity) - Outside humidity.',
    keys: ['environment.outside.humidity'],
    f: function (humidity) {
      var percent = humidity * 100
      return nmea.toSentence([
        '$IIXDR',
        'H',
        percent.toFixed(1),
        'P',
        'ENV_OUTAIR_H'
      ])
    }
  }
}
