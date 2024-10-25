import React from 'react';
import img1 from '../../assets/img/gallery/5.jpg';
import img2 from '../../assets/img/gallery/6.jpg';

function DetailsContent() {
    return (
        <>
            <h2>Start Building Construction Planning</h2>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
            </p>

            <h2>Quality Construction</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ipsa!
                Repellendus at accusantium dolore rerum exercitationem iusto error? Odio deleniti in
                iste tenetur placeat excepturi eum officia ratione, vel aperiam?
            </p>

            <div className="row">
                <div className="col-md-6 col-12">
                    <img
                        src={img1}
                        alt="Gallery  1"
                        className="img-fluid"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
                <div className="col-md-6 col-12">
                    <img
                        src={img2}
                        alt="Gallery  2"
                        className="img-fluid"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
            </div>

            <h2>What You Receive?</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi architecto, ipsam
                deleniti recusandae error voluptatum animi, quo aliquam doloribus reprehenderit
                natus, illo neque earum. Ratione totam necessitatibus possimus tempore tempora?
            </p>

            <blockquote>
                Viral dreamcatcher keytar typewriter, aesthetic offal umami. Aesthetic polaroid pug
                pitchfork post-ironic.
            </blockquote>
        </>
    );
}

export default DetailsContent;
