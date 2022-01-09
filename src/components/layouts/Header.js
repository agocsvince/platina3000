import React, { useCallback, useEffect } from 'react';
import logo from "../../images/logo.png";
import '../../style.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import ScriptTag from 'react-script-tag';
import { useLocation } from 'react-router-dom';

const Header = props => {
    const handleClick = useCallback(props => {
        let pages = document.getElementsByClassName('pages')[0].childNodes;
        pages.forEach(element => {
            if (element !== null) {
                if (element.id !== null) {
                    element.id = "";
                }
            }
        });

        props.target.id = 'current-page'
    }, [])

    const location = useLocation()
    useEffect(() => {
        let pages = document.getElementsByClassName('pages')[0].childNodes;
        // console.log(pages)
            pages.forEach(page => {
                // console.log(page)
                if (location.pathname === page.href) {
                    console.log("object")
                }
            })
        
        // console.log(location.pathname)
    }, [location])

    return (
        <header className="flex">
                <div className="logo">
                    <Link to="/"><img src={logo} alt="logo"/></Link>
                </div>
                <div className="pages mr-2">
                    <HashLink to="/#house" id='current-page' onClick={handleClick}>Főoldal</HashLink>
                    <HashLink to="/#work" onClick={handleClick}>Kivitelezés</HashLink>
                    <HashLink to="/#prices" onClick={handleClick}>Árak</HashLink>
                    <HashLink to="/#planning" onClick={handleClick}>Tervezés</HashLink>
                    <HashLink to="/most-epul" onClick={handleClick}>Most épül</HashLink>
                    <Link to="/referenciak" onClick={handleClick}>Referenciák</Link>
                    <Link to="/elado" onClick={handleClick}>Eladó</Link>
                    <HashLink to="/#contact" onClick={handleClick}>Kapcsolat</HashLink>
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