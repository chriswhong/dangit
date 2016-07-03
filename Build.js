var Geojson = require('./types/geojson.js');

module.exports = function(config) {
  console.log('Building dataset ' + config.name + '...');

  if(config.type == 'geojson') {
    Geojson.build(config)
  } else {
    console.log('This dataset\'s dangit.json has an unsupported type')
  }
}