import React, { useContext, useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import PhotoSwipe from 'photoswipe';
import 'photoswipe/dist/photoswipe.css';
import { ReferenceContext } from './ReferenceContext';
import  { getPathNameFromUrl }  from './UrlReader';
import { LeftArrow } from './Icons';


const ReferenceDetail = props => {
  // Import ReferncesContext
  const { references, isLoaded } = useContext(ReferenceContext);
  
  // Get project name from location
  const location = useLocation()
  if (location.state == null) {
    location.state = { title: '' }
    location.state.title = getPathNameFromUrl(location.pathname)
  }
  const { title } = location.state

  // States for current porject and it's gallery
  const [ currentProject, setCurrentProject] = useState({});
  const [ gallery, setGallery] = useState([]);
  
  // Get current project from Context
  useEffect(() => {
    if (isLoaded) {
      const current = references.filter(reference => reference.url === title)[0];
      setCurrentProject(current)
      setGallery(current.gallery)
    }
      
  }, [title, references, isLoaded])

  // PhotoSwipe initialization
  const [lightbox, setLightbox] = useState(null);
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

  useEffect(() => {
    if (dimensions.length === gallery.length) {
      // Initialize PhotoSwipe only after we have all dimensions
      const lightboxInstance = new PhotoSwipe({
        dataSource: gallery.map((image, index) => ({
          src: image.url,
          w: dimensions[index].width,
          h: dimensions[index].height,
          title: image.fileName
        })),
        showHideAnimationType: 'fade',
        pswpModule: PhotoSwipe
      });

      setLightbox(lightboxInstance);

      return () => {
        if (lightboxInstance) {
          lightboxInstance.destroy();
        }
      };
    }
  }, [gallery, dimensions]);

  return (
      <section id="wip" className="py-6">
        <div className="text ml-4 mt-2">
        <Link to='/referenciak' style={{ fontSize:'20px' }} className="fas"><LeftArrow /></Link>
            <h4 className="mb-05"><strong className="slash">\</strong> Referenciák</h4>
            <h2 className="mb-2" id="name" data-name={title}>{currentProject.title}</h2>
        </div>
        <div className="pswp-gallery images grid m-4" id="gallery">
          {gallery.map((image, index) => (
            <div
              key={image.id}
              className="reference-image"
              onClick={(e) => {
                e.preventDefault();
                if (lightbox) {
                  lightbox.init();
                  lightbox.goTo(index);
                }
              }}
              style={{ backgroundImage: `url(${image.url})` }}
              title={image.fileName}
            >
              <a
                href={image.url}
                data-pswp-width={image.width || 1200}
                data-pswp-height={image.height || 800}
                aria-hidden="true"
                style={{ display: 'none' }}
              />
            </div>
          ))}
        </div>
              
  </section>
  );
}              

export default ReferenceDetail;