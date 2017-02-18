var config = require('./dev')
  , PersonController = require('../api/controller/person_controller');

module.exports = function (app) {
  app.get('/person', PersonController.index);
  app.get('/person/:id', PersonController.show);
  app.post('/person', PersonController.create);
  app.put('/person/:id', PersonController.update);
  app.delete('/person/:id', PersonController.destroy);
}
