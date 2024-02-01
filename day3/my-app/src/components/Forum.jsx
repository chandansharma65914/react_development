import React, { useState } from 'react';

function Form() {
  // Declare state variables for the form input value and a submitted flag
  const [inputValue, setInputValue] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    // Update the inputValue state when the input value changes
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Set the submitted flag to true when the form is submitted
    setSubmitted(true);

    // You can perform further actions with the form data here
    console.log('Submitted value:', inputValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Type something:
          <input 
            type="text" 
            value={inputValue} 
            onChange={handleInputChange} 
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      {submitted && <p>Form submitted with value: {inputValue}</p>}
    </div>
  );
}

export default Form;
