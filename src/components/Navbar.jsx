import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoClose, IoMenu } from 'react-icons/io5';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar">
            <div className="header">
                <h1>Stock Market Insight Dashboard</h1>
                <button onClick={toggleMenu}>
                    {isOpen ? <IoClose /> : <IoMenu />}
                </button>
            </div>
            {isOpen && (
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                    <NavLink to="/about">About</NavLink>
                </nav>
            )}
        </div>
    );
};

export default Navbar;
