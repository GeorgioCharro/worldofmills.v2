
import Hero from '../assets/HeroPicture.jpg';
import worldImage from '../assets/worldBackground.png'
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExperienceImage from '../assets/experience.png';
import WieldImage from '../assets/Wield.jpg';
import AbidoImage from '../assets/abido.png';
import BeryTechImage from '../assets/Berytech.png';
import DiraniImage from '../assets/Dirani.png';
import HelbawiFoodsImage from '../assets/HelbawiFoods.png';
import MercyCorpsImage from '../assets/MercyCorps.jpg';
import SamihAlYamanImage from '../assets/SamihAlYaman.png';
import AboutUs2Image from '../assets/AboutUs2.png';
import AboutUs3Image from '../assets/AboutUs3.png';
import AboutUs1Image from '../assets/AboutUs1.png';
import RoomIcon from '@mui/icons-material/Room';
import BadgeIcon from '@mui/icons-material/Badge';
import BuildIcon from '@mui/icons-material/Build';
import AboutUs from '../assets/AboutUsImg.jpg'
function Home() {
    const questions = [
        { question: 'How Do We Manage Quality Assurance?', answer: 'Answer to quality assurance.' },
        { question: 'With Diverse Capabilities And Extensive Manufacturing?', answer: 'Answer to manufacturing.' },
        { question: 'You Can Rely On Amwerk As A Critical Part?', answer: 'Answer to reliability.' },
        { question: 'How Do We Manage Quality Assurance?', answer: 'Answer to quality assurance again.' },
        { question: 'Appropriately Communicate One-To-One Technology?', answer: 'Answer to technology communication.' },
      ];
  return (
  <>
  <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${Hero})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-start justify-center h-full p-8 text-white">
        <h1 className="text-5xl font-bold">Global Automotive</h1>
        <div className="mt-4">
          <button className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-75 mr-4">
            Our Services
          </button>
          <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75">
            Learn More
          </button>
        </div>
      </div>
    </div>
    <div className="flex flex-col md:flex-row">
      <div className="flex-1 p-8">
        <h2 className="text-gray-500">Get Answers</h2>
        <h1 className="text-4xl font-bold text-black">Get every single answers from here.</h1>
        <img src={worldImage} alt="World Background" className="mt-2 w-full object-cover" />
      </div>
      <div className="flex-1 p-8">
        {questions.map((item, index) => (
          <Accordion key={index} className="shadow-xl  mt-4 rounded-xl" style={{ border: 'none' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className="font-semibold">{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
    <div className="flex flex-col items-center justify-center mt-4">
      <div className="p-8">
        <img 
          src={ExperienceImage} 
          alt="Experience" 
          className=" inset-0 w-full h-full object-cover mix-blend-overlay" 
        />
        
      </div>
      <p className="mt-4 text-lg font-semibold">
        Years Of Experience With <span className="font-bold">Creative Team</span>
      </p>
    </div>

    <div className="flex items-center justify-center mt-8 m-4  ">
      <div className="relative flex items-center justify-center w-full max-w-md p-8 rounded-lg shadow-xl bg-cover bg-center" style={{ backgroundImage: `url(${WieldImage})` }}>
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
        <div className="relative z-10 text-center text-white">
          <h2 className="text-2xl font-bold">Get an easy quotation for your industry</h2>
          <p className="mt-4 text-lg font-semibold">(+1) 555 234-8765</p>
          <p className="text-sm">Call Us Now</p>
        </div>
      </div>
    </div>
    <div className=" p-8 rounded-lg shadow-xl">
      <p className="text-center text-lg mb-8 mt-5">
        We provide mechanisms and production lines in industries, the most important of which is the food sector, from cooking to fully automatic packaging and closing
      </p>
      <div className="grid grid-cols-2 bg-gray-100 rounded-xl p-5 gap-6 md:grid-cols-3 lg:grid-cols-3">
        <img src={AbidoImage} alt="Abido" className="h-12 mx-auto" />
        <img src={BeryTechImage} alt="BeryTech" className="h-12 mx-auto" />
        <img src={DiraniImage} alt="Dirani" className="h-12 mx-auto" />
        <img src={HelbawiFoodsImage} alt="Helbawi Foods" className="h-12 mx-auto" />
        <img src={MercyCorpsImage} alt="Mercy Corps" className="h-12 mx-auto" />
        <img src={SamihAlYamanImage} alt="Samih Al Yaman" className="h-12 mx-auto" />
      </div>
    </div>
    <div className="bg-gray-100 p-8 rounded-lg shadow-xl">
      <div className="text-center relative mb-8">
        <p className="text-gray-100 mb-2">Our Services</p>
        <h1 className="relative z-10 text-4xl font-bold text-black mb-8">
          What We Do
        </h1>
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl font-extrabold opacity-10 text-center ">
          Services
        </span>
      </div>
      <div className="mt-8 flex justify-center">
        <div className="relative bg-white p-6 rounded-lg shadow-md text-center w-full max-w-sm">
          <div className="flex items-center justify-center mb-4">
            <div className="h-24 w-24 bg-yellow-500 rounded-full flex items-center justify-center">
              <img src={AboutUs2Image} alt="Service Icon" className="h-12 w-12" />
            </div>
          </div>
          <div className="relative z-10">
            <p className="text-lg font-bold">Maintenance and renewal of machines</p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <div className="relative bg-white p-6 rounded-lg shadow-md text-center w-full max-w-sm">
          <div className="flex items-center justify-center mb-4">
            <div className="h-24 w-24 bg-yellow-500 rounded-full flex items-center justify-center">
              <img src={AboutUs3Image} alt="Service Icon" className="h-12 w-12" />
            </div>
          </div>
          <div className="relative z-10">
            <p className="text-lg font-bold">Industrial automation</p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <div className="relative bg-white p-6 rounded-lg shadow-md text-center w-full max-w-sm">
          <div className="flex items-center justify-center mb-4">
            <div className="h-24 w-24 bg-yellow-500 rounded-full flex items-center justify-center">
              <img src={AboutUs1Image} alt="Service Icon" className="h-12 w-12" />
            </div>
          </div>
          <div className="relative z-10">
            <p className="text-lg font-bold">Laser Cut</p>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-yellow-500 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
        <div className="flex flex-col items-center">
          <RoomIcon style={{ fontSize: 48 }} />
          <p className="text-4xl font-bold mt-4">15+</p>
          <p className="text-lg">Countries We Export To</p>
        </div>
        <div className="flex flex-col items-center">
          <BadgeIcon style={{ fontSize: 48 }} />
          <p className="text-4xl font-bold mt-4">30+</p>
          <p className="text-lg">Years Of Experience</p>
        </div>
        <div className="flex flex-col items-center">
          <BuildIcon style={{ fontSize: 48 }} />
          <p className="text-4xl font-bold mt-4">2000+</p>
          <p className="text-lg">Manufactured Machines</p>
        </div>
      </div>
    </div>
    <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(${AboutUs})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col justify-center items-start h-full p-8 text-white max-w-2xl ml-auto">
        <h2 className="text-3xl font-bold mb-4">Why us?</h2>
        <ul className="space-y-2">
          <li>Rapid implementation of machinery processing.</li>
          <li>Keep up with new technologies. After-sales service.</li>
          <li>Quality guarantee for all machines.</li>
          <li>Simplify the food industry.</li>
          <li>Our machines are developed to reach international standards.</li>
        </ul>
      </div>
    </div>
    </>
    
  );
}

export default Home;

