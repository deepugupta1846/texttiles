import React from "react";
const Company = (props) => {
  const { logo, address } = props;
  return (
    <div className="company-details">
      <div>
        <img src={logo} className="company-logo" />
      </div>
      <div className="company-title">
        <label>{address}</label>
      </div>
    </div>
  );
};
export default Company;
