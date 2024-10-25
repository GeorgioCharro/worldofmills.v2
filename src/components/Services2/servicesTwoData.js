import { FaCogs, FaTools, FaWrench, FaRobot, FaDraftingCompass, FaWarehouse } from 'react-icons/fa';
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
        icon: <FaDraftingCompass />,
        heading: 'custom_machinery_design_heading',
        text: 'custom_machinery_design_text',
    },
    {
        id: uuidv4(),
        thumbnail: thumb2,
        icon: <FaCogs />,
        heading: 'machinery_manufacturing_heading',
        text: 'machinery_manufacturing_text',
    },
    {
        id: uuidv4(),
        thumbnail: thumb3,
        icon: <FaTools />,
        heading: 'welding_services_heading',
        text: 'welding_services_text',
    },
    {
        id: uuidv4(),
        thumbnail: thumb4,
        icon: <FaRobot />,
        heading: 'production_line_automation_heading',
        text: 'production_line_automation_text',
    },
    {
        id: uuidv4(),
        thumbnail: thumb1,
        icon: <FaWarehouse />,
        heading: 'facility_optimization_heading',
        text: 'facility_optimization_text',
    },
    {
        id: uuidv4(),
        thumbnail: thumb6,
        icon: <FaWrench />,
        heading: 'machinery_maintenance_heading',
        text: 'machinery_maintenance_text',
    },
];

export default servicesTwoData;
