import React from "react";
import "../../css/common.css";
import Typography from "@mui/material/Typography";
import { data } from "../../API/companyData";
const ContentLudhiyana = () => {
  return (
    <div className="content">
      <div className="content-items">
        <div className="right-content">
          <div>
            <h1 style={{ color: "#00787D" }}>
              TFI Ludhiana -{" "}
              <label style={{ fontWeight: "300" }}>
                19th to 21st January 2024
              </label>
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
              if (data.address.includes("Ludhiana")) {
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
            The 29th Edition of YARNEX - India International Yarn Exhibition &
            17th Edition of TEXINDIA - Textile Sourcing Fair will held on 19,
            20, 21 (Fri, Sat, Sun) January 2024 at Dana Mandi, Bahadur Ke Road,
            Ludhiana. The twin shows will once again bring together under one
            roof manufacturers and suppliers of Fibers, Yarns, Apparel Fabrics,
            Trims, Embellishments, Job-working firms and related services to
            showcase their merchandise to discerning buyers from India and
            overseas.
          </Typography>
        </div>
      </div>
      <div className="content-footer">
        <button>KNOW MORE</button>
      </div>
    </div>
  );
};
export default ContentLudhiyana;
