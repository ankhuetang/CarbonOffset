import React from 'react';

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-gradient-to-r from-green-500 to-blue-500 text-white h-screen'>
      <h1 className='text-6xl font-extrabold mb-4 text-center'>Welcome to Oceania</h1>
      <p className='text-2xl font-semibold text-center max-w-xl'>
        Explore the Future of Sustainability - Where Carbon Offsets Soar High and Green Dreams Take Flight.
      </p>
      <button className='mt-8 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-lg font-semibold rounded-full text-black hover:text-white transition duration-300 transform hover:scale-105'>
        Get Started
      </button>
    </div>
  );
}

export default Home;
