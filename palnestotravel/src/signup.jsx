import React, { useState } from "react";
//import { post } from "../../backend/src/routes/route";

export const Signup = (props) => {
  const [user, setUser] = useState({
    userName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });
  let name, value;
  const handlerInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const postData = async (e) => {
    e.preventDefault();
    const { userName, phoneNumber, email, password } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        phoneNumber,
        email,
        password,
      }),
    });
  };

  return (
    <div>
      <form method="POST" onSubmit={postData}>
        <label>userName </label>
        <input
          type="text"
          name="userName"
          autoComplete="off"
          value={user.userName}
          onChange={handlerInputs}
          placeholder="Enter Your Name"
        />
        <br />
        <label>phoneNumber </label>
        <input
          type="text"
          name="phoneNumber"
          autoComplete="off"
          value={user.phoneNumber}
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
        <input type="submit" value="signup" /> <br />
        <input
          type="button"
          value="Already Have Account"
          onClick={() => {
            props.loginPage("login");
          }}
        />
      </form >
    </div>
  );
};
