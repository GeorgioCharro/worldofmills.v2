import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import bgImg from "../../assets/img/skill_bg.jpg";
import leftImg from "../../assets/img/skill_img.jpg";
import SkillBar from "./SkillBar";

function SkillSet() {
  const { t } = useTranslation();

  return (
    <section style={{ paddingTop: 0, paddingBottom: "100px" }}>
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
            backgroundImage: `url(${bgImg.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            color: "white",
            paddingTop: "100px",
            paddingBottom: "100px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "40px",
            }}
          >
            {/* Image on the Left */}
            <div
              style={{
                flex: "1 1 45%",
                minWidth: "300px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "500px",
                  height: "400px",
                }}
              >
                <Image
                  src={leftImg}
                  alt={t("professional_team_heading")}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>

            {/* Content on the Right */}
            <div
              style={{
                flex: "1 1 50%",
                minWidth: "300px",
              }}
            >
              <div style={{ marginBottom: "30px" }}>
                <span
                  style={{
                    display: "block",
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  {t("our_expertise")}
                </span>
                <h1
                  style={{
                    fontSize: "36px",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  {t("professional_team_heading")}
                </h1>
                <h4
                  style={{
                    fontSize: "20px",
                    fontWeight: "normal",
                    color: "#e0e0e0",
                  }}
                >
                  {t("professional_team_description")}
                </h4>
              </div>

              <SkillBar
                heading={t("food_machinery_solutions")}
                progress="90%"
              />
              <SkillBar heading={t("industrial_automation")} progress="85%" />
              <SkillBar
                heading={t("sustainable_manufacturing")}
                progress="80%"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillSet;
