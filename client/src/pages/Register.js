import React, { useState } from "react";
import "./register.css";
import { useForm } from "react-hook-form";
import Confirm from "./Confirm";

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
  const [registered, setRegistered] = useState(false);
  const [data, setData] = useState(initialState);
  const onSubmit = (data) => {
    //post data to server
    console.log(data);
    setData(data);
    setRegistered(true);

  };
  // pattern: /^[0-9]+$/g
  if (!registered) {
    return (
      <div className="w-1/2 m-auto text-center bg-gray-400 rounded p-10 mb-20 shadow-xl">
        <form onSubmit={handleSubmit(onSubmit)} className="mt-20">
          <div className="txt-field">
            <input
              className="form-input w-3/4 bg-transparent mb-10 m-auto"
              {...register("firstName", { required: true })}
              placeholder=" "
            />
            <span className="form-label bg-gradient-to-r from-green-400 to-blue-300 text-transparent bg-clip-text font-bold">
              First Name
              {errors.firstName && (
                <p className="inline text-red-600 ml-6">
                  Please enter first name
                </p>
              )}
            </span>
          </div>
          <div className="txt-field">
            <input
              className="form-input w-3/4 bg-transparent mb-10 m-auto"
              {...register("lastName", { required: true })}
              placeholder=" "
            />
            <span className="form-label bg-gradient-to-r from-green-400 to-blue-300 text-transparent bg-clip-text font-bold">
              Last Name
              {errors.lastName && (
                <p className="inline text-red-600 ml-6">
                  Please enter last name
                </p>
              )}
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
              placeholder=" "
            />
            <span className="form-label bg-gradient-to-r from-green-400 to-blue-300 text-transparent bg-clip-text font-bold">
              Email
              {errors.email && (
                <p className="inline text-red-600 ml-6">Invalid email</p>
              )}
            </span>
          </div>
          <div className="txt-field">
            <input
              className="form-input w-3/4 bg-transparent mb-10 m-auto"
              {...register("age", {
                required: true,
                pattern: /^[0-9]+$/g,
              })}
              placeholder=" "
            />
            <span className="form-label for-age bg-gradient-to-r from-green-400 to-blue-300 text-transparent bg-clip-text font-bold">
              Age
              {errors.age && (
                <p className="inline text-red-600 ml-6">Invalid age</p>
              )}
            </span>
          </div>
          <div className="txt-field">
            <input
              className="form-input w-3/4 bg-transparent mb-10 m-auto"
              {...register("phonenumber", {
                required: true,
                pattern: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/g
              })}
              placeholder=" "
            />
            <span className="form-label for-age bg-gradient-to-r from-green-400 to-blue-300 text-transparent bg-clip-text font-bold">
              Phone Number
              {errors.phonenumber && (
                <p className="inline text-red-600 ml-6">Invalid Phone Number</p>
              )}
            </span>
          </div>
          <div className="txt-field">
            <input
              className="form-input w-3/4 bg-transparent mb-10 m-auto"
              {...register("address", {
                required: true,
              })}
              placeholder=" "
            />
            <span className="form-label for-age bg-gradient-to-r from-green-400 to-blue-300 text-transparent bg-clip-text font-bold">
              Address
              {errors.address && (
                <p className="inline text-red-600 ml-6">Please enter your address</p>
              )}
            </span>
          </div>
          <div className="txt-field">
            <select
              {...register("experience")}
              className="bg-gradient-to-r from-green-400 to-blue-300 text-black font-bold"
            >
              <option value="none">None</option>
              <option value="some">Some</option>
              <option value="year">More than one year</option>
            </select>
            <span className="form-label for-age bg-gradient-to-r from-green-400 to-blue-300 text-transparent bg-clip-text font-bold">
              Programming Experience
              {errors.experience && (
                <p className="inline text-red-600 ml-6">
                  Please choose a value
                </p>
              )}
            </span>
          </div>
          <br />
          <br />
          <div className="txt-field">
            <textarea
              className="block w-9/12  mt-5"
              {...register("elaborate")}
            ></textarea>
            <span className="form-label for-age bg-gradient-to-r from-green-400 to-blue-300 text-transparent bg-clip-text font-bold">
              Elaborate(optional)
            </span>
          </div>
          <button
            type="submit"
            className="border-0 bg-gradient-to-r from-green-400 to-blue-300 text-black font-bold rounded p-3 mt-28"
          >
            Register now
          </button>
        </form>
      </div>
    );
  } else {
    return <Confirm data={data} setData={setData} />;
  }
};

export default Register;
