import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Sasanthi Lakmini</h1>

        <ul className="footer_list">
          <li>
            <a href="#home" className="footer_link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="footer_link">
              {" "}
              About{" "}
            </a>
          </li>

          <li>
            <a href="#projects" className="footer_link">
              {" "}
              Projects
            </a>
          </li>
        </ul>

        <div className="footer_social">
          <a
            href="https://web.facebook.com/people/Sasanthi-Ranagala/pfbid02x2g68SB2rLwjrBbXDVtFygz66ZxWYvdsW3fDV8KE7SqZKLoVfNh1Z4ei1sH4TDtJl/"
            className="footer_social-link"
            target="_blank"
          >
            <i class="bx bxl-facebook"></i>
          </a>

          <a href="#" className="footer_social-link" target="_blank">
            <i class="bx bxl-twitter"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/sasanthi-ranagala-955a191a6/"
            className="footer_social-link"
            target="_blank"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
        </div>

        <span className="footer_copy">
          &#169; Sasanthi Lakmini. All rights reserved
        </span>
      </div>
    </footer>
  );
}

export default Footer;
