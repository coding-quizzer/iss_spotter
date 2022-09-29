const { fetchMyIP, fetchCoordsByIP } = require('./iss');


/* fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
  }

  console.log("It worked! Returned IP:", ip);

}); */

fetchCoordsByIP("71.17.165.131", (error, data) => {

});