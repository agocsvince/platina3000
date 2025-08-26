import React, { useContext, useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import PhotoSwipe from 'photoswipe';
import 'photoswipe/dist/photoswipe.css';
import { MostEpulContext } from './MostEpulContext';
import { getPathNameFromUrl } from './UrlReader';
import { LeftArrow } from './Icons';

const MostEpulDetail = props => {
    const [currentProject, setCurrentProject] = useState({});
    const [gallery, setGallery] = useState([]);
    const [dimensions, setDimensions] = useState([]);
    
    // Get image dimensions
    useEffect(() => {
        const loadImageDimensions = async () => {
            const dims = await Promise.all(
                gallery.map(
                    (image) =>
                        new Promise((resolve) => {
                            const img = new Image();
                            img.onload = () => {
                                resolve({
                                    width: img.naturalWidth,
                                    height: img.naturalHeight
                                });
                            };
                            img.src = image.url;
                        })
                )
            );
            setDimensions(dims);
        };

        if (gallery.length > 0) {
            loadImageDimensions();
        }
    }, [gallery]);

    const openPhotoSwipe = (index) => {
        const options = {
            dataSource: gallery.map((image, i) => ({
                src: image.url,
                w: dimensions[i]?.width || 1200,
                h: dimensions[i]?.height || 800,
                alt: image.fileName
            })),
            index: index,
            showHideAnimationType: 'fade',
            clickToCloseNonZoomable: true,
            closeOnVerticalDrag: true
        };

        const pswp = new PhotoSwipe(options);
        pswp.init();
    };

    // Import ReferncesContext
    const { mostEpuls, isLoaded } = useContext(MostEpulContext);

    // Get project name from location
    const location = useLocation()
    if (location.state == null) {
        location.state = { title: '' }
        location.state.title = getPathNameFromUrl(location.pathname)
    }
    const { title } = location.state

    // Get current project from Context
    useEffect(() => {
        if (isLoaded) {
            const current = mostEpuls.filter(mostEpul => mostEpul.url === title)[0];
            setCurrentProject(current)
            setGallery(current.gallery)
        }
    }, [title, mostEpuls, isLoaded])

    return (
        <section id="wip" className="py-6">
            <div className="text ml-4 mt-2">
                <Link to='/most-epul' style={{ fontSize:'20px' }} className="fas"><LeftArrow /></Link>
                <h4 className="mb-05"><strong className="slash">\</strong> Most épül</h4>
                <h2 className="mb-2" id="name" data-name={title}>{currentProject.title}</h2>
            </div>
            <div className="pswp-gallery images grid m-4" id="gallery">
                {gallery.map((image, index) => (
                    <div
                        key={image.id}
                        className="reference-image"
                        onClick={(e) => {
                            e.preventDefault();
                            openPhotoSwipe(index);
                        }}
                        style={{ backgroundImage: `url(${image.url})` }}
                        title={image.fileName}
                    >
                        <img 
                            src={image.url} 
                            alt={image.fileName}
                            style={{ display: 'none' }}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default MostEpulDetail;