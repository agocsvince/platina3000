import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReferenceContext } from '../ReferenceContext';
import UrlMaker from '../UrlMaker';

const References = props => {
    const [state, setstate] = useState([])
    const { references, isLoaded } = useContext(ReferenceContext);

    useEffect(() => {
        if (isLoaded) {
            setstate(references)
        }
    }, [isLoaded,references])

    
    return (
            <main>
                <section id="wip" className="py-1">
                    <div className="text ml-4 mt-2">
                        <h4 className="mb-05"><strong className="slash">\</strong> Referenciák</h4>
                        <h2 className="mb-2">Elkészült munkáink</h2>
                    </div>
                    <div className="images grid m-4">
                        {state.map(reference => (
                            <Link className="image" to={"/referenciak/" + UrlMaker(reference.title)} key={reference.id} state={{ title: reference.url }}>
                                <div className="reference-image" key={reference.id} style={{ backgroundImage:"url(" + reference.gallery[0].url + ")"}}/>
                                <h3 className="mb-1">{reference.title}</h3>
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
    )
    
    
}

export default References;