var express = require('express');
var router = express.Router();
const request = require('request');

router.get('/', function (req, res) {
  request('https://dog.ceo/api/breeds/image/random', function (error, response, body) {
    if (!error && response.statusCode === 200) {
      const data = JSON.parse(body); // Dog APIはJSON返すのでこれでOK
      res.json(data);
    } else {
      console.error('Dog API error:', error || response.statusCode);
      res.status(500).json({ error: 'Dog API request failed' });
    }
  });
});

module.exports = router;
