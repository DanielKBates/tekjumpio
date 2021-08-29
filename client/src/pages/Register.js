import React, { useState } from "react";

const initialState = {
  email: { value: "", error: "" },
  firstName: { value: "", error: "" },
  lastName: { value: "", error: "" },
};
const Register = () => {
  const [formData, setFormData] = useState(initialState);
  const [isValid, setIsValid] =useState(true)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(isValid){
        console.log(formData);
    }
    else{
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
      ></input>
      <input
        className="block bg-black rounded border-2"
        name="firstName"
        onChange={handleChange}
        value={formData.firstName}
        placeholder="First Name"
      ></input>
      <input
        className="block bg-black rounded border-2"
        name="lastName"
        onChange={handleChange}
        value={formData.lastName}
        placeholder="Last Name"
      ></input>
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
