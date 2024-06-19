import React, { useState } from 'react'
import './Header.scss'
import Logo from '../../assets/logo/InStock-Logo_2x.png';

function Header() {
    const [currentPage, setCurrentPage] = useState("warehouse");
  return (
    <section className="header">
        <section className="header__nav">
            <div className="header__logo-section">
                <img src={Logo} alt="" className="header__logo" />
            </div>

            <div className="header__list">
                <div className="header__warehouse-section">
                    <button onClick={() => setCurrentPage("warehouse")} className={`header__warehouse header__modifier ${currentPage === "warehouse" ? 'header--active': ""}`}>Warehouses</button>
                </div>
                <div className="header__inventory-section">
                    <button onClick={() => setCurrentPage("inventory")} className={`header__inventory header__modifier ${currentPage === "inventory" ? 'header--active': ""}`} >Inventory</button>
                </div>
            </div>
        </section>
    </section>
  )
}

export default Header;