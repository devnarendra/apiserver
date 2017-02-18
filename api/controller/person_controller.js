var config = require('../../config/dev')
  , Person = require('../../models/Person');

var per = {};

per.index = function (req, res, next) {
  var query = {};

  Person.find(query, function (err, resp) {
    if(err) return next(err);
    return res.json(resp);
  });
}

per.create = function (req, res, next) {
  var p = new Person(req.body);

  p.save(function (err, resp) {
    if (err) return next(err);
    return res.json(resp);
  });
}

per.show = function (req, res, next) {
  var id = req.params.id;

  Person.findById(id, function (err, resp) {
    if(err) return next(err);
    return res.json(resp);
  });
}

per.update = function (req, res, next) {
  delete req.body._id;
  var id = req.params.id;

  Person.findByIdAndUpdate(id, req.body, function (err, resp) {
    if(err) return next(err);
    return res.json(resp);
  });
}

per.destroy = function (req, res, next) {
  var id = req.params.id;

  Person.remove({_id:id}, function (err, resp) {
    if(err) return next(err);
    return res.json({"status":"OKAY"});
  });
}

module.exports = per
