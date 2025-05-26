import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";

function PageBanner({ bannerBg, currentPage, heading }) {
  const { t } = useTranslation();

  return (
    <section
      style={{
        position: "relative",
        backgroundColor: "#cfac6e",
        paddingTop: "120px",
        paddingBottom: "120px",
        overflow: "hidden",
      }}
    >
      {/* Optimized background image */}
      <Image
        src={bannerBg}
        alt="Page Banner Background"
        layout="fill"
        objectFit="cover"
        quality={90}
        priority
        style={{
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          opacity: 0.1,
          zIndex: 10,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 20,
          maxWidth: "1140px",
          margin: "0 auto",
          paddingLeft: "15px",
          paddingRight: "15px",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div style={{ width: "100%" }}>
            <div style={{ overflow: "hidden" }}>
              <nav>
                <ol
                  style={{
                    backgroundColor: "transparent",
                    padding: 0,
                    marginBottom: "10px",
                    display: "flex",
                    listStyle: "none",
                  }}
                >
                  <li
                    style={{
                      color: "#cfac6e",
                      fontSize: "15px",
                      fontWeight: 500,
                      textTransform: "capitalize",
                    }}
                  >
                    <Link href="/" passHref legacyBehavior>
                      <a
                        style={{
                          color: "white",
                          textDecoration: "none",
                        }}
                        onMouseEnter={(e) =>
                          (e.target.style.color = "#ff5e14")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.color = "white")
                        }
                      >
                        {t("breadcrumb_home", "Home")}
                      </a>
                    </Link>
                  </li>
                  <li
                    style={{
                      color: "#c5c2c2",
                      fontSize: "15px",
                      fontWeight: 500,
                      textTransform: "capitalize",
                      marginLeft: "8px",
                    }}
                    aria-current="page"
                  >
                    | {t(currentPage, currentPage)}
                  </li>
                </ol>
              </nav>
            </div>

            <div style={{ color: "white" }}>
              <h1
                style={{
                  fontSize: "80px",
                  lineHeight: 1.1,
                  margin: 0,
                }}
              >
                {t(heading, heading)}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageBanner;
