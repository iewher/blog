import React from "react";
import "../../style/header/header.scss";

import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-name">
        <Link to="">
          <button>blog-app</button>
        </Link>
      </div>
      <div className="header-buttons">
        <Link to="/111">
          <button>Business areas</button>
        </Link>
        <Link to="/123">
          <button>Featured images</button>
        </Link>
        <Link to="/345">
          <button>Gaer cage</button>
        </Link>
        <Link to="/567">
          <button>Contact</button>
        </Link>
        <Link to="/789">
          <button className="__other">Get template</button>
        </Link>
      </div>
    </div>
  );
};
