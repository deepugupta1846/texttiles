import React from "react";
import "../../css/common.css";
import Typography from "@mui/material/Typography";
import { data } from "../../API/companyData";
const ContentMumbai = () => {
  return (
    <div className="content">
      <div className="content-items">
        <div className="right-content">
          <div>
            <h1 style={{ color: "#00787D" }}>
              TFI Mumbai -{" "}
              <label style={{ fontWeight: "300" }}>To be announced</label>
            </h1>
          </div>
          <div className="right-img">
            <img src="images/content/home-show-ludhiana.jpg" />
          </div>
        </div>
        <div
          className="left-content"
          style={{
            width: "50%",
            marginTop: "100px",
          }}
        >
          <div className="left-company-img">
            {data.map((data, index) => {
              if (data.address.includes("Mumbai")) {
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
            The shows will bring manufacturers and suppliers of Apparel Fabrics,
            Denims, Trimmings, Embellishments and Services under one roof to
            provide buyers a wholesome sourcing experience and give them access
            to review new products, trends information and establish linkages
            with leading suppliers.
          </Typography>
        </div>
      </div>
      <div className="content-footer">
        <button>KNOW MORE</button>
      </div>
    </div>
  );
};
export default ContentMumbai;
