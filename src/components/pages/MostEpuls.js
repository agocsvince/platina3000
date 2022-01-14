import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MostEpulContext } from '../MostEpulContext';
import UrlMaker from '../UrlMaker';


const MostEpul = props => {
    const [state, setstate] = useState([])
    const { mostEpuls, isLoaded } = useContext(MostEpulContext);

    useEffect(() => {
        if (isLoaded) {
            setstate(mostEpuls)
        }
        
    }, [isLoaded,mostEpuls])

    return (
        <main>
            <section id="wip" className="py-1">
                <div className="text ml-4 mt-2">
                    <h4 className="mb-05"><strong className="slash">\</strong> Most épül</h4>
                    <h2 className="mb-2">Folyamatban lévő munkáink</h2>
                </div>
                <div className="images grid m-4">
                    {state.map(mostEpul => {
                        if (mostEpul.title !== null && mostEpul.gallery !== null) {
                            return (
                            <Link className="image" to={"/most-epul/" + UrlMaker(mostEpul.title)} key={mostEpul.id} state={{ title: mostEpul.url }}>
                                <div className="reference-image" key={mostEpul.id} style={{ backgroundImage:"url(" + (mostEpul.gallery[0].url) + ")"}}/>
                                <h3 className="mb-1">{mostEpul.title}</h3>
                            </Link>)
                        } else if (mostEpul.title !== null && mostEpul.gallery === null) {
                            return (<Link className="image" to={"/most-epul/" + UrlMaker(mostEpul.title)} key={mostEpul.id} state={{ title: mostEpul.url }}>
                                <div className="reference-image" key={mostEpul.id || 0} style={{ backgroundImage:"url(" + (mostEpul.gallery[0].url || "Nincs Kép") + ")"}}/>
                                <h3 className="mb-1">{mostEpul.title}</h3>
                            </Link>)
                        }
                        return null
                    })}
                </div>
            </section>
        </main>
    )
}

export default MostEpul;