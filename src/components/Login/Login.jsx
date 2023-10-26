import React from "react";
import "./style.css";
import Home from "../home/Home";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="Login">
      <span className="Login-text">LOGIN</span>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <Link to={"/Autorization"}>
        <span className="Login-text" >Если вы не зарегестрированны, регестрируйтесь
        </span>
      </Link>
    </div>
  );
}

export default Login;
