import React from "react";
import profileImg from "../../assets/profile-img.png";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";
import CV from "../../assets/NIXON-VARGHESE.pdf";

import { FaTwitter, FaDribbble, FaBehance } from "react-icons/fa";
import "./home.css";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home__wrapper">
        <div className="home__container container">
          <p className="home__subtitle text-cs">
            Hello <span>My Name Is</span>
          </p>

          <h1 className="home__title text-cs">
            <span>NIXON</span> varghese
          </h1>

          <p className="home__job">
            <span className="text-cs">I Am</span> <b>Web Developer</b>
          </p>

          <div className="home__img-wrapper">
            <div className="home__banner">
              <img src={profileImg} alt="" className="home__profile" />
            </div>

            <p className="home__data home__data-one">
              <span className="text-lg">
                12 <b>+</b>
              </span>

              <span className="text-sm text-cs">
                Years of <b>Experience</b>
              </span>
            </p>

            <p className="home__data home__data-two">
              <span className="text-lg">330</span>

              <span className="text-sm text-cs">
                Completed <b>Projects</b>
              </span>
            </p>

            <img src={shapeOne} alt="" className="shape shape__1" />
            <img src={shapeTwo} alt="" className="shape shape__2" />
            <img src={shapeTwo} alt="" className="shape shape__3" />
          </div>

          <p className="home__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            esse expedita cupiditate delectus mollitia laudantium blanditiis
          </p>

          <div className="home__socials">
            <a href="javascript" className="home__social-link">
              <FaTwitter />
            </a>

            <a href="javascript" className="home__social-link">
              <FaDribbble />
            </a>

            <a href="javascript" className="home__social-link">
              <FaBehance />
            </a>
          </div>

          <div className="home__btns">
            <a download="" href={CV} className="btn text-cs">
              Download CV
            </a>

            <a href="javascript" className="hero__link text-cs">
              My Skills
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
