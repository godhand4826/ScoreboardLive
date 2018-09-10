var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.sendfile('./public/views/admin.html')
});

module.exports = router;
