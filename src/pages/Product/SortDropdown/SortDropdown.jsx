import React, { useState } from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const SortDropdown = () => {
  const [selectedOption, setSelectedOption] = useState('Latest');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button
        type="button"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          padding: '4px',
          outline: 'none',
          marginBottom:'20px'

        }}
      >
        {selectedOption}   &#9660;
      </button>
      {isDropdownOpen && (
        <ul
          style={{
            position: 'absolute',
            listStyleType: 'none',
            margin: '0',
            padding: '0',
            backgroundColor: '#fff',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          }}
        >
          <li
            onClick={() => handleOptionSelect('Latest')}
            style={{ padding: '8px 12px', cursor: 'pointer',fontSize:'18px' }}
          >
            Latest
          </li>
          <li
            onClick={() => handleOptionSelect('Name')}
            style={{ padding: '8px 12px', cursor: 'pointer',fontSize:'18px' }}
          >
            Name
          </li>
          <li
            onClick={() => handleOptionSelect('Date')}
            style={{ padding: '8px 12px', cursor: 'pointer',fontSize:'18px' }}
          >
            Date
          </li>
        </ul>
      )}
    </div>
  );
};

export default SortDropdown

