import React from "react";
import "../../style/header/header.scss";

export const Header = () => {
  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="header" id="header">
      <div className="header-name">
        <button onClick={() => scrollToElement("header")}>blog-app</button>
      </div>
      <div className="header-buttons">
        <button onClick={() => scrollToElement("business")}>
          Business areas
        </button>
        <button onClick={() => scrollToElement("featured")}>
          Featured images
        </button>
        <button onClick={() => scrollToElement("gear")}>Gaer cage</button>
        <button onClick={() => scrollToElement("contact")}>Contact</button>
        <button className="__other" onClick={() => scrollToElement("get")}>
          Get template
        </button>
      </div>
    </div>
  );
};
