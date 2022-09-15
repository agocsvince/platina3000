import React, {useState, useEffect, createContext } from 'react';
import UrlMaker from './UrlMaker';

export const MostEpulContext = createContext();

const MostEpulProvider = (props) => {
    // State for mostEpuls
    const [mostEpuls, setMostEpuls] = useState([]);

    // State for letting know when is the content fetched
    const [isLoaded, setIsLoaded] = useState(false);

    // Fetch data from CMS
    useEffect(() => {
        const url = `https://api-eu-central-1.graphcms.com/v2/ckwq5z05y2e8n01xmgomm92ka/master?query=query%20MyQuery%20%7B%0A%20%20mostEpuls%20%7B%0A%20%20%20%20gallery%20%7B%0A%20%20%20%20%20%20fileName%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20url(transformation%3A%20%7Bdocument%3A%20%7Boutput%3A%20%7Bformat%3A%20webp%7D%7D%7D)%0A%20%20%20%20%7D%0A%20%20%20%20title%0A%20%20%20%20id%0A%20%20%7D%0A%7D%0A`       
        fetch(url)
        .then(res => res.json())
        .then(json => {
            setMostEpuls(json.data.mostEpuls);
            setIsLoaded(true);
        });
    },[])
    if (isLoaded) {
        mostEpuls.forEach(mostEpul => {
            mostEpul.url = UrlMaker(mostEpul.title)
        })
    }
    return(
        <MostEpulContext.Provider value={{mostEpuls, isLoaded}}>
            {props.children}
        </MostEpulContext.Provider>
    );
}

export default MostEpulProvider;