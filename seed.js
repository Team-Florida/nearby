var data = require('./seed_data.js');
var mongoose = require('mongoose');
var data = require('./database/index.js');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});


var seedDatabase = function(data) {
  console.log(data)
};

seedDatabase(data);
