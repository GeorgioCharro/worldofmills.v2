import { v4 as uuidv4 } from 'uuid';
import Img1 from '../../assets/project1.jpg';
import Img2 from '../../assets/project1.jpg';
import Img3 from '../../assets/project1.jpg';
import Img4 from '../../assets/project1.jpg';

const portfolioOneData = [
    {
        id: uuidv4(),
        image: Img1,
        category: 'machinery_renewal',
        client: 'client_organic_harvest',
        heading: 'machinery_renewal_heading',
        desc: 'machinery_renewal_desc',
        btnText: 'case_details',
    },
    {
        id: uuidv4(),
        image: Img2,
        category: 'custom_machinery_solutions',
        client: 'client_greenfields',
        heading: 'custom_machinery_heading',
        desc: 'custom_machinery_desc',
        btnText: 'case_details',
    },
    {
        id: uuidv4(),
        image: Img3,
        category: 'industrial_automation',
        client: 'client_harvest_delights',
        heading: 'automation_heading',
        desc: 'automation_desc',
        btnText: 'case_details',
    },
    {
        id: uuidv4(),
        image: Img4,
        category: 'detailing_custom_requests',
        client: 'client_golden_spices',
        heading: 'detailing_heading',
        desc: 'detailing_desc',
        btnText: 'case_details',
    },
];

export default portfolioOneData;
