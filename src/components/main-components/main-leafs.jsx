import React from "react";

import leafs from "../../img/main/main-leafs.svg";

function MainLeafs() {
  return (
    <div className="main-leafs">
      <img src={leafs} />
      <div className="main-leafs-text">
        <h1>Monstera Leafs</h1>
        <p>
          Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices,
          ut faucibus orci tincidunt.
        </p>
      </div>
    </div>
  );
}

export default MainLeafs;
