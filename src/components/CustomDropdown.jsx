import React, { useState,useRef,useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import EthereumLogo from './../../public/eth.png';
import BitcoinLogo from './../../public/btc.png';
import USDTLogo from './../../public/usdt.png';

function CustomDropdown({smallDropdown}) {
  const [isOpen, setIsOpen] = useState(false);
  
  const [selectedOption, setSelectedOption] = useState('eth');


  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false); 
  };

  const dropdownOptions = [
    { value: 'eth', label: 'Ethereum', image: EthereumLogo },
    { value: 'btc', label: 'Bitcoin', image: BitcoinLogo },
    { value: 'usdt', label: 'USDT', image: USDTLogo }
  ];

  return (
    <div className="relative w-[100%]">
      <div
        className={`flex items-center border opacity-90 w-[100%] border-gray-300 p-2 justify-between
         rounded-lg  py-3 mt-2 cursor-pointer bg-white ${smallDropdown  ? 'px-7' : 'px-4'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        
        <div className={`${smallDropdown ? 'flex-col ' : 'flex pl-4'} gap-5 items-center`}>
        <img src={dropdownOptions.find(option => option.value === selectedOption).image} alt={selectedOption} className="w-7 h-7 mr-2" />
          <span>{dropdownOptions.find(option => option.value === selectedOption).label}</span>
          
        </div>
        <FaChevronDown className={`ml-2 ${isOpen ? 'transform rotate-180' : ''} `} />
        
      </div>
      {isOpen && (
        <ul className="absolute  w-[100%] left-0 right-0 z-50 bg-white border
         border-gray-300 
        rounded-b-md mt-1 shadow-md opacity-90">
          {dropdownOptions.map(option => (
            <li key={option.value} onClick={() => handleOptionSelect(option.value)} className="cursor-pointer opacity-90 hover:bg-[#0092E4] p-2 flex items-center">
              <img src={option.image} alt={option.value} className="w-6 h-6 mr-2" />
              <span>{option.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CustomDropdown;
