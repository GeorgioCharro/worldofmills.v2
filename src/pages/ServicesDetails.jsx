import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css'; // Import styles

import img1 from '../../assets/img/gallery/5.jpg';
import img2 from '../../assets/img/gallery/6.jpg';

const images = [
  { src: img1, alt: 'Gallery Image 1' },
  { src: img2, alt: 'Gallery Image 2' },
];

function DetailsContent() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <h2>Start Building Construction Planning</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
      </p>

      <div className="row">
        {images.map((image, index) => (
          <div className="col-md-6 col-12" key={index}>
            <img
              src={image.src}
              alt={image.alt}
              className="popup-gallery"
              onClick={() => openLightbox(index)}
              style={{ cursor: 'pointer', width: '100%', height: 'auto' }}
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={images}
        index={photoIndex}
      />

      <h2>What You Receive?</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi architecto,
        ipsam deleniti recusandae error voluptatum animi, quo aliquam doloribus
        reprehenderit natus, illo neque earum...
      </p>

      <blockquote>
        Viral dreamcatcher keytar typewriter, aesthetic offal umami.
      </blockquote>
    </>
  );
}

export default DetailsContent;
