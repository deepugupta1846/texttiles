import React from "react";
import "../../css/common.css";
import Typography from "@mui/material/Typography";
import { data } from "../../API/companyData";
const ContentBanglore = () => {
  return (
    <div className="content">
      <div className="content-items">
        <div className="left-content">
          <div>
            <h1 style={{ color: "#00787D" }}>
              TFI Bangalore -{" "}
              <label style={{ fontWeight: "300" }}>
                23rd to 25th February 2024
              </label>
            </h1>
          </div>
          <div className="left-company-img">
            {data.map((data, index) => {
              if (data.address.includes("Bangalore ")) {
                return (
                  <div key={index}>
                    <img src={data.image} />
                  </div>
                );
              }
            })}
          </div>
          <Typography
            variant="subtitle2"
            gutterBottom
            style={{ marginTop: "20px", fontSize: "15px" }}
          >
            The F&A Show - Fabrics & Accessories Trade Show , Apparel Sourcing
            Fair is scheduled on 23, 24, 25 (Fri, Sat, Sun) February 2024 at
            Trade Centre, KTPO, Whitefield, Bangalore. The shows will integrate
            the manufacturers and suppliers of apparel fabrics, trims,
            embellishments, apparels and services from India and overseas to
            showcase their merchandise to discerning buyers from across the
            world.
          </Typography>
        </div>
        <div className="right-content">
          <div className="right-img">
            <img src="images/content/home-show-delhi.jpg" />
          </div>
        </div>
      </div>
      <div className="content-footer">
        <button>KNOW MORE</button>
      </div>
    </div>
  );
};
export default ContentBanglore;
