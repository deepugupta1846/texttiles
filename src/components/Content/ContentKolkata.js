import React from "react";
import "../../css/common.css";
import Typography from "@mui/material/Typography";
import { data } from "../../API/companyData";
const ContentKolkata = () => {
  return (
    <div className="content">
      <div className="content-items">
        <div className="left-content">
          <div>
            <h1 style={{ color: "#00787D" }}>
              TFI Kolkata -{" "}
              <label style={{ fontWeight: "300" }}>
                24th to 26th November 2023
              </label>
            </h1>
          </div>
          <div className="left-company-img">
            {data.map((data, index) => {
              if (data.address.includes("Kolkata ")) {
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
            The 28th Edition of YARNEX - India International Yarn Exhibition,
            16th Edition of TEXINDIA - Textile Sourcing Fair, Indigo and DyChem
            will be held on 24, 25, 26, November 2023 (Fri, Sat, Sun) at Biswa
            Bangla Mela Prangan, Kolkata. The shows will once again bring
            together under one roof manufacturers and suppliers of Fibers,
            Yarns, Apparel Fabrics, Trims, Embellishments, Job-working firms and
            related services to showcase their merchandise to discerning buyers
            from India and overseas.
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
export default ContentKolkata;
