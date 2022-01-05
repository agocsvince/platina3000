import React, {useState, useEffect, createContext } from 'react';
import UrlMaker from './components/UrlMaker';

export const ReferenceContext = createContext();

export const ReferenceProvider = (props) => {
    // State for references
    const [references, setReferences] = useState([])

    // State for letting know when is the content fetched
    const [isLoaded, setIsLoaded] = useState(false)

    // Fetch data from CMS
    useEffect(() => {
        const url = `https://api-eu-central-1.graphcms.com/v2/ckwq5z05y2e8n01xmgomm92ka/master?query=query%20MyQuery%20%7B%0A%20%20referenciaks%20%7B%0A%20%20%20%20id%0A%20%20%20%20title%0A%20%20%20%20gallery%20%7B%0A%20%20%20%20%20%20fileName%0A%20%20%20%20%20%20url%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&operationName=MyQuery`       
        fetch(url)
        .then(res => res.json())
        .then(json => {
            setReferences(json.data.referenciaks);
            setIsLoaded(true);
            });
    },[])
    if (isLoaded) {
        references.forEach(reference => {
            reference.url = UrlMaker(reference.title)
        })
    }
    return(
        <ReferenceContext.Provider value={{references, isLoaded}}>
            {props.children}
        </ReferenceContext.Provider>
    );
}