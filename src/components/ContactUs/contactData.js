import { AiOutlineMail, AiOutlinePhone, AiFillTikTok } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const contactData = [
  {
    id: uuidv4(),
    icon: <AiOutlineMail />,
    heading: 'email_address_heading',
    text: 'email_address_text',
    item1: 'worldofmills0@gmail.com',
    item2: 'millsworld865@gmail.com',
  },
  {
    id: uuidv4(),
    icon: <AiOutlinePhone />,
    heading: 'phone_number_heading',
    text: 'phone_number_text',
    item1: '+971 52 621 1664',
    item2: '',
  },
  {
    id: uuidv4(),
    icon: <FaMapMarkerAlt />,
    heading: 'office_address_heading',
    text: 'office_address_text',
    item1: 'S102, Industrial Area 10',
    item2: 'Sharjah, UAE',
  },
  {
    id: uuidv4(),
    icon: <AiFillTikTok />,
    heading: 'tiktok_page_heading',
    text: 'tiktok_page_text',
    item1: 'tiktok.com/@worldofmills1',
    item2: '@WorldofMills1',
  },
];

export default contactData;
