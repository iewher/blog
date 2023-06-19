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

export const Main = () => {
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
    </div>
  );
};
