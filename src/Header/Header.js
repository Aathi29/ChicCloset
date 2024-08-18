import React from 'react';
import logo from '../Images/Logo.jpg';

export default function Header(){
    return(
        // <div className='header'>
        //     <div className='logo-container'>
        //         <img className='logo' alt='logo' src={logo} />
        //     </div>
        //     <div className='nav-items'>
        //         <ul>
        //             <li>Home</li>
        //             <li>Saree</li>
        //             <li>Kurta</li>
        //             <li>Pant</li>
        //             <input type='search'/>
        //             <li>Profile</li>
        //             <li>Wishlist</li>
        //             <li>Cart</li>
        //         </ul>
        //     </div>
        // </div>
        <nav className="navbar">
            <ul className="navbar-nav">
                <div className='logo-container'>
                    <li className="nav-item">
                        <img className='logo' alt='logo' src={logo} />
                    </li>
                </div>
                <li className="nav-item">
                    <a href="/" className="nav-link">Home</a>
                </li>
                <li className="nav-item dropdown">
                    <a href="/saree" className="nav-link">Saree</a>
                    <div className="dropdown-content">
                        {/* Dropdown items for Saree */}
                        <a href="/saree1">Banarasi Silk</a>
                        <a href="/saree2">Mysore Silk</a>
                        <a href="/saree3">Soft Silk</a>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a href="/kurta" className="nav-link">Kurta</a>
                    <div className="dropdown-content">
                        {/* Dropdown items for Kurta */}
                        <a href="/kurta1">Kurta 1</a>
                        <a href="/kurta2">Kurta 2</a>
                        <a href="/kurta3">Kurta 3</a>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a href="/pant" className="nav-link">Pant</a>
                    <div className="dropdown-content">
                        {/* Dropdown items for Pant */}
                        <a href="/pant1">Pant 1</a>
                        <a href="/pant2">Pant 2</a>
                        <a href="/pant3">Pant 3</a>
                    </div>
                </li>
                <li className="nav-item">
                    <input type="text" placeholder="Search..." />
                </li>
                <li className="nav-item">
                    <a href="/profile" className="nav-link">Profile</a>
                </li>
                <li className="nav-item">
                    <a href="/wishlish" className="nav-link">Wishlist</a>
                </li>
                <li className="nav-item">
                    <a href="/cart" className="nav-link">Cart</a>
                </li>
            </ul>
        </nav>
    );
}