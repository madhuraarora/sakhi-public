import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import "../styles/header.css";

function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const navRef = useRef();

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };
  const toggleMobileDropdown = (menu) => {
    setMobileDropdowns((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };
  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <>
      {menuOpen && <div className="overlay active" onClick={closeMenu} />}
      <header className="header">
        <nav className="navbar" ref={navRef}>
          <button
            className={`hamburger ${menuOpen ? "hidden" : ""}`}
            onClick={() => setMenuOpen(true)}
          >
            ⋯
          </button>

          <div className="nav-sections">
            {/* Left Nav */}
            <div className="nav-left">
              <ul className="nav-list">
                <li className="dropdown">
                  <button
                    className="dropdown-btn"
                    onClick={() => toggleDropdown("about")}
                  >
                    Who We Are 
                  </button>
                  {openDropdown === "about" && (
                    <ul className="dropdown-menu">
                      <li>
                        <HashLink
                          smooth to="/#about"
                          className="dropdown-link"
                          onClick={() => setOpenDropdown(null)}
                        >
                          Why We Exist
                        </HashLink>
                      </li>
                      <li>
                        <HashLink
                          smooth to="/#model"
                          className="dropdown-link"
                          onClick={() => setOpenDropdown(null)}
                        >
                          How We Work
                        </HashLink>
                      </li>
                      <li>
                        <Link
                          to="/team"
                          className="dropdown-link"
                          onClick={() => setOpenDropdown(null)}
                        >
                          Behind Sakhi
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="dropdown">
                  <button
                    className="dropdown-btn"
                    onClick={() => toggleDropdown("involved")}
                  >
                    Get in Touch 
                  </button>
                  {openDropdown === "involved" && (
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          to="/contact"
                          className="dropdown-link"
                          onClick={() => setOpenDropdown(null)}
                        >
                          Say Hello
                        </Link>
                      </li>
                
                      <li>
                        <Link
                          to="/volunteer-apply"
                          className="dropdown-link"
                          onClick={() => setOpenDropdown(null)}
                        >
                         Become a Volunteer
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>

            {/* Center */}
            <div className="nav-center-logo">
              <Link to="/" className="logo-link">
                <img
                  src="/logo/only name logo.png"
                  alt="Sakhi Logo"
                  className="logo-img"
                />
              </Link>
            </div>

            {/* Right Nav */}
            <div className="nav-right">
              <ul className="nav-list">
                <li className="dropdown">
                  <button
                    className="dropdown-btn"
                    onClick={() => toggleDropdown("learn")}
                  >
                    Learn 
                  </button>
                  {openDropdown === "learn" && (
                    <ul className="dropdown-menu">
                      
                      {/*
                        <li>
                          <Link
                            to="/learn/stories"
                            className="dropdown-link"
                            onClick={() => setOpenDropdown(null)}
                          >
                            From the Ground
                          </Link>
                        </li>
                      */}

                      <li>
                      <a
                        href="/Sakhi Posters & Handouts.zip"
                        download
                        className="dropdown-link"
                        onClick={() => setOpenDropdown(null)}
                      >
                        ↓ Posters & Handouts
                      </a>
</li>
                    </ul>
                  )}
                </li>
                <li>
                  <HashLink to="/#pad" className="sakhi-pad-link">
                    The Sakhi Pad
                  </HashLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Side Menu */}
        <div className={`side-menu ${menuOpen ? "active" : ""}`}>
          <button className="close-btn" onClick={closeMenu}>✕</button>
          <img
            src="/logo/only name logo.png"
            alt="Sakhi Logo"
            className="side-logo"
          />
          <div className="mobile-section">
            <MobileDropdown
              title="Who We Are"
              menu="about"
              isOpen={mobileDropdowns["about"]}
              toggle={toggleMobileDropdown}
              closeMenu={closeMenu}
              links={[
                { to: "/#about", label: "Why We Exist" },
                { to: "/#model", label: "How We Work" },
                { to: "/team", label: "Behind Sakhi" },
              ]}
            />
            <MobileDropdown
              title="Get in Touch"
              menu="involved"
              isOpen={mobileDropdowns["involved"]}
              toggle={toggleMobileDropdown}
              closeMenu={closeMenu}
              links={[
                { to: "/contact", label: "Say Hello" },
                { to: "/volunteer-apply", label: "Become a Volunteer" },
                // { to: "/report", label: "Submit a Report" },
              ]}
            />
            <MobileDropdown
              title="Learn"
              menu="learn"
              isOpen={mobileDropdowns["learn"]}
              toggle={toggleMobileDropdown}
              closeMenu={closeMenu}
              links={[
                // { to: "/learn/stories", label: "From the Ground" },
                { to: "/Sakhi Posters & Handouts.zip", label: "↓ Posters & Handouts" },
              ]}
            />
            <HashLink smooth to="/#pad" className="side-pad-link" onClick={closeMenu}>
              The Sakhi Pad
            </HashLink>
          </div>
        </div>
      </header>
    </>
  );
}

function MobileDropdown({ title, menu, isOpen, toggle, closeMenu, links }) {
  return (
    <div className="mobile-section">
      <button className="dropdown-btn" onClick={() => toggle(menu)}>
        {title} ▾
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {links.map((item, idx) => (
            <li key={idx}>
              {item.to.endsWith(".zip") ? (
                <a
                  href={item.to}
                  download
                  className="dropdown-link"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ) : item.to.startsWith("/#") ? (
                <HashLink
                  smooth
                  to={item.to}
                  className="dropdown-link"
                  onClick={() => {
                    toggle(null);
                    closeMenu();
                  }}
                >
                  {item.label}
                </HashLink>
              ) : (
                <Link
                  to={item.to}
                  className="dropdown-link"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}



export default Header;
