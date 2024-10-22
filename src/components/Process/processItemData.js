import { v4 as uuidv4 } from 'uuid';

const processItemData = [
    {
        id: uuidv4(),
        number: '01',
        heading: 'Consultation and Project Planning',
        text: 'We begin with in-depth discussions to understand your production needs, ensuring our solutions are tailored to meet your business objectives.',
    },

    {
        id: uuidv4(),
        number: '02',
        heading: 'Collaborative Design and Development',
        text: 'Our team works closely with you to design custom food machinery and automation solutions, ensuring every detail aligns with your production goals.',
    },

    {
        id: uuidv4(),
        number: '03',
        heading: 'Installation, Testing, and Optimization',
        text: 'We handle the installation, rigorous testing, and fine-tuning of the equipment to guarantee smooth operations and optimal performance.',
    },

    {
        id: uuidv4(),
        number: '04',
        heading: 'Ongoing Support and Maintenance',
        text: 'Our commitment doesn’t end with delivery. We offer continuous support, maintenance services, and upgrades to ensure long-term success.',
    },
];

export default processItemData;
