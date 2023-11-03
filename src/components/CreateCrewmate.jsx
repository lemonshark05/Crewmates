import React, { useState } from 'react';
import { supabase } from './supabaseClient';

const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    // Insert data into the 'Posts' table using Supabase
    const { data, error } = await supabase
      .from('Posts')
      .insert([
        { 
          name: formData.name, 
          speed: formData.speed, 
          color: formData.color 
        }
      ]);

    if (error) {
      throw error;
    }

    console.log('Data successfully saved!', data);
    // Handle success scenario, such as clearing the form or notifying the user
  } catch (error) {
    console.error('There was an error saving the data', error);
    // Handle errors, such as displaying an error message
  }
};

function CreateCrewmate() {
  const [formData, setFormData] = useState({
    name: '',
    speed: '',
    color: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would handle the form submission, possibly sending the data to your database
    console.log(formData);
    // After submission logic goes here
  };

  return (
    <div className="title-image-container">
      <h1>Create a New Crewmate</h1>
      <img src="/src/assets/crewmates.43d07b24.png" alt="Crewmates" height="100px" />
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="mini-container">
          <label>
            <h3>Name:</h3>
          </label>
          <input 
            type="text" 
            name="name" 
            placeholder="Enter crewmate's name" 
            value={formData.name}
            onChange={handleInputChange} 
          />
        </div>
        <div className="mini-container">
          <label>
            <h3>Speed (mph):</h3>
          </label>
          <input 
            type="text" 
            name="speed" 
            placeholder="Enter speed in mph" 
            value={formData.speed}
            onChange={handleInputChange} 
          />
        </div>
        <div className="mini-container">
          <label>
            <h3>Color:</h3>
          </label>
          <ul>
            {/* List of radio buttons for color selection */}
            {['Red', 'Green', 'Blue', 'Purple', 'Yellow', 'Orange', 'Pink', 'Rainbow'].map((color) => (
              <li key={color}>
                <label>
                  <input 
                    id={color} 
                    name="color" 
                    type="radio" 
                    value={color} 
                    checked={formData.color === color}
                    onChange={handleInputChange} 
                  />
                  {color}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </form>
      <button type="submit">Create Crewmate</button>
    </div>
  );
}

export default CreateCrewmate;
