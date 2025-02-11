import React from "react";

export default function SelectTicket() {
  return (
    <div>
      <header>
        <h1>Ticket Selection</h1>
        <p>Step 1/3</p>
      </header>
      <div>
        <div>
          <h2>Techember Fest "25</h2>
          <p>
            Join us for an unforgettable experience at [Event Name]! Secure your
            spot now.
          </p>
          <p>! [Event Location] || March 15, 2025 || 7:00PM</p>
        </div>
      </div>
      <hr />
      <div>
        <p>Select Ticket Type:</p>
        <div>
          <div>
            <div>
              <p>REGULAR ACCESS</p>
              <p>20 left!</p>
            </div>
            <p>Free</p>
          </div>
          <div>
            <div>
              <p>VIP ACCESS</p>
              <p>20 left!</p>
            </div>
            <p>$50</p>
          </div>
          <div>
            <div>
              <p>VVIP ACCESS</p>
              <p>20 left!</p>
            </div>
            <p>$150</p>
          </div>
        </div>
      </div>
      <div>
        <p>Number of Tickets</p>
        <input type="text" name="" id="" />
        <div>
          <button>Cancel</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
}
