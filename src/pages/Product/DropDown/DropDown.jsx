import React, { useState } from 'react';

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState('Select Quantity');

  const toggleDropdown = () => {
    setIsOpen(isOpen===true?false:true);
  };

  const handleSelect = (quantity) => {
    setSelectedQuantity(quantity);
    setIsOpen(false);
  };

  return (
    <div style={{ display: 'inline-block', position: 'relative' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          border: '1px solid #ccc',
          padding: '5px',
          borderRadius: '5px',
        }}
        onClick={toggleDropdown}
      >
        
        <div>{selectedQuantity}</div> &nbsp;&nbsp;
        <div style={{ marginRight: '5px' }}>&#x25BC;</div>
      </div>
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: '0',
            minWidth: '100px',
            border: '1px solid #ccc',
            backgroundColor: '#fff',
            borderRadius: '5px',
            marginTop: '5px',
          }}
        >
          {['Select Quantity',1, 2, 3, 4, 5].map((quantity) => (
            <div
              key={quantity}
              style={{
                padding: '5px',
                cursor: 'pointer',
                borderBottom: '1px solid #ccc',
              }}
              onClick={() => handleSelect(quantity)}
            >
              {quantity}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
