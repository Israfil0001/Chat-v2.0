import React from "react";
import Home from "../home/Home";
import "./style.css";
import { Link } from "react-router-dom";

function TopBar() {
  return (
    <div>
      <div className="nav-bar">
        <div className="nav-bar-v2">
          <div className="nav-bar-left-items">
            <Link to={"/Message"}>
              <span>Чаты</span>{" "}
            </Link>
            <Link to={"/CardList"}>
              <span>Личные Сообщения</span>
            </Link>
          </div>
        </div>
        <Link to={"/Login"}>
          <span>Войти</span>
        </Link>
      </div>
    </div>
  );
}

export default TopBar;
