/*
    $IIXDR,H,36.7,P,ENV_INAIR_H*02
*/
// $IIXDR,H,36.7,P,ENV_INAIR_H*02

const nmea = require('../nmea.js')
module.exports = function (app) {
  return {
    title: 'XDR (InsideHumidity) - Inside humidity.',
    keys: ['environment.inside.relativeHumidity'],
    f: function (humidity) {
      var percent = humidity * 100
      return nmea.toSentence([
        '$IIXDR',
        'H',
        percent.toFixed(1),
        'P',
        'ENV_INAIR_H'
      ])
    }
  }
}
