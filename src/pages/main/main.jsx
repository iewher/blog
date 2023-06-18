import React from "react";
import "../../style/main/main.scss";

import banner from "../../img/main/main-banner.svg";

import block_1 from "../../img/main/block-1.svg";
import block_2 from "../../img/main/block-2.svg";
import block_3 from "../../img/main/block-3.svg";
import block_4 from "../../img/main/block-4.svg";

import mountain from "../../img/main/main-mountain.svg";

import tools from "../../img/main/main-tools.svg";

import leafs from "../../img/main/main-leafs.svg";

import stars from "../../img/main/main-stars.svg";

export const Main = () => {
  return (
    <div className="main">
      <div className="main-banner">
        <img src={banner} />
        <div className="main-banner-text">
          <p>Photographer & Filmmaker</p>
          <h1>Aperture Studios</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </div>
      </div>
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
                  Nulla efficitur auctor hendrerit. Etiam ut orci varius,
                  faucibus libero ac, cursus quam.
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
                  Nulla efficitur auctor hendrerit. Etiam ut orci varius,
                  faucibus libero ac, cursus quam.
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
                  Nulla efficitur auctor hendrerit. Etiam ut orci varius,
                  faucibus libero ac, cursus quam.
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
                  Nulla efficitur auctor hendrerit. Etiam ut orci varius,
                  faucibus libero ac, cursus quam.
                </p>
                <button>Read more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-mountain">
        <img src={mountain} />
        <div className="main-mountain-text">
          <h1>Sunset at Mount Fuji</h1>
          <p>
            Duis tristique sed lorem a vestibulum. Cras commodo consequat orci,
            in convallis risus egestas non.
          </p>
        </div>
      </div>
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
      <div className="main-leafs">
        <img src={leafs} />
        <div className="main-leafs-text">
          <h1>Monstera Leafs</h1>
          <p>
            Vestibulum sit amet urna turpis. Mauris euismod elit et nisi
            ultrices, ut faucibus orci tincidunt.
          </p>
        </div>
      </div>
      <div className="main-clients">
        <h1>Past clients</h1>
        <p>Trusted by your favourite companies</p>
      </div>
      <div className="main-stars">
        <img src={stars} />
        <div className="main-stars-text">
          <h1>Star fall in the Himalayas</h1>
          <p>
            Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex,
            condimentum dapibus congue et, vulputate ut ligula.
          </p>
        </div>
      </div>
      <div className="main-needs">
        <h1>Need help with photography or videography?</h1>
        <p>We're here for you!</p>
        <button>Get in touch</button>
      </div>
    </div>
  );
};
