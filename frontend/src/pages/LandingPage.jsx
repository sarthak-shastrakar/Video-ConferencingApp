import React from "react";
import "../App.css";
import "../styles/Responsive.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function LandingPage() {
  let router = useNavigate();
  return (
    <div className="landingPageContainer">
      <nav>
        <div className="navHeader">
          <span>
            {" "}
            <img src="/homelogo.png" alt="" />
          </span>
          <span> VisionLoom</span>
        </div>
        <div className="navList">
          <ul>
            <li
              onClick={() => {
                router("/aljk23");
              }}
            >
              Join-As-Guest
            </li>
            <li
              onClick={() => {
                router("/auth");
              }}
            >
              Register
            </li>
            <li
              role="button"
              onClick={() => {
                router("/auth");
              }}
            >
              Login
            </li>
          </ul>
        </div>
      </nav>
      <div className="landingMainContainer">
        <div>
          <h2>Where Love Meets Technology—Stay Connected.</h2>
          <p>Embrace Every Moment, No Matter the Miles.</p>

          <div className="scene">
            <div className="cube">
              <Link className="side top" to={"/auth"}>
                START
              </Link>
              <span className="side front">GET Start's</span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
