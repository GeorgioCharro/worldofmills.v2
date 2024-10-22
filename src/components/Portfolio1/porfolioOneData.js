import { v4 as uuidv4 } from 'uuid';
import Img1 from '../../assets/project1.jpg';
import Img2 from '../../assets/project1.jpg';
import Img3 from '../../assets/project1.jpg';
import Img4 from '../../assets/project1.jpg';

const portfolioOneData = [
    {
        id: uuidv4(),
        image: Img1,
        category: 'Machinery Renewal',
        client: 'Organic Harvest Inc.',
        heading: 'Machinery Renewal for Increased Production Efficiency',
        desc: 'World of Mills collaborated with Organic Harvest Inc. to renew their outdated food machineries. By upgrading their milling and packaging equipment, production efficiency increased by 30%, ensuring minimal downtime and optimized workflow for organic product manufacturing.',
        btnText: 'Case Details',
    },
    {
        id: uuidv4(),
        image: Img2,
        category: 'Custom Machinery Solutions',
        client: 'GreenFields Ltd.',
        heading: 'Custom Milling Equipment for Specialty Grain Production',
        desc: 'GreenFields Ltd. required custom machinery for processing specialty grains. World of Mills developed tailored milling machines that fit their production needs, streamlining the process and enhancing quality. This solution reduced waste and improved grain purity for end consumers.',
        btnText: 'Case Details',
    },
    {
        id: uuidv4(),
        image: Img3,
        category: 'Industrial Automation',
        client: 'Harvest Delights Co.',
        heading: 'End-to-End Automation of Organic Snack Production',
        desc: 'To keep up with the demand for organic snacks, Harvest Delights Co. sought complete production-line automation. World of Mills implemented advanced automation systems, reducing manual labor, improving accuracy, and boosting output by 40%.',
        btnText: 'Case Details',
    },
    {
        id: uuidv4(),
        image: Img4,
        category: 'Detailing & Custom Requests',
        client: 'Golden Spices Pvt. Ltd.',
        heading: 'Tailored Solutions for Spice Processing',
        desc: 'Golden Spices Pvt. Ltd. approached World of Mills for a detailed analysis of their production process. Our team customized their spice processing equipment to improve consistency, reduce production time, and meet stringent quality standards.',
        btnText: 'Case Details',
    },
];

export default portfolioOneData;
