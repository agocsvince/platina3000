import React from 'react';
import logo from "../images/logo.png";
import '../../style.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import ScriptTag from 'react-script-tag';

const Header = props => {
    return (
        <header className="flex">
                <div className="logo">
                    <Link to="/"><img src={logo} alt="logo"/></Link>
                </div>
                <div className="pages mr-2">
                    <HashLink to="/#house" id='current-page' >Főoldal</HashLink>
                    <HashLink to="/#work" >Kivitelezés</HashLink>
                    <HashLink to="/#prices" >Árak</HashLink>
                    <HashLink to="/#planning" >Tervezés</HashLink>
                    <HashLink to="/most-epul" >Most épül</HashLink>
                    <Link to="/referenciak" >Referenciák</Link>
                    <Link to="/elado" >Eladó</Link>
                    <HashLink to="/#contact" >Kapcsolat</HashLink>
                </div>
                <div className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ScriptTag type="text/javascript" src="../scripts.js" />
                
            </header>
            
    )
}

export default Header;