var fs = require('fs');

module.exports = {
  build: function(config) {
    console.log('Combining geojson Features into FeatureCollection...')
    var rowCount = 0;
    //create buildFile
    var buildFile = fs.createWriteStream(config.path + '/build/' + config.name + '.geojson');

    //get array of filenames in path/rows
    var rows =  fs.readdirSync(config.path + '/rows');

    //write opening string for FeatureCollection
    buildFile.write('{"type": "FeatureCollection","features":[')
    
    rows.forEach(function(row,i) {
      console.log('Handling file ' + row + '...')
      var rowText = fs.readFileSync(config.path + '/rows/' + row, 'utf-8');
    
      rowText = rowText.replace(/(\r\n|\n|\r)/gm," "); //get rid of line breaks in rowText
      //TODO get rid of spaces too, but not spaces in the strings.

      if (i < rows.length - 1) {
        rowText += ','
      } 

      buildFile.write(rowText);
      rowCount++;

    });

    //write closing string for FeatureCollection
    buildFile.write(']}'); 

    console.log('Successfully built ' + config.path + '/build/' + config.name + '.geojson with ' + rowCount + ' rows of data.')
  },

  validate: function(config) {
    //validate the repo here
  }
}