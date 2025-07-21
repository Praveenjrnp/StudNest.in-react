import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/style.css';

const Home = () => {
  const scrollLeft = () => {
    document.getElementById('propertyGrid').scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    document.getElementById('propertyGrid').scrollBy({ left: 300, behavior: 'smooth' });
  };

  const nextSlide = (btn) => {
    btn.parentElement.querySelector('.slider-images').scrollBy({ left: 280, behavior: 'smooth' });
  };

  const prevSlide = (btn) => {
    btn.parentElement.querySelector('.slider-images').scrollBy({ left: -280, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="hero-search">
          <div className="search-bar">
            <i className="fas fa-magnifying-glass search-icon"></i>
            <input type="text" placeholder="Search by college/university or City..." />
            <button className="location-btn">
              <i className="fas fa-location-crosshairs"></i>
              Locate Me
            </button>
          </div>
        </div>

        <div className="hero-text">
          <h1>Book Your Hostel/PG Now</h1>
          <p>StudNest makes it easy to find verified student accommodations.</p>
        </div>
      </section>

      <section className="city-bar">
        <div className="city-dropdown">
          <button className="city-btn">Gwalior <span className="arrow">&#9662;</span></button>
          <ul className="dropdown-menu">
            <li>Kampoo</li>
            <li>Morar</li>
            <li>Gole ka mandir</li>
          </ul>
        </div>

        <div className="city-dropdown">
          <button className="city-btn">Mumbai <span className="arrow">&#9662;</span></button>
          <ul className="dropdown-menu">
            <li>Andheri</li>
            <li>Borivali</li>
            <li>Thane</li>
          </ul>
        </div>

        <div className="city-dropdown">
          <button className="city-btn">Mathura <span className="arrow">&#9662;</span></button>
          <ul className="dropdown-menu">
            <li>Goverdhan Chauraha</li>
            <li>Chaumuhan</li>
            <li>Jait</li>
          </ul>
        </div>

        <div className="city-dropdown">
          <button className="city-btn">Pune <span className="arrow">&#9662;</span></button>
          <ul className="dropdown-menu">
            <li>Kalyani Nagar</li>
            <li>Koregaon Park</li>
            <li>Thane</li>
          </ul>
        </div>

        <div className="city-dropdown">
          <button className="city-btn">Ahemdabad <span className="arrow">&#9662;</span></button>
          <ul className="dropdown-menu">
            <li>Satellite</li>
            <li>Bopal</li>
            <li>Thaltej</li>
          </ul>
        </div>
      </section>


      <section className="property-categories">
        <h2 className="property-heading">Choose your Preference</h2>
        <div className="property-scroll-wrapper">
          <button className="scroll-btn left" onClick={scrollLeft}>&#10094;</button>

          <div className="property-grid" id="propertyGrid">
            {["1seaterAC.webp", "2seaterAc.jpg", "3seaterAC.webp"].map((img, idx) => (
              <div className="property-card" key={idx}>
                <img src={`/${img}`} alt="hostel" />
                <div className="property-label">{img.split('.')[0]}</div>
              </div>
            ))}
          </div>

          <button className="scroll-btn right" onClick={scrollRight}>&#10095;</button>
        </div>
      </section>

      <section className="deal-section">
        <h2>EXPLORE SOME AMAZING OFFERS</h2>
        <div className="deal-cards-wrapper">
          {[...Array(5)].map((_, idx) => (
            <div className="deal-card" key={idx}>
              <div className="image-slider">
                <button className="nav prev" onClick={(e) => prevSlide(e.target)}>&#10094;</button>
                <div className="slider-images">
                  <img src="/2seaterAc.jpg" alt="" />
                  <img src="/1seaterAC.webp" alt="" />
                  <img src="/3seaterAC.webp" alt="" />
                </div>
                <button className="nav next" onClick={(e) => nextSlide(e.target)}>&#10095;</button>
              </div>
              <div className="deal-info">
                <div className="rating"><span>8.{idx}</span> Very Good</div>
                <h3>Hostel {idx + 1}</h3>
                <p>City Name</p>
                <p className="price">₹2,999 <del>₹4,500</del></p>
                <div className="offer">{30 + idx}% off</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
