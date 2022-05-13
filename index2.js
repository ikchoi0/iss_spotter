const { nextISSTimesForMyLocation } = require("./iss_promised");

const printPassTimes = function(data) {
  for (let element of data) {
    let timeFormat = Date(element.risetime);
    console.log(`Next pass at ${timeFormat} for ${element.duration} seconds!`);
  }
};
nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });