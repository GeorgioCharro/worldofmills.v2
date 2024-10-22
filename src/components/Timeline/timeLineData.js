import { BsAward, BsTrophy } from 'react-icons/bs';
import { FaDollarSign, FaRegBuilding, FaToolbox, FaGlobe } from 'react-icons/fa'; // Replaced with FaGlobe for website launch
import { v4 as uuidv4 } from 'uuid';

const timeLineData = [
    {
        id: uuidv4(),
        year: 1990,
        icon: <BsAward />,
        heading: 'Establishment of World of Mills',
        text: 'World of Mills began its journey, focusing on food machinery and industrial solutions for the food production industry.',
        transform: '',
    },

    {
        id: uuidv4(),
        year: 2000,
        icon: <BsTrophy />,
        heading: 'Major Industry Award',
        text: 'World of Mills was recognized for excellence in food machinery innovation, setting the stage for further growth.',
        transform: 'transform-bottom',
    },

    {
        id: uuidv4(),
        year: 2005,
        icon: <FaToolbox />,
        heading: 'Expanded to Custom Machinery Solutions',
        text: 'We began offering customized food machinery solutions tailored to meet the needs of different industries and businesses.',
        transform: '',
    },

    {
        id: uuidv4(),
        year: 2010,
        icon: <FaRegBuilding />,
        heading: 'New Facility and Production Line Expansion',
        text: 'To meet growing demand, we opened a new facility and expanded our production lines to offer larger-scale automation solutions.',
        transform: 'transform-bottom',
    },

    {
        id: uuidv4(),
        year: 2015,
        icon: <BsTrophy />,
        heading: 'Recognized as Industry Leader',
        text: 'World of Mills was awarded Best Machinery Supplier of the Year for its innovative approach to food machinery and automation.',
        transform: '',
    },

    {
        id: uuidv4(),
        year: 2016,
        icon: <FaGlobe />,
        heading: 'Launch of World of Mills Website',
        text: 'We launched our official website to better serve customers and showcase our wide range of food machines and automation solutions.',
        transform: 'transform-bottom',
    },

    {
        id: uuidv4(),
        year: 2020,
        icon: <FaDollarSign />,
        heading: 'Entered New Markets and Expanded Services',
        text: 'World of Mills expanded into international markets, offering new machinery solutions and services to meet global demand.',
        transform: '',
    },
];

export default timeLineData;
