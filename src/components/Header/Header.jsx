import React from 'react'
import './Header.scss'
import Logo from '../../assets/logo/InStock-Logo_2x.png';

function Header() {
  return (
    <section className="header">
        <section className="header__nav">
            <div className="header__logo-section">
                <img src={Logo} alt="" className="header__logo" />
            </div>

            <div className="header__list">
                <div className="header__warehouse-section">
                    <button className="header__warehouse header__modifier">Warehouses</button>
                </div>
                <div className="header__inventory-section">
                    <button className="header__inventory header__modifier" >Inventory</button>
                </div>
            </div>
        </section>
    </section>
  )
}

export default Header;