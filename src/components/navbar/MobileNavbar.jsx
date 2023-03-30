import { useState } from "react";
import navIcon  from '/img/menu-icon.svg'
import navIconX from "/img/close.svg"
import logo from '/img/logo.png'
import './mobileNavbar.css'
import navbarItems from '../../data/navbar-items.json'

const MobileNavbar = () => {
    const [Mobile, setMobile] = useState(false)
    return (
        <div className="navbar">
                <div className="container">
                    <div className="items">
                        <div className="logo">
                            <img style={{cursor: 'pointer'}} src={logo} alt="logo" />
                        </div>
                        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
                            {navbarItems.map((item, index) => (
                                <li key={index}>                     
                                    <a href={item.link}>{item.name}</a>
                                </li>
                            ))}
            
                        </ul>
                        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
                            {Mobile ? <img src={navIconX} /> : <img src={navIcon} />}
                        </button>
                    </div> 
                </div>
        </div>
    )
}

export default MobileNavbar