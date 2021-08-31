import React from "react";
import "./register.css";
import { useForm } from "react-hook-form";

const initialState = {
  email: { value: "", error: "Please enter all fields" },
  firstName: { value: "", error: "Please enter all fields" },
  lastName: { value: "", error: "Please enter all fields" },
};
const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    //post data to server
    console.log(data);
  };
  // pattern: /^[0-9]+$/g
  return (
    <div className="w-1/2 m-auto text-center bg-gray-800 rounded p-10 mb-20 shadow-xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="txt-field">
          <input
            className="form-input w-3/4 bg-transparent mb-10 m-auto"
            {...register("firstName", { required: true })}
            required
          />
          <span className="form-label bg-gradient-to-r from-green-400 to-blue-300 text-transparent bg-clip-text font-bold">
            First Name
            {errors.firstName && <p className="inline text-red-600 ml-6">Please enter first name</p>}
          </span>
        </div>
        <div className="txt-field">
          <input
            className="form-input w-3/4 bg-transparent mb-10 m-auto"
            {...register("lastName", { required: true })}
            required
          />
          <span className="form-label bg-gradient-to-r from-green-400 to-blue-300 text-transparent bg-clip-text font-bold">
            Last Name
            {errors.lastName && <p className="inline text-red-600 ml-6">Please enter last name</p>}
          </span>
        </div>
        <div className="txt-field">
          
          <input
            className="form-input w-3/4 bg-transparent mb-10 m-auto"
            {...register("email", {
              required: true,
              pattern:
                /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
            })}
            required
          />
          <span className="form-label bg-gradient-to-r from-green-400 to-blue-300 text-transparent bg-clip-text font-bold">
            Email
            {errors.email && <p className="inline text-red-600 ml-6">Invalid email</p>}
          </span>

        </div>
        <div className="txt-field">
          <input
            className="form-input w-3/4 bg-transparent mb-10 m-auto"
            {...register("age", {
              required: true,
              pattern: /^[0-9]+$/g,
            })}
            required
          />
          <span className="form-label for-age bg-gradient-to-r from-green-400 to-blue-300 text-transparent bg-clip-text font-bold">
            Age
            {errors.age && <p className="inline text-red-600 ml-6">Invalid age</p>}
          </span>
        </div>
        <button
          type="submit"
          className="border-0 bg-gradient-to-r from-green-400 to-blue-300 text-black font-bold rounded p-3"
        >
          Register now
        </button>
      </form> 
    </div>
  );
};

export default Register;
