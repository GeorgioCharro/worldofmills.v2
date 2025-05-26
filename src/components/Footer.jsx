import React, { useState } from "react";
import {
  Facebook,
  Instagram,
  Phone,
  Email,
  LocationOn,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase.config";

function Footer() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleEmailClick = () => {
    window.location.href = "mailto:worldofmills1@gmail.com";
  };

  const handleSubscribe = async () => {
    if (!email) {
      setError(t("email_required"));
      return;
    }
    try {
      await addDoc(collection(db, "newsletter"), { email });
      setEmail("");
      setError(null);
    } catch (e) {
      setError(t("error_saving_email"));
    }
  };

  return (
    <footer style={{ backgroundColor: "black", color: "white" }} className="pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* About Us */}
          <div className="col-md-4 mb-4">
            <h2 className="h5 fw-bold">{t("about_us")}</h2>
            <p>{t("footer_about_text")}</p>
            <div className="d-flex gap-3">
              <a
                href="https://www.facebook.com/people/World-of-Mills/61556702016508/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook style={{ cursor: "pointer", color: "white" }} />
              </a>
              <a
                href="https://www.instagram.com/_worldofmills_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram style={{ cursor: "pointer", color: "white" }} />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-md-4 mb-4">
            <h2 className="h5 fw-bold">{t("newsletter")}</h2>
            <p>{t("newsletter_text")}</p>
            <div className="input-group mb-2">
              <input
                type="email"
                className="form-control"
                placeholder={t("enter_email")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="btn"
                onClick={handleSubscribe}
                style={{ backgroundColor: "#cfac6e", color: "black", fontWeight: "bold" }}
              >
                Subscribe
              </button>
            </div>
            {error && <p className="text-danger small">{error}</p>}
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h2 className="h5 fw-bold">{t("get_in_touch")}</h2>
            <div className="d-flex align-items-center mb-2">
              <Phone
                style={{
                  backgroundColor: "#cfac6e",
                  color: "black",
                  padding: "4px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
              <p className="mb-0">+971 52 621 1664</p>
            </div>
            <div
              className="d-flex align-items-center mb-2"
              onClick={handleEmailClick}
              style={{ cursor: "pointer" }}
            >
              <Email
                style={{
                  backgroundColor: "#cfac6e",
                  color: "black",
                  padding: "4px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
              <p className="mb-0">worldofmills0@gmail.com</p>
            </div>
            <div className="d-flex align-items-center">
              <LocationOn
                style={{
                  backgroundColor: "#cfac6e",
                  color: "black",
                  padding: "4px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
              <p className="mb-0">{t("Sharjah, Dubai, United Arab Emirates")}</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center pt-4 mt-4 border-top border-secondary">
          <p className="mb-0">
            © <strong style={{ color: "#cfac6e" }}>WorldOfMills</strong> {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
