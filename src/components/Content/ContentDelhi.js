import React from "react";
import "../../css/common.css";
import Typography from "@mui/material/Typography";
import { data } from "../../API/companyData";
const ContentDelhi = () => {
  return (
    <div className="content">
      <div className="content-items">
        <div className="left-content">
          <div>
            <h1 style={{ color: "#00787D" }}>
              TFI Delhi -{" "}
              <label style={{ fontWeight: "300" }}>6th to 8th July 2023</label>
            </h1>
          </div>
          <div className="left-company-img">
            {data.map((data, index) => {
              if (data.address.includes("Delhi")) {
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
            YARNEX, F&A Show, Indigo, Dychem, Homtex and ASF is scheduled on 6,
            7, 8 July 2023 (Thu, Fri, Sat) at Hall No. 2, 3, 4, Pragati Maidan,
            New Delhi. The SIX shows will integrate the manufacturers and
            suppliers of fibers, yarns, apparel fabrics, denims, trims,
            embellishments, apparels and services from India and overseas to
            showcase their merchandise to the buyers from across the world.
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
export default ContentDelhi;
