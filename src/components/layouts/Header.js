import React, { useCallback, useState } from 'react';
import logo from "../../images/logo.webp";
import '../../style.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = props => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = useCallback(props => {
        let pages = document.getElementsByClassName('pages')[0].childNodes;
        pages.forEach(element => {
            if (element !== null) {
                if (element.id !== null) {
                    element.id = "";
                }
            }
        });

        props.target.id = 'current-page';
        setIsMenuOpen(false);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`flex${isMenuOpen ? ' active' : ''}`}>
                <div className="logo">
                    <HashLink to="/#house"><img src={logo} alt="logo"/></HashLink>
                </div>
                <div className={`pages mr-2${isMenuOpen ? ' active' : ''}`}>
                    <HashLink to="/#house" id='current-page' onClick={handleClick}>Főoldal</HashLink>
                    <HashLink to="/#work" onClick={handleClick}>Kivitelezés</HashLink>
                    <HashLink to="/#prices" onClick={handleClick}>Árak</HashLink>
                    <HashLink to="/#planning" onClick={handleClick}>Tervezés</HashLink>
                    <HashLink to="/most-epul" onClick={handleClick}>Most épül</HashLink>
                    <Link to="/referenciak" onClick={handleClick}>Referenciák</Link>
                    <Link to="/elado" onClick={handleClick}>Eladó</Link>
                    <HashLink to="/#contact" onClick={handleClick}>Kapcsolat</HashLink>
                </div>
                <div className={`hamburger${isMenuOpen ? ' active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </header>
    )
}

export default Header;