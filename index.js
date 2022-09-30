const { fetchMyIP, fetchCoordsByIP, fetchFlyoverTimesForISS } = require('./iss');


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

fetchFlyoverTimesForISS(-104.613, 501.489, (error, data) => {
  if (error) {
    console.log("Failed to get iss flyover times! Error", error);
    return;
  }

  console.log(data);
});