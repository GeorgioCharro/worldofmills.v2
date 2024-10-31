import { AiOutlineMail, AiOutlinePhone, AiFillTikTok } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const contactData = [
  {
    id: uuidv4(),
    icon: <AiOutlineMail />,
    heading: 'Email Address',
    text: 'Reach us via email',
    item1: 'worldofmills0@gmail.com',
    item2: 'millsworld865@gmail.com',
    link: 'mailto:worldofmills0@gmail.com',
  },
  {
    id: uuidv4(),
    icon: <AiOutlinePhone />,
    heading: 'Phone Number',
    text: 'Call us directly',
    item1: '+971 52 621 1664',
    item2: '',
    link: 'tel:+971526211664',
  },
  {
    id: uuidv4(),
    icon: <FaMapMarkerAlt />,
    heading: 'Office Address',
    text: 'Visit our office',
    item1: 'S102, Industrial Area 10',
    item2: 'Sharjah, UAE',
    link: 'https://www.google.co.in/maps/place/WORLD+OF+MILLS/@25.2932354,55.4145596,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f5f0011c81579:0xe871ebf64a1b380!8m2!3d25.2932354!4d55.41199!16s%2Fg%2F11vq71d0n_?entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    id: uuidv4(),
    icon: <AiFillTikTok />,
    heading: 'TikTok Page',
    text: 'Follow us on TikTok',
    item1: 'tiktok.com/@worldofmills1',
    item2: '@WorldofMills1',
    link: 'https://www.tiktok.com/@worldofmills1',
  },
];

export default contactData;
