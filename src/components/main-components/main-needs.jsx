import React from "react";

import { Popover } from "@headlessui/react";

function MainNeeds() {
  return (
    <div className="main-needs">
      <h1>Need help with photography or videography?</h1>
      <p>We're here for you!</p>
      <Popover>
        <Popover.Button>Get in touch</Popover.Button>

        <Popover.Panel className="absolute z-10">
          <div>
            <p className="main-needs-popover">
              The function is not available yet, this is a demo version of the
              site
            </p>
          </div>
        </Popover.Panel>
      </Popover>
    </div>
  );
}

export default MainNeeds;
