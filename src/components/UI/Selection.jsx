import React, { useState } from 'react';
import './selection.css'

const Selection = () => {
  const options = [
    { label: 'Red Tiger', value: 'option1' },
    { label: 'Microgaming', value: 'option2' },
    { label: 'Red Rake Gaming', value: 'option3' },
    { label: '1x2 Gaming', value: 'option4' },
    { label: 'Genii', value: 'option5' },
    { label: "Play'n GO", value: 'option6' },
    { label: 'EGT', value: 'option7' },
    { label: 'Boongo', value: 'option8' }
  ];
  
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleSelectClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="custom-select">
      <div className="select-header" onClick={handleSelectClick}>
        {selectedOption ? selectedOption.label : 'Search Providers'}
        <span className={`arrow ${isOpen ? 'up' : 'down'}`} />
      </div>
      {isOpen && (
        <ul className="options-list">
          {options.map((option) => (
            <li key={option.value} onClick={() => handleOptionClick(option)}>
              {option.label}
              <input          
                onChange={(e) => e.stopPropagation()}
                onClick={(e) => e.stopPropagation()} 
                type="checkbox" 
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Selection
