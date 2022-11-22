import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';

export const Facebook = props => {
    return (
        <FontAwesomeIcon icon={faFacebookSquare}/>  
    )
}

export const LeftArrow = props => {
    return (
        <FontAwesomeIcon icon={faArrowLeft}/>
    )
}
