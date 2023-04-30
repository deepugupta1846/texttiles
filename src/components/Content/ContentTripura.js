import React from "react";
import "../../css/common.css";
import Typography from "@mui/material/Typography";
import { data } from "../../API/companyData";
const ContentTripura = () => {
  return (
    <div className="content">
      <div className="content-items">
        <div className="right-content">
          <div>
            <h1 style={{ color: "#00787D" }}>
              TFI Tirupur -{" "}
              <label style={{ fontWeight: "300" }}>
                28th to 30th September 2023
              </label>
            </h1>
          </div>
          <div className="right-img">
            <img src="images/content/home-show-delhi.jpg" />
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
              if (data.address.includes("Tirupur")) {
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
            The 27th Edition of YARNEX - India International Yarn Exhibition and
            15th Edition of TEXINDIA - Textile Sourcing Fair and DyChem will be
            held on 28, 29, 30 (Thur, Fri, Sat) September 2023 at India Knit
            Fair Complex, Tirupur. The twin shows will once again bring together
            under one roof manufacturers and suppliers of Fibers, Yarns, Apparel
            Fabrics, Trims, Embellishments, Job-working firms and related
            services to showcase their merchandise to discerning buyers from
            India and overseas.
          </Typography>
        </div>
      </div>
      <div className="content-footer">
        <button>KNOW MORE</button>
      </div>
    </div>
  );
};
export default ContentTripura;
