const request =  require ('request-promise-native');

const fetchMyIP = function() {

  return request('https://api.ipify.org/?format=json');

};

const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  return request(`https://ipwho.is/${ip}`);
};

const fetchFlyoverTimesForISS = function(body) {
  bodyObj = JSON.parse(body);
  const long = bodyObj.longitude;
  const lat = bodyObj.latitude;
  return request(`https://iss-flyover.herokuapp.com/json/?lat=${lat}&lon=${long}`)
};

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchFlyoverTimesForISS)
  .then(body => JSON.parse(body))
}

module.exports = {nextISSTimesForMyLocation};