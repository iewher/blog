import React from "react";

import tools from "../../img/main/main-tools.svg";

function MainTools() {
  return (
    <div className="main-tools">
      <div className="main-tools-left">
        <h2>The Gear cage</h2>
        <h1>The tools that we use.</h1>
        <p>
          The say that "no place is boring if you've had a good night's sleep
          and have a pocket full of unexposed film". While we don't shoot (a
          lot) of film these days — these are the tools that we actually use
          everyday to capture the amazing things around us.
        </p>
        <button>Check it out</button>
      </div>
      <div className="main-tools-right">
        <img src={tools} />
      </div>
    </div>
  );
}

export default MainTools;
