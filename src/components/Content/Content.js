import React from "react";
import "../../css/common.css";
import Typography from "@mui/material/Typography";
const Content = () => {
  return (
    <div className="content">
      <div className="content-header">
        <h1>TEXTILE FAIRS INDIA (TFI) - Integrating the textile value chain</h1>
      </div>
      <div className="content-items">
        <div className="left-content">
          <Typography
            variant="subtitle2"
            gutterBottom
            style={{ fontSize: "15px" }}
          >
            S S Textile Media Private Limited (SSTM) is into organizing (B2B)
            Business to Business trade shows related to the textile value chain
            since 2004 in India. Over the last 18 years, we have been extremely
            focused and passionate in creating valuable brands that serve the
            total textile value chain.
          </Typography>
          <Typography
            variant="subtitle2"
            gutterBottom
            style={{ marginTop: "20px", fontSize: "15px" }}
          >
            SSTM currently organizes focused trade shows viz. F&A Show - Fabrics
            & Accessories Trade Show in Bangalore, Mumbai and New Delhi. YARNEX
            - India International Yarn Exhibition in New Delhi, Ludhiana,
            Mumbai, Tirupur and Kolkata. TEXINDIA – Textile Sourcing Fair in
            Tirupur, Kolkata and Ludhiana. Apparel Sourcing Fair in Bangalore &
            New Delhi. Homtex - Home Textiles | Home Decor in New Delhi. Indigo
            in Delhi and Kolkata. DyChem in Delhi, Kolkata and Tirupur. The
            events held annually brings together high quality buyers and
            suppliers to source products and establish linkages with existing as
            well as new suppliers. Our endeavor is to build and consolidate upon
            the success of these brands and also continuously provide
            value-added services for the value chain.
          </Typography>
        </div>
        <div className="right-content">
          <div className="right-img">
            <img src="images/content/home-about-us.jpg" />
          </div>
          <Typography
            variant="subtitle2"
            gutterBottom
            style={{ fontSize: "15px" }}
          >
            TFI inaugurated by Industry Stalwarts Mr. Atul Ujagar, Managing
            Director - Nike Sourcing India & Partner MD (Partners ID, SL, PK &
            VN) and Ms. Nivedita Sinha, General Manager (India Country Manager),
            SuperGroup India Pvt. Ltd. (Superdry Plc)
          </Typography>
        </div>
      </div>
      <div className="content-footer">
        <button>KNOW MORE</button>
      </div>
    </div>
  );
};
export default Content;
