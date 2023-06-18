import React from "react";
import "../../style/header/header.scss";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-name">
        <p>blog-app</p>
      </div>
      <div className="header-buttons">
        <button>Business areas</button>
        <button>Featured images</button>
        <button>Gaer cage</button>
        <button>Contact</button>
        <button className="__other">Get template</button>
      </div>
    </div>
  );
};
