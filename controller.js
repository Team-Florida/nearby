
const request = require('request')
const url = 'http://localhost:3000/houseDB'

const getData= (data,callback) => {
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service',undefined)
        } else if (response.body.error) {
            callback('Unable to find picture', undefined)
        }
        else {
            // callback(Price)
            console.log(response.body)
        }
    })
}

///////////////////////////////////////////




// const getPrice = (Price,callback) => {
//     request({ url: url, json: true }, (error, response) => {
//         if (error) {
//             callback('Unable to connect to weather service',undefined)
//         } else if (response.body.error) {
//             callback('Unable to find picture', undefined)
//         }
//         else {
//             // callback(Price)
//             console.log(response.body[0].Price)
//         }
//     })
// }

// const getName = (Name,callback) => {
//     request({ url: url, json: true }, (error, response) => {
//         if (error) {
//             callback('Unable to connect to weather service',undefined)
//         } else if (response.body.error) {
//             callback('Unable to find picture', undefined)
//         }
//         else {
//             // callback(Price)
//             console.log(response.body[0].Name)
//         }
//     })
// }

// const getNumOfRate = (NumOfRate,callback) => {
//     request({ url: url, json: true }, (error, response) => {
//         if (error) {
//             callback('Unable to connect to weather service',undefined)
//         } else if (response.body.error) {
//             callback('Unable to find picture', undefined)
//         }
//         else {
//             // callback(Price)
//             console.log(response.body[0].NumOfRate)
//         }
//     })
// }


getData()
// getPrice()
// getName()
// getNumOfRate()

// console.log(url)

module.exports = {getData}
// module.exports = {getData,getPrice,getName,getNumOfRate}