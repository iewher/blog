import React from "react";
import "../../style/main/main.scss";

import MainBanner from "../../components/main-components/main-banner";
import MainWhatWeDo from "../../components/main-components/main-whatwedo";
import MainMountain from "../../components/main-components/main-mountain";
import MainTools from "../../components/main-components/main-tools";
import MainLeafs from "../../components/main-components/main-leafs";
import MainClients from "../../components/main-components/main-clients";
import MainStars from "../../components/main-components/main-stars";
import MainNeeds from "../../components/main-components/main-needs";

import { AiOutlineArrowUp } from "react-icons/ai";

export const Main = () => {
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
    <div className="main">
      <MainBanner />
      <MainWhatWeDo />
      <MainMountain />
      <MainTools />
      <MainLeafs />
      <MainClients />
      <MainStars />
      <MainNeeds />
      <button className="main-gotop" onClick={() => scrollToElement("header")}>
        <AiOutlineArrowUp />
      </button>
    </div>
  );
};
