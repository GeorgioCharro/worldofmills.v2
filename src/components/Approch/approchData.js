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
        heading: 'vision_heading',
        text: 'vision_text',
        btnText: 'read_more',
        pageLink: '/project-details',
    },
    {
        id: uuidv4(),
        thumb: thumb2,
        icon: <FaPencilRuler />,
        heading: 'mission_heading',
        text: 'mission_text',
        btnText: 'read_more',
        pageLink: '/project-details',
    },
    {
        id: uuidv4(),
        thumb: thumb3,
        icon: <FaHardHat />,
        heading: 'approach_heading',
        text: 'approach_text',
        btnText: 'read_more',
        pageLink: '/project-details',
    },
];

export default approchData;
