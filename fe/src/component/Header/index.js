import React from 'react'
import './index.css'
import logo from "../../assets/img/logo.png";
const Header = () => {
    return (
        <div className="d_flex_bethween header">
            <img src={logo} alt="" className="logo" />
            <ul className="navbar">
                <li>PRODUCTS</li>
                <li>SOLUTIONS</li>
                <li>CUSTOMERS</li>
                <li>SUPPORT</li>
                <li>RESOURCES</li>
                <li>ABOUT</li>
                <li>
                    PRICING <i class="fa-solid fa-chevron-right"></i>
                </li>
            </ul>
            <div className="contact">
                <div>
                    <i class="fa-regular fa-user"></i>
                </div>
                <div>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div>
                    <b style={{ fontSize: "15px" }}>EN</b>
                    <i class="fa-solid fa-chevron-down"></i>
                    <ul className="language">
                        <li>English</li>
                        <li>Español</li>
                        <li>Español (América Latina)</li>
                        <li>Deutsch</li>
                        <li>Français</li>
                        <li>Italiano</li>
                        <li>Português</li>
                        <li>Português (Brasil)</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Header