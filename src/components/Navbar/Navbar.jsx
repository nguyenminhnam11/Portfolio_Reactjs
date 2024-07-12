import React, { useState } from "react";
import "./Navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import MobileNav from "./MobileNav";
import resume_reactjs from "../../images/frontEnd_CV_en.pdf";
import { useTranslation } from "react-i18next";
import SwitchLang from "./SwitchLang";


function Navbar() {
  const {t} = useTranslation()

  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleScrollHome = () => {
    window.scrollTo(0, 0);
  };

  const handleScrollAbout = () => {
    window.scrollTo(0, 750);
  };
  const handleScrollSkills = () => {
    window.scrollTo(0, 1390);
  };
  const handleScrollProject = () => {
    window.scrollTo(0, 2140);
  };

  const handleScrollE = () => {
    window.scrollTo(0, 2860);
  };

  const handleScrollContact = () => {
    window.scrollTo(0, 3500);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper">
        <div className="nav-content">
          <p className="logo" onClick={handleScrollHome}>
            Portfolio
          </p>
          <ul>
            <li>
              <p className="menu-item" onClick={handleScrollHome}>
                {t('navbar-1')}
              </p>
            </li>

            <li>
              <p className="menu-item" onClick={handleScrollAbout}>
                {t('navbar-2')}
              </p>
            </li>

            <li>
              <p className="menu-item" onClick={handleScrollSkills}>
                {t('navbar-3')}
              </p>
            </li>

            <li>
              <p className="menu-item" onClick={handleScrollProject}>
                {t('navbar-4')}
              </p>
            </li>

            <li>
              <p className="menu-item" onClick={handleScrollE}>
                {t('navbar-5')}
              </p>
            </li>

            <li>
              <p className="menu-item" onClick={handleScrollContact}>
                {t('navbar-6')}
              </p>
            </li>

            <li>
              <SwitchLang />
            </li>

            <a
              style={{ textDecoration: "none" }}
              href={resume_reactjs}
              download="Resume-ReactJS-PDF"
              className="resume-btn"
            >
              Resume
              <i
                class="bx bx-download"
                style={{ fontSize: "20px", marginLeft: "6px" }}
              ></i>
            </a>
          </ul>
          <button class="menu-btn" onClick={toggleMenu}>
            <MenuIcon>{openMenu ? "close" : "menu"}</MenuIcon>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
