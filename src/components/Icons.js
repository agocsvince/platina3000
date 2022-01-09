import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

export const Facebook = props => {
    return (
        <FontAwesomeIcon icon={fab.faFacebookSquare}/>  
    )
}

export const LeftArrow = props => {
    return (
        <FontAwesomeIcon icon={fas.faArrowLeft}/>
    )
}
