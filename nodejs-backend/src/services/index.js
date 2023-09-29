const users = require("./users/users.service.js");
const klCampusCsv = require("./klCampusCsv/klCampusCsv.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(klCampusCsv);
  // ~cb-add-configure-service-name~
};
