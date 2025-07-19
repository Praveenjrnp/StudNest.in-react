// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/listproperty.css'; // ✅ Make sure this path is correct

// const ListProperty = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     ownerName: '',
//     roomType: '',
//     seaterVacancy: {
//       one: '',
//       two: '',
//       three: ''
//     },
//     ac: '',
//     furnished: '',
//     features: '',
//     image1: null,
//     image2: null,
//     video: null
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;

//     if (['image1', 'image2', 'video'].includes(name)) {
//       setFormData({ ...formData, [name]: files[0] });
//     } else if (['one', 'two', 'three'].includes(name)) {
//       setFormData({
//         ...formData,
//         seaterVacancy: {
//           ...formData.seaterVacancy,
//           [name]: value
//         }
//       });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Submitted Property:', formData);
//     navigate('/');
//   };

//   return (
//     <>
//       {/* Custom Navbar */}
//       <div className="navbar">
//         <a href="/" className="logo">StudNest</a>
//         <div className="nav-links">
//           <a href="/">Home</a>
//           <a href="/contact">Contact</a>
//           <a href="/login" className="login-btn">Login</a>
//         </div>
//       </div>

//       {/* Property Form */}
//       <div className="list-property-container">
//         <h1>List Your Property</h1>
//         <form className="property-form" onSubmit={handleSubmit}>
//           <label>
//             Owner Name:
//             <input
//               type="text"
//               name="ownerName"
//               placeholder="Enter owner name"
//               value={formData.ownerName}
//               onChange={handleChange}
//               required
//             />
//           </label>

//           <label>
//             Room Type:
//             <select name="roomType" value={formData.roomType} onChange={handleChange} required>
//               <option value="">-- Select Room Type --</option>
//               <option value="Single">Single Room</option>
//               <option value="Double">Double Room</option>
//               <option value="Triple">Triple Room</option>
//             </select>
//           </label>

//           <label>
//             1-Seater Rooms:
//             <input
//               type="number"
//               name="one"
//               placeholder="e.g., 5"
//               value={formData.seaterVacancy.one}
//               onChange={handleChange}
//             />
//           </label>

//           <label>
//             2-Seater Rooms:
//             <input
//               type="number"
//               name="two"
//               placeholder="e.g., 3"
//               value={formData.seaterVacancy.two}
//               onChange={handleChange}
//             />
//           </label>

//           <label>
//             3-Seater Rooms:
//             <input
//               type="number"
//               name="three"
//               placeholder="e.g., 2"
//               value={formData.seaterVacancy.three}
//               onChange={handleChange}
//             />
//           </label>

//           <label>
//             AC / Non-AC:
//             <select name="ac" value={formData.ac} onChange={handleChange} required>
//               <option value="">-- Select Option --</option>
//               <option value="AC">AC</option>
//               <option value="Non-AC">Non-AC</option>
//             </select>
//           </label>

//           <label>
//             Furnished / Non-Furnished:
//             <select name="furnished" value={formData.furnished} onChange={handleChange} required>
//               <option value="">-- Select Option --</option>
//               <option value="Furnished">Furnished</option>
//               <option value="Non-Furnished">Non-Furnished</option>
//             </select>
//           </label>

//           <label>
//             Additional Features:
//             <textarea
//               name="features"
//               placeholder="WiFi, Parking, Mess etc..."
//               value={formData.features}
//               onChange={handleChange}
//             />
//           </label>

//           <label>
//             Upload Image 1:
//             <input
//               type="file"
//               name="image1"
//               accept="image/*"
//               onChange={handleChange}
//               required
//             />
//           </label>

//           <label>
//             Upload Image 2:
//             <input
//               type="file"
//               name="image2"
//               accept="image/*"
//               onChange={handleChange}
//               required
//             />
//           </label>

//           <label>
//             Upload Video:
//             <input
//               type="file"
//               name="video"
//               accept="video/*"
//               onChange={handleChange}
//               required
//             />
//           </label>

//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default ListProperty;




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/listproperty.css'; // CSS Updated

const ListProperty = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    ownerName: '',
    roomType: '',
    seaterVacancy: {
      one: '',
      two: '',
      three: ''
    },
    ac: '',
    furnished: '',
    features: '',
    image1: null,
    image2: null,
    video: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (['image1', 'image2', 'video'].includes(name)) {
      setFormData({ ...formData, [name]: files[0] });
    } else if (['one', 'two', 'three'].includes(name)) {
      setFormData({
        ...formData,
        seaterVacancy: {
          ...formData.seaterVacancy,
          [name]: value
        }
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Property:', formData);
    navigate('/');
  };

  return (
    <>
      {/* Custom Navbar */}
      <div className="navbar">
        <a href="/" className="logo">StudNest</a>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/contact">Contact</a>
          <a href="/login" className="login-btn">Login</a>
        </div>
      </div>

      {/* Property Form */}
      <div className="list-property-container">
        <h1>List Your Property</h1>
        <form className="property-form" onSubmit={handleSubmit}>
          <label>
            Owner Name:
            <input
              type="text"
              name="ownerName"
              placeholder="Enter owner name"
              value={formData.ownerName}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Room Type:
            <select name="roomType" value={formData.roomType} onChange={handleChange} required>
              <option value="">-- Select Room Type --</option>
              <option value="Single">Single Room</option>
              <option value="Double">Double Room</option>
              <option value="Triple">Triple Room</option>
            </select>
          </label>

          <label>
            1-Seater Rooms:
            <input
              type="number"
              name="one"
              placeholder="e.g., 5"
              value={formData.seaterVacancy.one}
              onChange={handleChange}
            />
          </label>

          <label>
            2-Seater Rooms:
            <input
              type="number"
              name="two"
              placeholder="e.g., 3"
              value={formData.seaterVacancy.two}
              onChange={handleChange}
            />
          </label>

          <label>
            3-Seater Rooms:
            <input
              type="number"
              name="three"
              placeholder="e.g., 2"
              value={formData.seaterVacancy.three}
              onChange={handleChange}
            />
          </label>

          <label>
            AC / Non-AC:
            <select name="ac" value={formData.ac} onChange={handleChange} required>
              <option value="">-- Select Option --</option>
              <option value="AC">AC</option>
              <option value="Non-AC">Non-AC</option>
            </select>
          </label>

          <label>
            Furnished / Non-Furnished:
            <select name="furnished" value={formData.furnished} onChange={handleChange} required>
              <option value="">-- Select Option --</option>
              <option value="Furnished">Furnished</option>
              <option value="Non-Furnished">Non-Furnished</option>
            </select>
          </label>

          <label>
            Additional Features:
            <textarea
              name="features"
              placeholder="WiFi, Parking, Mess etc..."
              value={formData.features}
              onChange={handleChange}
            />
          </label>

          <label>
            Upload Image 1:
            <input
              type="file"
              name="image1"
              accept="image/*"
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Upload Image 2:
            <input
              type="file"
              name="image2"
              accept="image/*"
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Upload Video:
            <input
              type="file"
              name="video"
              accept="video/*"
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default ListProperty;
