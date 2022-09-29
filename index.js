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

  request('https://api.ipify.org/?format=json', (error, message, body) => {
    if (error) {
      console.log("It didn't work!, error");
    }

    const ipObject = JSON.parse(body);
    const ipAddress = ipObject.ip;
    console.log("It worked! Returned IP:", ipAddress);
  });
};

fetchMyIP();