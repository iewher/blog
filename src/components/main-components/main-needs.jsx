import React from "react";

import { Popover } from "@headlessui/react";

function MainNeeds() {
  return (
    <div className="main-needs" id="contact">
      <h1>Need help with photography or videography?</h1>
      <p>We're here for you!</p>
      <Popover className="main-needs-popover">
        <Popover.Button>Get in touch</Popover.Button>

        <Popover.Panel>
          <div>
            <p>
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
