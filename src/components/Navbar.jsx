// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/style.css';

// const Navbar = () => {
//   return (
//     <header className="navbar"> 
//       <div className="logo">StudNest.in</div>
//       <nav>
//         {/* Language selector removed */}
//         <Link to="/list-property" className="btn-list">List Your Property</Link>
//         <Link to="/login" className="btn-login">Login</Link>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;


import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">StudNest.in</div>
      <nav>
        <Link to="/" className="btn-home">Home</Link>
        <Link to="/contact" className="btn-contact">Contact</Link>
        <Link to="/list-property" className="btn-list">List Your Property</Link>
        <Link to="/login" className="btn-login">Login</Link>
      </nav>
    </header>
  );
};

export default Navbar;
