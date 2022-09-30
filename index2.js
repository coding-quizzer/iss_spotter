const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation().
then( body => {
  passTimes = body.response;
  for (let element of passTimes) {
    const risetime = element.risetime;
    const duration = element.duration;
    const date = Date(risetime);
    console.log(`Next pass at ${date} for ${duration} seconds!`);  
  }
  
})
.catch((error) => console.log("it didn't work: ", error.message));