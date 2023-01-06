import React, { useState } from "react";

export const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    phonenumber: "",
    email: "",
    password: "",
  });
  let name, value;
  const handlerInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  return (
    <div>
      <form>
        <label>name </label>
        <input
          type="text"
          name="name"
          autoComplete="off"
          value={user.name}
          onChange={handlerInputs}
          placeholder="Enter Your Name"
        />{" "}
        <br />
        <label>phoneNumber </label>
        <input
          type="text"
          name="phoneNumber"
          autoComplete="off"
          value={user.phonenumber}
          onChange={handlerInputs}
          placeholder="Enter Your PhonNumber"
        />
        <br />
        <label>email </label>
        <input
          type="text"
          name="email"
          autoComplete="off"
          value={user.email}
          onChange={handlerInputs}
          placeholder="Enter Your Password"
        />
        <br />
        <label>password </label>
        <input
          type="text"
          name="password"
          autoComplete="off"
          value={user.password}
          onChange={handlerInputs}
          placeholder="********"
        />
        <br />
        <input type="submit" value="signup" />
      </form>
    </div>
  );
};
