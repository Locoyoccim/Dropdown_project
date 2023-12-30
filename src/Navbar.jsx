import React from "react";
import logo from "/src/images/logo.svg";
import hamburguer from "/src/images/icon-menu.svg";
import close from "/src/images/icon-close-menu.svg";
import "/src/navbar.css";

function Navbar() {
  function Open(name) {
    if (name === "features") {
      document.getElementById("features_container").classList.toggle("open");
      document.getElementById("company_container").classList.remove("open");
      document.querySelector("i").classList.toggle("rotate");
      document.getElementsByClassName("bi")[1].classList.remove("rotate");
    } else {
      document.getElementById("company_container").classList.toggle("open");
      document.getElementById("features_container").classList.remove("open");
      document.getElementById("arrow_2").classList.toggle("rotate");
      document.querySelector("i").classList.remove("rotate");
    }
  }

  window.addEventListener("scroll", () => {
    document.getElementById("company_container").classList.remove("open");
    document.getElementById("features_container").classList.remove("open");
  });

  function Openhamburguer(name) {
    if (name === "hamburguer") {
      document.getElementsByClassName("sombra")[0].classList.add("shadow");
      document.querySelector("nav").classList.add("apply");
    } else {
      document.getElementsByClassName("sombra")[0].classList.remove("shadow");
      document.querySelector("nav").classList.remove("apply");
    }
  }

  return (
    <>
      <div className="sombra "></div>
      <div className="navbar1">
        <img src={logo} alt="logo" className="logo col-1" />
        <button
          className="hamburguer"
          onClick={() => Openhamburguer("hamburguer")}
        >
          <img src={hamburguer} alt="hamburguer" />
        </button>
        <nav className="col-md-11 col-xs-1">
          <button className="x" onClick={() => Openhamburguer("")}>
            <img src={close} alt="x" />
          </button>
          <ul className="options col-6">
            <li onClick={() => Open("features")} className="features ">
              <div className="flex_">
                <a>Features</a>
                <i className="bi bi-caret-down-fill"></i>
              </div>
              <ul id="features_container">
                <li>
                  <img src="/src/images/icon-todo.svg" alt="" />
                  Todo List
                </li>
                <li>
                  <img src="/src/images/icon-calendar.svg" alt="" />
                  Calendar
                </li>
                <li>
                  <img src="/src/images/icon-reminders.svg" alt="" />
                  Reminders
                </li>
                <li>
                  <img src="/src/images/icon-planning.svg" alt="" />
                  Planing
                </li>
              </ul>
            </li>
            <li onClick={() => Open("container")} className="company">
              <div className="flex_">
                <a>Company</a>
                <i className="bi bi-caret-down-fill" id="arrow_2"></i>
              </div>
              <ul id="company_container">
                <li>History</li>
                <li>Our Team</li>
                <li>Blog</li>
              </ul>
            </li>
            <li>
              <a className="carrers" href="#">
                Careers
              </a>
            </li>
            <li>
              <a className="about" href="#">
                About
              </a>
            </li>
          </ul>
          <ul className="buttons col-5">
            <li>
              <button className="login row-md">Login</button>
            </li>
            <li>
              <button className="register row-md">Register</button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
