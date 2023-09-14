import "./Header.css"
import MobileMenu from "../mobileMenu/MobileMenu";

import Logo from "../../../assets/images/logo.png";
import Telegram from "../../../assets/images/icons/telegram.svg";
import Discord from "../../../assets/images/icons/discord.svg";
import Twitter from "../../../assets/images/icons/twitter.svg";
import Facebook from "../../../assets/images/icons/facebook.svg";
import Instagram from "../../../assets/images/icons/instagram.svg";
// import Globe from "../../../assets/images/icons/globe.png";
import { Menu } from "@mui/icons-material";

import { useState } from "react";

const Header = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setIsMobileMenu(!isMobileMenu);
  };

  return (
    <>
      <div className="Header">
      <div className="header-section">
        <div className="container">
          <div className="gittu-header-content">
            <div className="gittu-header-left">
              <a
                className="gittu-header-logo"
                href="https://benefitmine.io/"
              >
                <img src={Logo} alt="Logo" />
              </a>

      
            </div>
            <div className="gittu-header-right">
              <div className="gittu-header-menu-toggle">
                <button
                  className="menu-toggler"
                  onClick={handleMobileMenu}
                >
                  <Menu />
                </button>
              </div>
              <div className="gittu-header-right-menu">
                <ul className="social-links">
                  <li>
                    <a
                      href="https://benefitmine.io/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Official Website
                      {/* <img src={Globe} alt="icon" /> */}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://t.me/BenefitMine"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={Telegram} alt="icon" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/benefitmine"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={Twitter} alt="icon" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/benefitmine_official"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={Instagram} alt="icon" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.com/invite/BenefitMine"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={Discord} alt="icon" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/BenefitMine.OfficialPage/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={Facebook} alt="icon" />
                    </a>
                  </li>
                </ul>

                
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      {isMobileMenu && <MobileMenu mobileMenuHandle={handleMobileMenu} />}
    </>
  );
};

export default Header;
