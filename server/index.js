const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;
const app = express();
const mongoose = require('mongoose');
const db = require('../database/index.js')  //
app.use(express.static(__dirname + '/../client/dist')); //client

// app.get('/test', function(req,res) {
//   mongoose.model('MoreHouse').find(function(err, test) {
//     res.send(test)
//   })
// })

app.get('/houseDB',(req,res) => {
  db.MoreHouse.find({}, (error,data) => {
    if (error) {
      req.sendStatus(404)
    } else {
      res.status(200).send(data)
    }
  })
});




app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
