import React from 'react';
import Hero from '../assets/HeroPicture.jpg';
import worldImage from '../assets/worldBackground.png';
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
import AboutUs5Image from '../assets/AboutUs5.svg';
import RoomIcon from '@mui/icons-material/Room';
import BadgeIcon from '@mui/icons-material/Badge';
import BuildIcon from '@mui/icons-material/Build';
import AboutUs from '../assets/AboutUsImg.jpg';
import { Link as RouterLink } from 'react-router-dom';
import AnimalFoodImage from '../assets/animalfoodproductionline.png'
import ChocolateImage from '../assets/chocolatemachine.png'
import DairyImage from '../assets/dairy.png'
import FillingImage from '../assets/fillingmachine.png'
import FilteringImage from '../assets/filteringmachine.png'
import NutsImage from '../assets/nuts.png'
import OthersImage from '../assets/others.png'
import SpicesImage from '../assets/spices.png'
import StainlessImage from '../assets/stainless-steel.jpg'
import TahiniImage from '../assets/tahiniandhalawi.png'
import ThymeImage from '../assets/thymeandspices.png'
import { useTranslation } from 'react-i18next';
import { Link as ScrollLink, Element } from 'react-scroll';


function Home() {
  const { t } = useTranslation();
  const questions = [
    { question: t('What shipping options are available?'), answer: t('All kinds of shipping methods : land, sea, air') },
    { question: t('What payment method is available?'), answer: t('Cash or bank transfer') },
    { question: t('What are the warranty terms for the machines?'), answer: t('All machines Food Machinery Manufacturing Company are guaranteed for a minimum of 3 years') }
    
  ];
  

  return (
    <>
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${Hero})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-start justify-center h-full p-8 text-white">
          <h1 className="text-5xl font-bold">{t('global_automation')}</h1>
          <div className="mt-4">
            <ScrollLink to="services" smooth={true} duration={500}>
              <button className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-75 mr-4">
                {t('our_services')}
              </button>
            </ScrollLink>
            <ScrollLink to='learnmore' smooth={true} duration={500} >
             <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75">
              {t('learn_more')}
            </button> 
            </ScrollLink>
            
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 p-8">
          <h2 className="text-gray-500">{t('get_answers')}</h2>
          <h1 className="text-4xl font-bold text-black">{t('get_single_answers')}</h1>
          <img src={worldImage} alt="World Background" className="mt-2 w-full object-cover" />
        </div>
        <div className="flex-1 p-8">
          {questions.map((item, index) => (
            <Accordion key={index} className="shadow-xl mt-4 rounded-xl" style={{ border: 'none' }}>
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
            className="inset-0 w-full h-full object-cover mix-blend-overlay" 
          />
        </div>
        <p className="mt-4 text-lg font-semibold">
          {t('years_experience')} <span className="font-bold">{t('creative_team')}</span>
        </p>
      </div>

      <div className="p-8 bg-gray-100 rounded-lg shadow-xl mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center justify-center p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300">
            <RouterLink to={'/category/Thyme and Spices'}>
              <div className="w-full h-48 overflow-hidden rounded-t-lg">
                <img src={ThymeImage} alt="ThymeAndSpices" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 bg-yellow-500 w-full">
                <h2 className="text-lg font-bold text-center">{t('Thyme And Spices')}</h2>
              </div>
            </RouterLink>
          </div>

          <div className="flex flex-col items-center justify-center p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300">
            <RouterLink to={'/category/Nuts'}>
              <div className="w-full h-48 overflow-hidden rounded-t-lg">
                <img src={NutsImage} alt="NutsImage" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 bg-yellow-500 w-full">
                <h2 className="text-lg font-bold text-center">{t('Nuts')}</h2>
              </div>
            </RouterLink>
          </div>

          <div className="flex flex-col items-center justify-center p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300">
            <RouterLink to={'/category/Feeder'}>
              <div className="w-full h-48 overflow-hidden rounded-t-lg">
                <img src={AnimalFoodImage} alt="AnimalFood" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 bg-yellow-500 w-full">
                <h2 className="text-lg font-bold text-center">{t('Animal Feed Production Lines')}</h2>
              </div>
            </RouterLink>
          </div>

          <div className="flex flex-col items-center justify-center p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300">
            <RouterLink to={'/category/Chocolate'}>
              <div className="w-full h-48 overflow-hidden rounded-t-lg">
                <img src={ChocolateImage} alt="Chocolate" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 bg-yellow-500 w-full">
                <h2 className="text-lg font-bold text-center">{t('Chocolate Machines')}</h2>
              </div>
            </RouterLink>
          </div>

          <div className="flex flex-col items-center justify-center p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300">
            <RouterLink to={'/category/Dairy'}>
              <div className="w-full h-48 overflow-hidden rounded-t-lg">
                <img src={DairyImage} alt="Dairy" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 bg-yellow-500 w-full">
                <h2 className="text-lg font-bold text-center">{t('Dairy')}</h2>
              </div>
            </RouterLink>
          </div>

          <div className="flex flex-col items-center justify-center p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300">
            <RouterLink to={'/category/Filling'}>
              <div className="w-full h-48 overflow-hidden rounded-t-lg">
                <img src={FillingImage} alt="Filling" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 bg-yellow-500 w-full">
                <h2 className="text-lg font-bold text-center">{t('Filling Machines')}</h2>
              </div>
            </RouterLink>
          </div>

          <div className="flex flex-col items-center justify-center p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300">
            <RouterLink to={'/category/Filtering'}>
              <div className="w-full h-48 overflow-hidden rounded-t-lg">
                <img src={FilteringImage} alt="Filtering" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 bg-yellow-500 w-full">
                <h2 className="text-lg font-bold text-center">{t('Filtering Machines')}</h2>
              </div>
            </RouterLink>
          </div>

          <div className="flex flex-col items-center justify-center p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300">
            <RouterLink to={'/category/Mills'}>
              <div className="w-full h-48 overflow-hidden rounded-t-lg">
                <img src={SpicesImage} alt="MillsImage" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 bg-yellow-500 w-full">
                <h2 className="text-lg font-bold text-center">{t('Mills')}</h2>
              </div>
            </RouterLink>
          </div>

          <div className="flex flex-col items-center justify-center p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300">
            <RouterLink to={'/category/Stainless'}>
              <div className="w-full h-48 overflow-hidden rounded-t-lg">
                <img src={StainlessImage} alt="Stainless Steel" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 bg-yellow-500 w-full">
                <h2 className="text-lg font-bold text-center">{t('Stainless Steel')}</h2>
              </div>
            </RouterLink>
          </div>

          <div className="flex flex-col items-center justify-center p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300">
            <RouterLink to={'/category/Tahina'}>
              <div className="w-full h-48 overflow-hidden rounded-t-lg">
                <img src={TahiniImage} alt="Tahini and Halawi" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 bg-yellow-500 w-full">
                <h2 className="text-lg font-bold text-center">{t('Tahini and Halawi')}</h2>
              </div>
            </RouterLink>
          </div>

          <div className="flex flex-col items-center justify-center p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300">
            <RouterLink to={'/category/Others'}>
              <div className="w-full h-48 overflow-hidden rounded-t-lg">
                <img src={OthersImage} alt="Others" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 bg-yellow-500 w-full">
                <h2 className="text-lg font-bold text-center">{t('Others')}</h2>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-8 m-4">
        <div className="relative flex items-center justify-center w-full max-w-md p-8 rounded-lg shadow-xl bg-cover bg-center" style={{ backgroundImage: `url(${WieldImage})` }}>
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <div className="relative z-10 text-center text-white">
            <h2 className="text-2xl font-bold">{t('easy_quotation')}</h2>
            <p className="mt-4 text-lg font-semibold">(+971) 52 621 1664</p>
            <p className="text-sm">{t('call_us_now')}</p>
          </div>
        </div>
      </div>
      <div className="p-8 rounded-lg shadow-xl">
        <p className="text-center text-4xl font-bold mb-8 mt-5">
          {t('Our Clients')}
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

      <Element id='services' name='services'>
        <div className="bg-gray-100 p-8 rounded-lg shadow-xl">
          <div className="text-center relative mb-8">
            <p className="text-gray-100 mb-2">{t('our_services')}</p>
            <h1 className="relative z-10 text-4xl font-bold text-black mb-8">
              {t('What We Do')}
            </h1>
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl font-extrabold opacity-10 text-center">
              {t('Services')}
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
                <p className="text-lg font-bold">{t('Maintenance and renewal of Machineries')}</p>
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
                <p className="text-lg font-bold">{t('Industrial Automation')}</p>
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
                <p className="text-lg font-bold">{t('Laser Cut')}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="relative bg-white p-6 rounded-lg shadow-md text-center w-full max-w-sm">
              <div className="flex items-center justify-center mb-4">
                <div className="h-24 w-24 bg-yellow-500 rounded-full flex items-center justify-center">
                  <img src={AboutUs5Image} alt="Service Icon" className="h-12 w-12" />
                </div>
              </div>
              <div className="relative z-10">
                <p className="text-lg font-bold">{t('Detailing according to request')}</p>
              </div>
            </div>
          </div>

        </div>
      </Element>

      <div className="bg-yellow-500 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
          <div className="flex flex-col items-center">
            <RoomIcon style={{ fontSize: 48 }} />
            <p className="text-4xl font-bold mt-4">15+</p>
            <p className="text-lg">{t('countries_export')}</p>
          </div>
          <div className="flex flex-col items-center">
            <BadgeIcon style={{ fontSize: 48 }} />
            <p className="text-4xl font-bold mt-4">30+</p>
            <p className="text-lg">{t('years_experience_count')}</p>
          </div>
          <div className="flex flex-col items-center">
            <BuildIcon style={{ fontSize: 48 }} />
            <p className="text-4xl font-bold mt-4">2000+</p>
            <p className="text-lg">{t('manufactured_machines')}</p>
          </div>
        </div>
      </div>
      <Element id='learnmore' name='learnmore'>
      <div className="relative bg-cover bg-center h-96 mt-8" style={{ backgroundImage: `url(${AboutUs})` }}>
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 flex flex-col justify-center items-start h-full p-8 text-white max-w-2xl ml-auto">
          <h2 className="text-3xl font-bold mb-4">{t('why_us')}</h2>
          <ul className="space-y-2">
            <li>{t('Rapid Implementation')}</li>
            <li>{t('Keeping up with the latest technologies')}</li>
            <li>{t('Simplifying the manufacturing of food materials')}</li>
            <li>{t('After-sales services')}</li>
            <li>{t('Warranty not less than 3 years')}</li>
          </ul>
        </div>
      </div>
      </Element>
    </>
  );
}

export default Home;
