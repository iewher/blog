import React from "react";

import mountain from "../../img/main/main-mountain.svg";

function MainMountain() {
  return (
    <div className="main-mountain">
      <img src={mountain} />
      <div className="main-mountain-text">
        <h1>Sunset at Mount Fuji</h1>
        <p>
          Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in
          convallis risus egestas non.
        </p>
      </div>
    </div>
  );
}

export default MainMountain;
