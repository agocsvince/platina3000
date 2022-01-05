import React from 'react';
import { HashLink } from 'react-router-hash-link';
import blue_logo from "../images/logo_blue.png";

const Footer = props => {
    return (
        <footer>
                <div className="grid info mb-4">
                    <div>
                        <img src={blue_logo} alt="logo"/>
                        <h2>Munkavégzés magas színvonalon</h2>
                        <p>Családi házak és társasházak generálkivitelezése</p>
                    </div>
                    <div>
                        <h2>Navigáció</h2>
                        <HashLink to="/referenciak"><p>Referenciák</p></HashLink>
                        <HashLink to="/#prices"><p>Árak</p></HashLink>
                        <HashLink to="/#work"><p>Kivitelezés</p></HashLink>
                        <HashLink to="/#planning"><p>Tervezés</p></HashLink>
                    </div>
                    <div>
                        <h2>Elérhetőségünk</h2>
                        <p>2340 Kiskunlacháza, Bethlen G. u. 19.</p>
                        <p>+36 70 940 9189</p>
                        <p>plutobalance@gmail.com</p>
                    </div>
                </div>
                <hr className="mb-1"/>
                <div>
                    <span>© Copyright 2021 Platina 3000 Kft. Minden jog fenntartva.</span>
                </div>
            </footer>
    )
}

export default Footer;