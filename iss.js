/**
 * Makes a single API request to retreive the user's IP address
 *
 * Input:
 *    A callback (to pass back an error or the IP string)
 *
 * Returns (vis Callback):
 *  - An error, if any (nullable);
 *
 * - The IP address as a string (null if error). Example: "162.245.144.188"
*/

const request = require('request');

const fetchMyIP = function(callback) {

  request('https://api.ipify.org/?format=json', (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP, Response: ${body}`;

      callback(Error(msg), null);

      return;
    }

    const ipObject = JSON.parse(body);
    const ipAddress = ipObject.ip;
    callback(null, ipAddress);
  });
};

const fetchCoordsByIP = function(ip, callback) {

  request(`https://ipwho.is/${ip}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {

      const msg = `Status Code ${response.statusCode} when fetching coords, Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    let bodyObj = JSON.parse(body);

    if (!bodyObj.sucess) {
      callback(`Sucess code was ${bodyObj.sucess}. Server message says: ${bodyObj.message} when fetching for ip ${ip}`, null);
      return;
    }

    const latitude = bodyObj.latitude;
    const longitude = bodyObj.longitude;

    callback(null, {latitude, longitude});
  });
  
};

const fetchFlyoverTimesForISS = function(long, lat, callback) {
  
  request(`https://iss-flyover.herokuapp.com/json/?lat=${lat}&lon=${long}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {

      const msg = `Status Code ${response.statusCode} when fetching ISS flyover times, Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const bodyObj = JSON.parse(body);

    callback(null, bodyObj.response);
  });
};

const nextISSTimesForMyLocation = function(callback) {

}

module.exports = { nextISSTimesForMyLocation };