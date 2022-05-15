import React from "react";
import {
    Link
} from "react-router-dom";
import logo from "../assets/images/logo.png";


function MenuNavigation(){
    return(
        <>
            <header id="header">
            <div className="center">                
                <div id="logo">
                    <img src={logo} className="app-logo" alt="logotipo" />
                    <span id="brand">
                        <strong>Farmafrias</strong> Perfumeria
                    </span>
                </div>
                
                <nav id="menu">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/registro">Registro</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
                </nav>
                
                <div className="clearfix"></div>
            </div>            
        </header>            
        </>
    );
}

export default MenuNavigation;