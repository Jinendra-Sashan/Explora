import React, { useState, useEffect } from "react";
import { app } from "../../firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const RegistrationForm = () => {
  const auth = getAuth();

  const [data, setData] = useState({ name: "", email: "", password: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      console.log("The user was successfully registered.");
    } catch (error) {
      console.error("There was an error in registering the user:", error.message);
    }
  };

  return (
      <div className="mx-auto max-w-lg rounded-3xl bg-white p-7 px-7 py-7 md:max-w-lg md:p-10 md:px-11 md:py-11 lg:max-w-2xl dark:bg-black">
        <br />
        <h1 className="pb-10 text-center font-primary text-4xl font-semibold uppercase tracking-wider dark:text-white lg:text-4xl">
          Welcome To Explora
        </h1>
        <h4 className="pb-12 text-center font-primary text-xl dark:text-white">
          Create Your Own Explora Account
        </h4>
        <form onSubmit={handleSubmit}>
          <input
            className="placeholder-getstarted-placeholder mb-8 w-full rounded-lg bg-getstarted-input px-4 py-4 leading-tight placeholder-getstarted-placeholderlight dark:bg-getstarted-inputdark dark:placeholder-getstarted-placeholderdark"
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Enter Your Name"
            onChange={handleInputChange}
            value={data.name}
          />
          <br />
          <input
            className="mb-8 w-full rounded-lg bg-getstarted-input px-4 py-4 leading-tight placeholder-getstarted-placeholderlight dark:bg-getstarted-inputdark dark:placeholder-getstarted-placeholderdark"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Enter Your Email Address"
            onChange={handleInputChange}
            value={data.email}
          />
          <br />
          <input
            className="mb-8 w-full rounded-lg bg-getstarted-input px-4 py-4 leading-tight placeholder-getstarted-placeholderlight dark:bg-getstarted-inputdark dark:placeholder-getstarted-placeholderdark"
            type="password"
            name="password"
            placeholder="Enter Your Password"
            onChange={handleInputChange}
            value={data.password}
          />
          <br />
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="rounded-full bg-black p-3 px-8 font-primary font-semibold uppercase tracking-wider text-white hover:bg-getstarted-dark sm:text-base md:text-xl lg:text-xl dark:bg-white dark:text-black dark:hover:bg-getstarted-light"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
  );
};

export default RegistrationForm;
