import React from "react";
import Stories from "../FeaturedStories/Stories";
import OurStory from "../HeroSection/OurStory";
const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-r from-green-100 to-blue-100"
    >
      <div className="home-content max-w-lg text-center">
        <h2 className="text-5xl font-extrabold text-green-800 mb-4 drop-shadow-lg">
          Welcome to Our Climate Change Project
        </h2>
        <p className="text-gray-800 text-lg mb-6">
          Join us in exploring the critical challenges posed by climate change.
        </p>
        <a
          href="/story/1"
          className="cta inline-block bg-green-600 text-white py-3 px-6 rounded-full shadow-lg hover:bg-green-700 hover:shadow-xl transition duration-300 transform hover:scale-105"
        >
          Explore Stories
        </a>
      </div>
      <Stories />
      <OurStory/>
    </section>
  );
};

export default Home;
