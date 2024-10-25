import { BsAward, BsTrophy } from 'react-icons/bs';
import { FaDollarSign, FaRegBuilding, FaToolbox, FaGlobe } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const timeLineData = [
    {
        id: uuidv4(),
        year: 1990,
        icon: <BsAward />,
        heading: 'establishment_heading',
        text: 'establishment_text',
        transform: '',
    },
    {
        id: uuidv4(),
        year: 2000,
        icon: <BsTrophy />,
        heading: 'award_heading',
        text: 'award_text',
        transform: 'transform-bottom',
    },
    {
        id: uuidv4(),
        year: 2005,
        icon: <FaToolbox />,
        heading: 'tailored_machinery_heading', // Updated Key
        text: 'tailored_machinery_text', // Updated Key
        transform: '',
    },
    {
        id: uuidv4(),
        year: 2010,
        icon: <FaRegBuilding />,
        heading: 'facility_heading',
        text: 'facility_text',
        transform: 'transform-bottom',
    },
    {
        id: uuidv4(),
        year: 2015,
        icon: <BsTrophy />,
        heading: 'industry_leader_heading',
        text: 'industry_leader_text',
        transform: '',
    },
    {
        id: uuidv4(),
        year: 2016,
        icon: <FaGlobe />,
        heading: 'website_launch_heading',
        text: 'website_launch_text',
        transform: 'transform-bottom',
    },
    {
        id: uuidv4(),
        year: 2020,
        icon: <FaDollarSign />,
        heading: 'new_markets_heading',
        text: 'new_markets_text',
        transform: '',
    },
];

export default timeLineData;
