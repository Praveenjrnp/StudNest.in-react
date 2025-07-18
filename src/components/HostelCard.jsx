import React, { useState } from "react";

const HostelCard = ({ data }) => {
  const { name, location, rating, ratingText, reviews, features, price, tax, images, video } = data;
  const [currentIndex, setCurrentIndex] = useState(0);

  const mediaItems = [...images, video];

  const showSlide = (index) => {
    setCurrentIndex((index + mediaItems.length) % mediaItems.length);
  };

  const isVideo = (item) => item.endsWith(".mp4");

  return (
    <div className="hostel-card">
      <div className="image-slider">
        {mediaItems.map((item, idx) => {
          if (isVideo(item)) {
            return (
              <video
                key={idx}
                className={`slider-image ${idx === currentIndex ? "active" : ""}`}
                controls
              >
                <source src={item} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            );
          } else {
            return (
              <img
                key={idx}
                src={item}
                alt="Hostel"
                className={`slider-image ${idx === currentIndex ? "active" : ""}`}
              />
            );
          }
        })}
        <button className="slider-btn left" onClick={() => showSlide(currentIndex - 1)}>&lt;</button>
        <button className="slider-btn right" onClick={() => showSlide(currentIndex + 1)}>&gt;</button>
      </div>

      <div className="hostel-info">
        <h2>{name}</h2>
        <p className="location">{location}</p>
        <div className="rating-row">
          <span className="rating-badge">{rating}</span>
          <span>({reviews} Ratings) • {ratingText}</span>
        </div>
        <div className="features">
          {features.map((feature, idx) => (
            <span key={idx}>{feature}</span>
          ))}
        </div>
        <div className="action-row">
          <div className="price-section">
            <h3>₹{price}</h3>
            <p className="tax-note">+ ₹{tax} taxes & fees • per room</p>
          </div>
          <div className="btn-group">
            <button className="view-btn">View Details</button>
            <button className="book-btn">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostelCard;
