import React, { useState } from "react";
import { FaHardHat, FaPlay, FaRoad } from "react-icons/fa";
import ModalVideo from "react-modal-video";
import { useTranslation } from "react-i18next";

import aboutImg from "../../assets/img/about_us.jpg";
import btnImg from "../../assets/img/skill_bg.jpg";
import IconBox from "./IconBox";

function AboutFeatured() {
  const { t } = useTranslation();
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="EZ9DrY43wtw"
        onClose={() => setOpen(false)}
      />

      <section
        style={{
          paddingTop: "100px",
          paddingBottom: "100px",
        }}
      >
        <div
          style={{
            maxWidth: "1140px",
            margin: "0 auto",
            paddingLeft: "15px",
            paddingRight: "15px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            {/* Video Section */}
            <div
              style={{
                flex: "0 0 50%",
                maxWidth: "50%",
              }}
            >
              <div
                style={{
                  backgroundImage: `url(${aboutImg.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "400px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    backgroundImage: `url(${btnImg.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <button
                    onClick={() => setOpen(true)}
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      color: "#fff",
                      fontSize: "24px",
                      cursor: "pointer",
                    }}
                  >
                    <FaPlay />
                  </button>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div
              style={{
                flex: "0 0 50%",
                maxWidth: "50%",
                paddingLeft: "40px",
                marginTop: "40px",
              }}
            >
              <div style={{ marginBottom: "20px" }}>
                <span style={{ display: "block", marginBottom: "10px", fontWeight: "bold", fontSize: "18px" }}>
                  {t("about_video_heading")}
                </span>
                <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
                  {t("about_video_title")}
                </h1>
                <h4 style={{ fontSize: "20px", color: "#666" }}>
                  {t("about_video_description")}
                </h4>
              </div>

              {/* Icon Boxes */}
              <div>
                <IconBox
                  icon={<FaHardHat />}
                  heading={t("iconbox_renewal_heading")}
                  text={t("iconbox_renewal_text")}
                />
                <IconBox
                  icon={<FaRoad />}
                  heading={t("iconbox_automation_heading")}
                  text={t("iconbox_automation_text")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutFeatured;
