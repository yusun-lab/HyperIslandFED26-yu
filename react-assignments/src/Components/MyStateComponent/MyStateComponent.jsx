import React, { useState } from "react";

const MyStateComponent = () => {
  // TODO create a form using useState hook, the form should have two input fields, one for name and one for age, and a submit button and handle form data. Submit/console.log the form data.
  const [formData, setFormData] = useState({})

  const handleInput = (event) => {
    setFormData( { ...formData, [event.target.name]: event.target.value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);    
  }

  return (
    <div>
      <h1>My State Component</h1>
      <form>
        <input 
          type="text" 
          name="name" 
          placeholder="Enter your name" 
          onChange={handleInput}
        />
        <input 
          type="number"  
          name="age" 
          placeholder="Enter your age" 
          onChange={handleInput} 
        />
        <input 
          type="submit" 
          value="Submit" 
          onClick={handleSubmit} 
        />
      </form>
    </div>
  );
};

export default MyStateComponent;
