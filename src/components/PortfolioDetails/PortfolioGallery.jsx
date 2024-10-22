import React from "react";

function PortfolioGallery({ galeryImg }) {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="project-shot">
        <div>
          <a href={galeryImg} className="popup-gallery">
            {" "}
            <img src={galeryImg} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default PortfolioGallery;
