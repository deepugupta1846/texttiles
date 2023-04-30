import React from "react";
import { data } from "../../API/companyData";
import Company from "./Company";

function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <img src="images/logo.png" className="logo" />
        <h1>The trade shows designed to generate new business opportunities</h1>
        <div className="company">
          {data.map((data, index) => {
            return (
              <div key={index}>
                <Company logo={data.image} address={data.address} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
