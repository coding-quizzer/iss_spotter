const { fetchMyIP, fetchCoordsByIP } = require('./iss');


/* fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
  }

  console.log("It worked! Returned IP:", ip);

}); */

fetchCoordsByIP("4", (error, data) => {
  if (error) {
    console.log("Operation failed! Error:", error); 
  }

  console.log(data);

});