import React from "react";
import { FaTwitter, FaDribbble, FaBehance } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div className="footer__socials">
          <a href="javascript" className="footer__social-link">
            <FaTwitter />
          </a>

          <a href="javascript" className="footer__social-link">
            <FaDribbble />
          </a>

          <a href="javascript" className="footer__social-link">
            <FaBehance />
          </a>
        </div>

        <p className="footer__copyright text-cs">
          &copy; 2023 <span>Nixon Varghese</span>. All Rights Reserved
        </p>
        <p className="footer__copyright text-cs">
          Developed by <span>IT4Supports</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
