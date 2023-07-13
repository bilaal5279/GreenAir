import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <img src="/Hero.webp" alt="Hero Image" className="w-full h-full object-cover object-center" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl'>
          <span>GREENAIR AIR CONDITIONING</span>
          <span className="block w-3/5 mx-auto mt-2 h-1 bg-white"></span>
        </h1>
        <h2 className='font-normal text-xl sm:text-2xl mt-5'>Reliable Comfort, Birmingham's Choice</h2>
        <div className='flex flex-col sm:flex-row justify-center mt-10'>
          <button type="button" className="text-black bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-bold rounded-full text-lg sm:text-2xl px-8 sm:px-12 lg:px-16 py-3 sm:py-5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            Get A Free Quote
          </button>
          <button type="button" className="text-black bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-bold rounded-full text-lg sm:text-2xl px-8 sm:px-12 lg:px-16 py-3 sm:py-5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            Our Services
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
