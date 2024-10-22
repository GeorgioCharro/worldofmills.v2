import { 
    FaCogs, 
    FaTools, 
    FaWrench, 
    FaRobot, 
    FaDraftingCompass, 
    FaWarehouse 
} from 'react-icons/fa'; // Updated icons
import { v4 as uuidv4 } from 'uuid';

import thumb1 from '../../assets/img/drawing.webp';
import thumb2 from '../../assets/img/machinery.webp';
import thumb3 from '../../assets/img/welding.jpeg';
import thumb4 from '../../assets/img/automation.webp';
import thumb5 from '../../assets/img/service5.jpg';
import thumb6 from '../../assets/img/machineryrenewal.webp';

const servicesTwoData = [
    {
        id: uuidv4(),
        thumbnail: thumb5,
        icon: <FaDraftingCompass />, // Compass for design
        heading: 'Custom Machinery Design',
        text: 'We specialize in designing tailored food machines and industrial automation systems to meet the specific needs of your production processes.',
    },

    {
        id: uuidv4(),
        thumbnail: thumb2,
        icon: <FaCogs />, // Cogs for manufacturing
        heading: 'Machinery Manufacturing & Assembly',
        text: 'World of Mills offers comprehensive manufacturing and assembly services for advanced food machinery, ensuring high precision and durability.',
    },

    {
        id: uuidv4(),
        thumbnail: thumb3,
        icon: <FaTools />, // Tools for welding and laser cutting
        heading: 'Welding & Laser Cutting Services',
        text: 'Our precision welding and laser cutting services support the customization and maintenance of industrial machinery components.',
    },

    {
        id: uuidv4(),
        thumbnail: thumb4,
        icon: <FaRobot />, // Robot for automation
        heading: 'Production Line Automation',
        text: 'We provide complete automation solutions for food production lines, reducing manual labor and improving efficiency and consistency.',
    },

    {
        id: uuidv4(),
        thumbnail: thumb1,
        icon: <FaWarehouse />, // Warehouse for facility layout
        heading: 'Facility Layout & Optimization',
        text: 'Optimize your manufacturing space with our facility layout services, ensuring seamless workflow and maximum production efficiency.',
    },

    {
        id: uuidv4(),
        thumbnail: thumb6,
        icon: <FaWrench />, // Wrench for maintenance and renewal
        heading: 'Machinery Maintenance & Renewal',
        text: 'We offer regular maintenance and renewal services to keep your machinery running at peak performance and extend equipment lifespan.',
    },
];

export default servicesTwoData;
