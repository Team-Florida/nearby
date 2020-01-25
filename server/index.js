const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;
const app = express();
const mongoose = require('mongoose');

app.use(express.static(__dirname + '/../client/dist')); //client

app.get('/test', function(req,res) {
  mongoose.model('MoreHouse').find(function(err, test) {
    res.send(test)
  })
})


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
