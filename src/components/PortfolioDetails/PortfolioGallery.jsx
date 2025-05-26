import React from "react";
import Image from "next/image";

function PortfolioGallery({ galeryImg }) {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="project-shot">
        <div>
          <a href={galeryImg} className="popup-gallery">
            <Image
              src={galeryImg}
              alt="Project"
              width={500}
              height={400}
              className="w-full h-auto object-cover"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default PortfolioGallery;
