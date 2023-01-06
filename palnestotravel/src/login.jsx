import React, { useState } from "react";
import { Signup } from "./signup";


export const Login = (props) => {
  const [user, setUser] = useState({
    userName: "",
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
        <input type="button" value="login" />
        <div className="buttons">
        <h5>"Dont have Account ?"</h5>
        <input type="button" value="Create Here" onClick={()=>{
            props.loginPage("Signup")

        }} />
        </div>
      </form>
    </div>
  );
};
