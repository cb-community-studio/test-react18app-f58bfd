const { KlCampusCsv } = require('./klCampusCsv.class');
const createModel = require('../../models/klCampusCsv.model');
const hooks = require('./klCampusCsv.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/klCampusCsv', new KlCampusCsv(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('klCampusCsv');

  service.hooks(hooks);
};