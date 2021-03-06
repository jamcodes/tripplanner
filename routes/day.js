var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET: Listing all the Days  */
router.get('/', function(req, res) {

});

/* POST: Creating a Day (now MVC) */
router.post('/', function(req, res) {
  var newDay = new models.Day(req.body);
  newDay.save( function(err, day) {
    if(err) return next(err);
    res.json(day);
  });
});

/* POST: Adding an Activity */
router.post('/:dayId/activity', function(req, res) {
  var dayId = req.params.dayId;
  var type = req.body.type;
  console.log(type);
  var activityId = req.body.activityId;
  var pushObj = {};
  pushObj[type] = activityId;
  models.Day.findOneAndUpdate({dayNum: dayId}, {$push: pushObj}, function(err, day){
    res.send({});
  });
});

module.exports = router;
