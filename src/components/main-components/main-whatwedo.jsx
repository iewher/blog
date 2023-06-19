import React from "react";

import block_1 from "../../img/main/block-1.svg";
import block_2 from "../../img/main/block-2.svg";
import block_3 from "../../img/main/block-3.svg";
import block_4 from "../../img/main/block-4.svg";

function MainWhatWeDo() {
  return (
    <div className="main-whatwedo">
      <div className="main-whatwedo-container">
        <div className="main-whatwedo-container-text">
          <h1>What we do</h1>
          <p>The areas that we're specialized in.</p>
        </div>
        <div className="main-whatwedo-container-blocks">
          <div className="main-whatwedo-container-blocks-block">
            <img src={block_1} />
            <div className="main-whatwedo-container-blocks-block-text">
              <h1>Product Photography</h1>
              <p>
                Cras commodo consequat orci, in convallis risus egestas non.
                Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus
                libero ac, cursus quam.
              </p>
              <button>Read more</button>
            </div>
          </div>
          <div className="main-whatwedo-container-blocks-block">
            <img src={block_2} />
            <div className="main-whatwedo-container-blocks-block-text">
              <h1>Product Photography</h1>
              <p>
                Cras commodo consequat orci, in convallis risus egestas non.
                Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus
                libero ac, cursus quam.
              </p>
              <button>Read more</button>
            </div>
          </div>
          <div className="main-whatwedo-container-blocks-block">
            <img src={block_3} />
            <div className="main-whatwedo-container-blocks-block-text">
              <h1>Product Photography</h1>
              <p>
                Cras commodo consequat orci, in convallis risus egestas non.
                Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus
                libero ac, cursus quam.
              </p>
              <button>Read more</button>
            </div>
          </div>
          <div className="main-whatwedo-container-blocks-block">
            <img src={block_4} />
            <div className="main-whatwedo-container-blocks-block-text">
              <h1>Product Photography</h1>
              <p>
                Cras commodo consequat orci, in convallis risus egestas non.
                Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus
                libero ac, cursus quam.
              </p>
              <button>Read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainWhatWeDo;
