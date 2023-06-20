import React from "react";
import "../../style/footer/footer.scss";

import { AiFillGithub } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-subscribe">
        <h1>Subscribe to our newsletter</h1>
        <p>Read about all the things we do.</p>
        <div className="footer-subscribe-icons">
          <a
            href="https://github.com/iewher"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://t.me/iewher"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTelegram />
          </a>
        </div>
      </div>
      <div className="footer-rights">
        <p>© Aperture Photography, Inc. All rights reserved.</p>
      </div>
    </div>
  );
};
