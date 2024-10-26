import React from 'react';
import { CgChevronDown, CgChevronLeft } from 'react-icons/cg';

const menuData = [
    {
        title: 'Home',
        path: '/',
        iconClosed: <CgChevronLeft />,
        iconOpened: <CgChevronDown />,

    },

    {
        title: 'About',
        path: '/about',
    },

    {
        title: 'Category',
        path: '/',

        iconClosed: <CgChevronLeft />,
        iconOpened: <CgChevronDown />,

        subNav: [
            {
                title: 'Team',
                path: '/team',
                cName: 'sub-nav',
            },
            {
                title: 'Faq',
                path: '/faq',
                cName: 'sub-nav',
            },
            {
                title: 'Projects',
                path: '/projects',
            },
        ],
    },

    {
        title: 'Services',
        path: '/services',
    },

    {
        title: 'News',
        path: '/news',
    },

    {
        title: 'Contact',
        path: '/contact',
    },
];

export default menuData;
