import React from "react";
import hugeicons from "../img/hugeicons_ticket-01.png";
import ticz from "../img/ticz.png";
export default function UtilityHeader() {
  return (
    <header>
      <div>
        <span>
          <img src={hugeicons} alt="" />
        </span>
        <span>
          <img src={ticz} alt="" />
        </span>
      </div>
      <div>
        <ul>
          <li>Events</li>
          <li>My Tickets</li>
          <li>About Project</li>
        </ul>
      </div>
      <div>
        <button>MY TICKETS</button>
      </div>
    </header>
  );
}
