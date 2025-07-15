import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/listproperty.css';

const ListProperty = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    propertyName: '',
    location: '',
    rooms: '',
    rent: '',
    contact: '',
    photo: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'photo') {
      setFormData({ ...formData, photo: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Just logging for now
    console.log('Submitted Property:', formData);

    // Redirect to Home
    navigate('/');
  };

  return (
    <div className="list-property-container">
      <h1>List Your Property</h1>
      <form className="property-form" onSubmit={handleSubmit}>
        <label>
          Property Name:
          <input
            type="text"
            name="propertyName"
            placeholder="Enter property name"
            value={formData.propertyName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            placeholder="Enter city or address"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Number of Rooms:
          <input
            type="number"
            name="rooms"
            placeholder="Total rooms"
            value={formData.rooms}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Rent per Room:
          <input
            type="text"
            name="rent"
            placeholder="Monthly rent"
            value={formData.rent}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Contact Number:
          <input
            type="text"
            name="contact"
            placeholder="Your mobile number"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Upload Photo:
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ListProperty;
