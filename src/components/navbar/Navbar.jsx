import { useState } from 'react';
import logo from '/img/logo.png'
import en from '/img/en.png'
import ka from '/img/ka.png'
import aye from '/img/aye.png'
import sun from '/img/sun.png'
import './navbar.css'

const Navbar = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const items = [
      {
        value: 'en',
        label: 'EN',
        image: en,
      },
      {
        value: 'ka',
        label: 'KA',
        image: ka,
      }
    ];
    const togglePassword = () => {
        setPasswordShown(!passwordShown)
    }
    const handleDropdownToggle = () => {
      setIsOpen(!isOpen);
    }
    const handleItemClick = (item) => {
      setSelectedItem(item);
      setIsOpen(false);
    }
    return (
        <div className="navbar">
            <div className="container">
                <div className="items">
                    <div className="logo">
                        <img style={{cursor: 'pointer'}} src={logo} alt="logo" />
                    </div>
                    <div className="inputs">
                        <input type="text" className="text" />
                        <div className="password-section">
                            <input type={passwordShown ? "text" : "password"} className="password-input" />
                            <img onClick={togglePassword} src={aye} alt="ayeIcon" className='aye-icon'/>
                        </div>
                        <button className="btn">log in</button>
                        <button className="btn btn-green">sign up</button>
                        <button className='btn-theme'>
                            <img src={sun} alt="sunIcon" />
                        </button>
                        <div className="dropdown">
                            <div className="dropdown-toggle" onClick={handleDropdownToggle}>
                                {selectedItem ? (
                                    <>
                                        <div className="dropdown-stmenu text">
                                            <span>{selectedItem.label}</span>
                                            <img src={selectedItem.image} alt={selectedItem.label} />
                                        </div>
                                    </>
                                ) : (
                                    <div className="dropdown-stmenu text">
                                        <span>{items[0].label}</span>
                                        <img src={items[0].image} alt={items[0].label} />
                                    </div>
                                )}
                            </div>
                            {isOpen && (
                                <div className="dropdown-menu text">
                                    {items.map((item) => (
                                        <div
                                            key={item.value}
                                            className="dropdown-item"
                                            onClick={() => handleItemClick(item)}
                                        >
                                            <span>{item.label}</span>
                                            <img src={item.image} alt={item.label} />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar