import React from "react";
import "./CertificatesCard.css";

const CertificatesCard = ({ detail }) => {
  return (
    <div className="certificate-card">
      <h6>{detail.title}</h6>

      <div className="certificate-content"></div>
      <h5>
        <a href= {detail.sources} >
          {detail.sources}
        </a>
      </h5>
    </div>
  );
};

export default CertificatesCard;
