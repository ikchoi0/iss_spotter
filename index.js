const {
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSFlyOverTimes,
  nextISSTimesForMyLocation,
} = require("./iss");

// fetchMyIP((error, ip) => {
//   if(error){
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned IP:', ip);
// });

// fetchCoordsByIP("162.245.144.188", (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned coordinates:", coordinates);
// });

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   fetchCoordsByIP(ip, (error, data) => {
//     console.log(data);
//   });
// });

// fetchISSFlyOverTimes({ latitude: 'a', longitude: '-123.13000' }, (error, overHeadData) => {
//   if(error){
//     console.log("It didnt work!", error);
//     return;
//   }
//   console.log("It worked! Returned ISS over head data", overHeadData);
// });

// nextISSTimesForMyLocation((error, passTimes) => {
//   if (error) {
//     return console.log("It didn't work!", error);
//   }
//   // success, print out the deets!
//   console.log(passTimes);
// });
nextISSTimesForMyLocation((error, data) => {
  if (error) {
    console.log("It did not work!");
    return;
  }
  for (let element of data) {
    let timeFormat = Date(element.risetime);
    console.log(`Next pass at ${timeFormat} for ${element.duration} seconds!`);
  }
});
