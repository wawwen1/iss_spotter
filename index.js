const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log('It worked! Returned IP:', ip);
});

fetchCoordsByIP(ip, (error, coords) => {        //change ip to proper value
  if (error) {
    console.log(error);
    return;
  }
  console.log(coords);
});

fetchISSFlyOverTimes({'latitude': 43.8455, 'longitude': -79.2635}, (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(data);
});

const printPassTimes = (passTimes) => {
  for (let passTime of passTimes) {
    const duration = passTime.duration;
    const datetime = new Date(0);
    datetime.setUTCSeconds(passTime.risetime);
    console.log(`Next pass at ${datetime} for ${duration} seconds!!!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    console.log(error);
    return;
  }
  printPassTimes(passTimes);
});