import React, { useState } from "react";
import "./Header.scss";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo/InStock-Logo_2x.png";
import { NavLink } from "react-router-dom";

function Header() {
//   const [currentPage, setCurrentPage] = useState("warehouse");
//   const navigate = useNavigate();

//   const handleNavigation = (page) => {
//     setCurrentPage(page);
//     navigate(`/${page}`);
//   };

  return (
    <section className="header">
      <section className="header__nav">
        <div className="header__logo-section">
            <NavLink to="/">
            <img src={Logo} alt="InStock Logo" className="header__logo" />
            </NavLink>
        </div>

        <div className="header__list">
          <div className="header__warehouse-section">
            <NavLink 
              to="/warehouse"
              className={({isActive}) =>
              `   header__warehouse header__modifier ${
                  isActive ? "header--active" : ""
                }`                
            }
            >
                Warehouses
            </NavLink>
          </div>
          <div className="header__inventory-section">
          <NavLink 
              to="/inventory"
              className={({isActive}) =>
              `   header__inventory header__modifier ${
                  isActive ? "header--active" : ""
                }`                
            }
            >
                Inventory
            </NavLink>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Header;
