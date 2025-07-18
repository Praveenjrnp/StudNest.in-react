import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import FilterSidebar from "../components/FilterSidebar";
import HostelCard from "../components/HostelCard";
import "../styles/hostel_listing.css";

const hostelData = [
  {
    name: "XYZ Super Boys Hostel",
    location: "Near GLA University, Mathura",
    rating: 4.1,
    ratingText: "Very Good",
    reviews: 329,
    features: ["📶 Free Wifi", "🧺 Laundry", "🏋️ Gym"],
    price: 1099,
    tax: 106,
    images: ["/1seaterAC.webp", "/2seaterAc.jpg"],
    video: "hostel-tour.mp4"
  },
  {
    name: "ABC Comfort Stay",
    location: "Near RBS College, Agra",
    rating: 4.5,
    ratingText: "Excellent",
    reviews: 512,
    features: ["📶 Free Wifi", "🧺 Laundry", "🏋️ Gym"],
    price: 1099,
    tax: 106,
    images: ["/1seaterAC.webp", "/2seaterAc.jpg"],
    video: "hostel-tour.mp4"
  },
    {
    name: "ABC Comfort Stay",
    location: "Near RBS College, Agra",
    rating: 4.5,
    ratingText: "Excellent",
    reviews: 512,
    features: ["📶 Free Wifi", "🧺 Laundry", "🏋️ Gym"],
    price: 1099,
    tax: 106,
    images: ["/1seaterAC.webp", "/2seaterAc.jpg"],
    video: "hostel-tour.mp4"
  },
    {
    name: "ABC Comfort Stay",
    location: "Near RBS College, Agra",
    rating: 4.5,
    ratingText: "Excellent",
    reviews: 512,
    features: ["📶 Free Wifi", "🧺 Laundry", "🏋️ Gym"],
    price: 1099,
    tax: 106,
    images: ["/1seaterAC.webp", "/2seaterAc.jpg"],
    video: "hostel-tour.mp4"
  },
    {
    name: "ABC Comfort Stay",
    location: "Near RBS College, Agra",
    rating: 4.5,
    ratingText: "Excellent",
    reviews: 512,
    features: ["📶 Free Wifi", "🧺 Laundry", "🏋️ Gym"],
    price: 1099,
    tax: 106,
    images: ["/1seaterAC.webp", "/2seaterAc.jpg"],
    video: "hostel-tour.mp4"
  }
  
];

const HostelListingPage = () => {
  useEffect(() => {
    const sliders = document.querySelectorAll(".slider");
    sliders.forEach(slider => {
      const updateSliderBackground = () => {
        const min = slider.min;
        const max = slider.max;
        const val = slider.value;
        const percentage = ((val - min) / (max - min)) * 100;
        slider.style.background = `linear-gradient(to right, #f97316 0%, #f97316 ${percentage}%, #dcdcdc ${percentage}%, #dcdcdc 100%)`;
      };
      updateSliderBackground();
      slider.addEventListener("input", updateSliderBackground);
    });
  }, []);

  return (
    <>
      <Navbar />
      <SearchBar />
      <main className="panel-wrapper">
        <FilterSidebar />
        <div className="content">
          {hostelData.map((hostel, index) => (
            <React.Fragment key={index}>
              <HostelCard data={hostel} />
              <hr className="card-divider" />
            </React.Fragment>
          ))}
        </div>
      </main>
    </>
  );
};

export default HostelListingPage;
