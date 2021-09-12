import React, { useState } from "react";
import "./register.css";
import { useForm } from "react-hook-form";

const Confirm = (props) => {
  const [editing, setEditing] = useState(false);
  const onEditClick = () => {
    setEditing(true);
    setTimeout(()=>{
      document.getElementById(props.data.experience).setAttribute("selected", "selected")
    }, 200)

  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    props.setData(data)
    setEditing(false);
  }
  if (!editing) {
    return (
      <div className="card rounded bg-gray-800 shadow w-1/2 m-auto text-center relative">
        <h1 className="text-2xl bg-gradient-to-r from-green-400 to-blue-300 bg-clip-text text-transparent font-bold">
          Confirm your details...
        </h1>
        <p className="text-lg text-white">
          <span className="bg-gradient-to-r from-green-400 to-blue-300 bg-clip-text text-transparent font-bold">
            First name:
          </span>{" "}
          {props.data.firstName}
        </p>
        <p className="text-lg text-white">
          <span className="bg-gradient-to-r from-green-400 to-blue-300 bg-clip-text text-transparent font-bold">
            Last name:
          </span>{" "}
          {props.data.lastName}
        </p>
        <p className="text-lg text-white">
          <span className="bg-gradient-to-r from-green-400 to-blue-300 bg-clip-text text-transparent font-bold">
            Email:
          </span>{" "}
          {props.data.email}
        </p>
        <p className="text-lg text-white">
          <span className="bg-gradient-to-r from-green-400 to-blue-300 bg-clip-text text-transparent font-bold">
            Age:
          </span>{" "}
          {props.data.age}
        </p>
        <p className="text-lg text-white">
          <span className="bg-gradient-to-r from-green-400 to-blue-300 bg-clip-text text-transparent font-bold">
            Phone number:
          </span>{" "}
          {props.data.phonenumber}
        </p>
        <p className="text-lg text-white">
          <span className="bg-gradient-to-r from-green-400 to-blue-300 bg-clip-text text-transparent font-bold">
            Address:
          </span>{" "}
          {props.data.address}
        </p>
        <p className="text-lg text-white">
          <span className="bg-gradient-to-r from-green-400 to-blue-300 bg-clip-text text-transparent font-bold">
            Experience:
          </span>{" "}
          {props.data.experience}
        </p>
        <p className="text-lg text-white">
          <span className="bg-gradient-to-r from-green-400 to-blue-300 bg-clip-text text-transparent font-bold">
            Elaborate:
          </span>{" "}
          {props.data.elaborate}
        </p>
        <button
          onClick={onEditClick}
          className="bg-gradient-to-r from-green-400 to-blue-300 rounded p-3 font-bold"
        >
          Edit!
        </button>
      </div>
    );
  } else {
    return (
      <div className="w-1/2 m-auto text-center bg-gray-800 rounded p-10 mb-20 shadow-xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="txt-field">
            <input
              className="form-input w-3/4 bg-transparent mb-10 m-auto"
              {...register("firstName", { required: true })}
              placeholder= " "
              id="firstName"
              defaultValue={props.data.firstName}
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
              placeholder= " "
              id="lastName"
              defaultValue={props.data.lastName}
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
              placeholder= " "
              id="email"
              defaultValue={props.data.email}
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
              placeholder= " "
              id="age"
              defaultValue={props.data.age}
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
                pattern: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/g,
              })}
              placeholder= " "
              id="phonenumber"
              defaultValue={props.data.phonenumber}
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
              placeholder= " "
              id="address"
              defaultValue={props.data.address}
            />
            <span className="form-label for-age bg-gradient-to-r from-green-400 to-blue-300 text-transparent bg-clip-text font-bold">
              Address
              {errors.address && (
                <p className="inline text-red-600 ml-6">
                  Please enter your address
                </p>
              )}
            </span>
          </div>
          <div className="txt-field">
            <select
              {...register("experience")}
              className="bg-gradient-to-r from-green-400 to-blue-300 text-black font-bold"
            >
              <option value="none" id="none">None</option>
              <option value="some" id="some">Some</option>
              <option value="year" id="year">More than one year</option>
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
            >{props.data.elaborate}</textarea>
            <span className="form-label for-age bg-gradient-to-r from-green-400 to-blue-300 text-transparent bg-clip-text font-bold">
              Elaborate(optional)
            </span>
          </div>
          <button
            type="submit"
            className="border-0 bg-gradient-to-r from-green-400 to-blue-300 text-black font-bold rounded p-3 mt-28"
          >
            Save changes
          </button>
        </form>
      </div>
    );
  }
};

export default Confirm;
