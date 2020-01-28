var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('The Database is connected')
});

var MoreHouseSchema = new mongoose.Schema({
    Property_id: Number,  //#12558899
    Picture: Array,        // [‘url’ , ‘url’ , ‘url’, …]
    Favorite: Boolean,
    Type: String,
    NumOfBed: Number,
    Rating: Number,
    NumOfRate: Number,
    Name: String,
    Price: Number
});

var MoreHouse = mongoose.model('MoreHouse', MoreHouseSchema );

module.exports = {MoreHouse};
















// findAll retrieves all stories
// function findAll(callback) {
//     MoreHouseModel.find({}, callback);
// }

// // findOne will retrieve the story associated with the given id
// function findOne(id, callback) {
//     MoreHouseModel.find({ id: id }, callback);
// }

// // insertOne inserts a story into the db
// function insertOne(story, callback) {
//     MoreHouseModel.create(story, callback);
// }
// exports.findOne = findOne;
// exports.findAll = findAll;
// exports.insertOne = insertOne;
