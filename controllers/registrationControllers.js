const Registration = require("../models/Registration");

module.exports = {
  test: (req, res) => {
    res.json({ message: "yo" });
  },

  saveRegistration: async (req, res) => {
    const { email, firstName, lastName } = req.body;
    try {
      let existingRegistration = await Registration.findOne({ email });
      if (existingRegistration)
        return res
          .status(400)
          .send(
            "The email address you entered has already been used to register. Please use another email address."
          );
      await Registration.create(email, firstName, lastName);
      res.status(200).json({ message: "Registration saved successfully"})
    } catch (error) {
      res.status(500).json({ error });
    }
  },
};
