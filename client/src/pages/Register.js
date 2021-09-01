import React, { useState } from "react";

const initialState = {
  email: { value: "", error: "Please enter all fields" },
  firstName: { value: "", error: "Please enter all fields" },
  lastName: { value: "", error: "Please enter all fields" },
};
const Register = () => {
  const [formData, setFormData] = useState(initialState);
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const stateField = e.target.name;
    const value = e.target.value;

    if(!value) {
        setFormData({...formData, [stateField]: {error: "Please enter all fields", ...value}})
    }

    setFormData({ ...formData, [stateField]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      console.log(formData);
    } else {
      console.log("not valid: ");
    }
  };
  return (
    <form className="flex-col space-y-2 text-white border-2 border-white rounded p-5">
      <input
        className="block bg-black rounded border-2"
        name="email"
        onChange={handleChange}
        value={formData.email.value}
        placeholder="Email Address"
      />
      {formData.email.error && <span>{formData.email.error}</span>}
      <input
        className="block bg-black rounded border-2"
        name="firstName"
        onChange={handleChange}
        value={formData.firstName.value}
        placeholder="First Name"
      />
      {formData.firstName.error && <span>{formData.firstName.error}</span>}

      <input
        className="block bg-black rounded border-2"
        name="lastName"
        onChange={handleChange}
        value={formData.lastName.value}
        placeholder="Last Name"
      />
      {formData.lastName.error && <span>{formData.lastName.error}</span>}

      <button
        onClick={handleSubmit}
        className="border-2 rounded border-white p-2"
      >
        Submit
      </button>
    </form>
  );
};

export default Register;
