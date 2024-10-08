import React, { useState } from "react";
import "./Header.css";
import headerData from "../../data/Header.json";
import logo from "../../assets/logo.png";
const Header = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };
  const renderMenuItem = (isMobile = false) =>
    headerData.menuItems.map((item, index) => (
      <li
        key={index}
        onMouseEnter={() => !isMobile && setHoverIndex(index)}
        onMouseLeave={() => !isMobile && setHoverIndex(null)}
      >
        <a
          href={item.link}
          onClick={(e) => {
            if (item.dropdown) {
              e.preventDefault();
              handleMenuClick(index);
            }
          }}
        >
          {item.title}
          {item.dropdown && <i class="fa-solid fa-caret-down"></i>}
        </a>
        {item.dropdown &&
          (hoverIndex === index || (isMobile && openMenu === index)) && (
            <ul className={isMobile ? "mobile-submenu" : "dropdown"}>
              {item.dropdown.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <a href={subItem.link}>{subItem.title}</a>
                </li>
              ))}
            </ul>
          )}
      </li>
    ));
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  return (
    <div className="header">
      <div className="row-wrapper">
        <div className="searchform">
          <button type="submit">
            <i class={headerData.search.iconClass}></i>
          </button>
          <input
            type="search"
            name=""
            id=""
            placeholder={headerData.search.placeholder}
          />
        </div>
        <div className="menu">
          <ul>
            {renderMenuItem().slice(0, 3)}
            <li className="logo">
              <img src={logo} alt="" />
            </li>
            {renderMenuItem().slice(3)}
          </ul>
        </div>
        {/* Mobile Menu */}
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          <i
            className={
              isMobileMenuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
            }
          ></i>
        </button>
        <nav className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <ul>{renderMenuItem(true)}</ul>
        </nav>
        {/* Icons */}
        <div className="icons">
          <ul>
            {headerData.icons.map((icon, index) => (
              <li key={index}>
                <a href={icon.link}>
                  <i className={icon.iconClass}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* mobile logo */}
        <div className="mobile-logo">
          <img src={logo} alt="logo" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
