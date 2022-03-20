const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log(`It didn't work: `, error.message)
  })

  const printPassTimes = (passTimes) => {
    for (let passTime of passTimes) {
      const duration = passTime.duration;
      const datetime = new Date(0);
      datetime.setUTCSeconds(passTime.risetime);
      console.log(`Next pass at ${datetime} for ${duration} seconds!!!`);
    }
  };