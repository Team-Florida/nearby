var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/houseDatabase');

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


///////////////////////////////////////////////////////////////////////

var newMoreHouse = [
  new MoreHouse ({


      Property_id: 12558899,  //#12558899
      Picture: ['https://team-florida.s3-us-west-1.amazonaws.com/00/00.jpg','https://team-florida.s3-us-west-1.amazonaws.com/00/01.jpg','https://team-florida.s3-us-west-1.amazonaws.com/00/02.jpg','https://team-florida.s3-us-west-1.amazonaws.com/00/03.jpg','https://team-florida.s3-us-west-1.amazonaws.com/00/04.jpg','https://team-florida.s3-us-west-1.amazonaws.com/00/05.jpg','https://team-florida.s3-us-west-1.amazonaws.com/00/06.jpg','https://team-florida.s3-us-west-1.amazonaws.com/00/07.jpg','https://team-florida.s3-us-west-1.amazonaws.com/00/08.jpg','https://team-florida.s3-us-west-1.amazonaws.com/00/09.jpg'],        // [‘url’ , ‘url’ , ‘url’, …]
      Favorite: true,
      Type: "Private room",
      NumOfBed: 2,
      Rating: 4.93,
      NumOfRate: 261,
      Name: "Romantic Cabana with view",
      Price: 40

  }),

  new MoreHouse ({


   
      Property_id: 15558397,  //#12558899
      Picture: ['https://team-florida.s3-us-west-1.amazonaws.com/01/00.jpg','https://team-florida.s3-us-west-1.amazonaws.com/01/01.jpg','https://team-florida.s3-us-west-1.amazonaws.com/01/02.jpg','https://team-florida.s3-us-west-1.amazonaws.com/01/03.jpg','https://team-florida.s3-us-west-1.amazonaws.com/01/04.jpg','https://team-florida.s3-us-west-1.amazonaws.com/01/05.jpg','https://team-florida.s3-us-west-1.amazonaws.com/01/06.jpg','https://team-florida.s3-us-west-1.amazonaws.com/01/07.jpg','https://team-florida.s3-us-west-1.amazonaws.com/01/08.jpg','https://team-florida.s3-us-west-1.amazonaws.com/01/09.jpg'],        
      Favorite: false,
      Type: "Entire house",
      NumOfBed: 2,
      Rating: 4.96,
      NumOfRate: 432,
      Name: "Rock Reach House",
      Price: 366

  }),
  new MoreHouse({

      Property_id: 11588797,  //#12558899
      Picture: ['https://team-florida.s3-us-west-1.amazonaws.com/02/00.jpg','https://team-florida.s3-us-west-1.amazonaws.com/02/01.jpg','https://team-florida.s3-us-west-1.amazonaws.com/02/02.jpg','https://team-florida.s3-us-west-1.amazonaws.com/02/03.jpg','https://team-florida.s3-us-west-1.amazonaws.com/02/04.jpg','https://team-florida.s3-us-west-1.amazonaws.com/02/05.jpg','https://team-florida.s3-us-west-1.amazonaws.com/02/06.jpg','https://team-florida.s3-us-west-1.amazonaws.com/02/07.jpg','https://team-florida.s3-us-west-1.amazonaws.com/02/08.jpg','https://team-florida.s3-us-west-1.amazonaws.com/02/09.jpg'],
      Favorite: true,
      Type: "Entire house",
      NumOfBed: 6,
      Rating: 4.97,
      NumOfRate: 388,
      Name: "Spirit Wind - Architectural Oasis in Joshua Tree",
      Price: 262
    
  })
]

// newMoreHouse.save(function(error) {
//  console.log(newMoreHouse)
//   if (error) {
//     console.log("Error: " + error)
//   } else {
//     console.log("Your newMoresHouse data has been saved!");
//   }
// })

// array = [];
MoreHouse.insertMany(newMoreHouse, function(err, data) {
  if (err){
   console.log("Error: " + err)
  } else {
   console.log('success, your data has been logged to the db' + data)
   }
 });

module.export = {newMoreHouse};


