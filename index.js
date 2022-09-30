const { nextISSTimesForMyLocation } = require('./iss');


/* fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
  }

  console.log("It worked! Returned IP:", ip);

}); */

/* fetchCoordsByIP("4", (error, data) => {
  if (error) {
    console.log("Operation failed! Error:", error);
    return;
  }

  console.log(data);

}); */

/* fetchFlyoverTimesForISS(-104.613, 501.489, (error, data) => {
  if (error) {
    console.log("Failed to get iss flyover times! Error", error);
    return;
  }

  console.log(data);
}); */

nextISSTimesForMyLocation((error, passTimes) => {

  if (error) {
    return console.log("Error stitching together times! Error: ", error);
  }

  //console.log(passTimes);

  /* const firstPass = passTimes[0];
  
  const firstDate = new Date(0)
  firstDate.setUTCSeconds(firstPass.risetime)

  const timezone = new Date(0);
  console.log(timezone.setUTCSeconds(datetime)); */
  

  for (let element of passTimes) {
    const risetime = element.risetime;
    const duration = element.duration;
    const date = Date(risetime);
    console.log(`Next pass at ${date} for ${duration} seconds!`);  
  }
});

