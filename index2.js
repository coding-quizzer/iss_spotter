const { fetchMyIP } = require('./iss_promised');

fetchMyIP()
  .then((body) => console.log(body))
  .catch((err) => console.log(err));