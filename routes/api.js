const RegistrationControllers = require("../controllers/registrationControllers");

module.exports = function (app) {
  app.post("/register", (req, res) => {
    RegistrationControllers.saveRegistration(req, res);
  });
};
