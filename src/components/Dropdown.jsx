import React from 'react';
import Select from 'react-select';
import { FaHome, FaUser, FaCog, FaEthereum, FaBitcoin } from 'react-icons/fa';

const options = [
  { value: 'ethereum', label: 'Ethereum', icon: <FaEthereum /> },
    { value: 'bitcoin', label: 'Bitcoin', icon: <FaBitcoin /> },
    { value: 'usdt', label: 'USDT', icon: <FaBitcoin /> },
    { value: 'usdc', label: 'USDC', icon: <FaBitcoin/> },
];

const DropdownMenu = () => {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: '8px',
      padding: '6px',
    }),
  };

  return (
    <Select
      options={options}
      styles={customStyles}
      isSearchable={false}
      components={{
        Option: ({ innerProps, label, data }) => (
          <div {...innerProps}>
            {data.icon} {label}
          </div>
        ),
      }}
    />
  );
};

export default DropdownMenu;
