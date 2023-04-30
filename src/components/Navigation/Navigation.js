import React, { useState } from "react";
import "../../css/navigation.css";
const Navigation = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="navbar-container">
      <div
        className="humberger-menu"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <label>&#9776;</label>
      </div>
      <div className={toggle ? "navbar-link show" : "navbar-link"}>
        <label>Home</label>
        <label>About TFI</label>
        <label>TFI Shows</label>
        <label>Event Highlights</label>
        <label>Download</label>
        <label>Gallery</label>
        <label>Testimonials</label>
        <label>Contact Us</label>
      </div>
    </div>
  );
};
export default Navigation;
