
var fs = require('fs'),
  Build = require('./build.js');

//get the command that the user passed in
var command = process.argv[2];

//get the path of the dataset that the user passed in
var path = process.argv[3];

var config = require(path + '/dangit.json');

//add the path to config so lower level modules can access it
config.path = path;

if (command=='build') {
  Build(config)
} else {
  console.log('I don\'t recognize that command...');
}