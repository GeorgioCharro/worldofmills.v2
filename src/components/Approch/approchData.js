import { FaDraftingCompass, FaHardHat, FaPencilRuler } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import thumb1 from '../../assets/img/approch1.jpg';
import thumb2 from '../../assets/img/approch2.jpg';
import thumb3 from '../../assets/img/approch3.jpg';

const approchData = [
    {
        id: uuidv4(),
        thumb: thumb1,
        icon: <FaDraftingCompass />,
        heading: 'Our Vision',
        text: 'To be a leader in food machinery innovation, providing sustainable and automated solutions that empower businesses to produce healthier products efficiently.',
        btnText: 'Read More',
        pageLink: '/project-details',
    },

    {
        id: uuidv4(),
        thumb: thumb2,
        icon: <FaPencilRuler />,
        heading: 'Our Mission',
        text: 'We aim to design and deliver advanced food machines, automation solutions, and machinery renewal services, ensuring our clients stay ahead in the evolving market trends.',
        btnText: 'Read More',
        pageLink: '/project-details',
    },

    {
        id: uuidv4(),
        thumb: thumb3,
        icon: <FaHardHat />,
        heading: 'Our Approach',
        text: 'By working closely with our clients, we create customized machinery solutions that improve production, reduce downtime, and promote sustainable practices in food manufacturing.',
        btnText: 'Read More',
        pageLink: '/project-details',
    },
];

export default approchData;
