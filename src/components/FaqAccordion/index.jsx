import React, { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { FiChevronRight } from 'react-icons/fi';

function FaqAccordion({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <Accordion allowZeroExpanded>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton
            onClick={toggleAccordion}
            className="flex justify-between items-center text-left w-full p-4 bg-white text-black hover:text-yellow-500 font-bold border-b border-gray-300 shadow-md hover:shadow-lg transition duration-300 ease-in-out"
          >
            {question}
            {/* Chevron icon with rotation */}
            <FiChevronRight
              className={`text-yellow-500 transition-transform duration-300 ease-in-out ${
                isOpen ? 'rotate-90' : 'rotate-0'
              }`}
              size={24}
            />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="p-4 bg-white border-b border-gray-300 shadow-sm">
          {answer}
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default FaqAccordion;
