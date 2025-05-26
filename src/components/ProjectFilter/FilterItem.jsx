import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

function FilterItem({ image, name, price, heading }) {
    return (
        <div className="col-xl-3 col-md-6 grid-item bedroom">
            <div className="single-cause-item">
                <div className="cause-bg bg-cover" style={{ backgroundImage: `url(${image})` }}>
                    <Link href="/project-details" legacyBehavior>
                        <a className="icon">
                            <BsArrowRight />
                        </a>
                    </Link>
                </div>
                <div className="cause-content">
                    <div className="cause-meta d-flex">
                        <div className="author mr-15">{name}</div>|
                        <div className="project-amount ml-15">{price}</div>
                    </div>
                    <h4>
                        <Link href="/project-details" legacyBehavior>
                            <a>{heading}</a>
                        </Link>
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default FilterItem;
