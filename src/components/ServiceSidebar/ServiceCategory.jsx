import React from 'react';
import Link from 'next/link';

function ServiceCategory({ link, category }) {
    return (
        <li>
            <Link href={link} legacyBehavior>
                <a>{category}</a>
            </Link>
        </li>
    );
}

export default ServiceCategory;
