import React from 'react';

const Testimonials = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-8 lg:px-12 mx-auto max-w-7xl">
      <div className="rounded-lg shadow-lg dark:border-gray-700 mb-6 mt-6 mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl flex flex-col" style={{ boxShadow: '0 -4px 8px rgba(0, 0, 0, 0.2)', minHeight: '20rem' }}>
        <figure className="flex flex-col flex-grow justify-between p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 ">
            <h3 className="text-lg font-semibold text-gray-900 ">Expert Installation</h3>
            <p className="my-4">“Asif and his team recently installed my air conditioning system. Their professionalism was outstanding, and the quality of service they provided was excellent. The team was very friendly and took the time to explain everything in detail.”</p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
          <img className="rounded-full w-9 h-9" src="https://lh3.googleusercontent.com/a/ACg8ocKpfekta2SNy9nE60yqbaRaoxoMQKrvDGNtGYC8xfJyjM82Jg=w60-h60-p-rp-mo-br100" alt="profile picture" />
            <div className="space-y-0.5 font-medium  text-left">
              <div>Kelly</div>
              <div className="text-sm text-gray-500 ">Residential Installation</div>
            </div>
          </figcaption>
        </figure>
      </div>
      <div className="rounded-lg shadow-lg dark:border-gray-700 mb-6 mt-6 mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl flex flex-col" style={{ boxShadow: '0 -4px 8px rgba(0, 0, 0, 0.2)', minHeight: '20rem' }}>
        <figure className="flex flex-col flex-grow justify-between p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r ">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 ">
            <h3 className="text-lg font-semibold text-gray-900 ">Great product with excellent support</h3>
            <p className="my-4">"Very pleased with my new ac system. Asif explained everything properly and in detail. His team on installation day were also very good. Installation was very smooth, clean and tidy. Would recommend. Book well in advance as he gets busy.
            "</p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <img className="rounded-full w-9 h-9" src="https://lh3.googleusercontent.com/a-/ALV-UjXX2iZ3KVJ9eSLSep--0Fh6ORmTKPQBYiY9ibr7gi8Gh2S09E75=w60-h60-p-rp-mo-ba3-br100" alt="profile picture" />
            <div className="space-y-0.5 font-medium  text-left">
              <div>Shuhel Hussain</div>
              <div className="text-sm text-gray-500 ">Residential Installation</div>
            </div>
          </figcaption>
        </figure>
      </div>
      <div className="rounded-lg shadow-lg dark:border-gray-700 mb-6 mt-6 mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl flex flex-col" style={{ boxShadow: '0 -4px 8px rgba(0, 0, 0, 0.2)', minHeight: '20rem' }}>
        <figure className="flex flex-col flex-grow justify-between p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r ">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 ">
            <h3 className="text-lg font-semibold text-gray-900 ">A Perfect Choice</h3>
            <p className="my-4">"I had a great experience with Asif (Green Air)  during the installation of my AC units. His professionalism and helpful demeanor stood out. Asif demonstrated expertise, ensuring a smooth process. Overall, my satisfaction with his service is very good. I would highly recommend him
            ”</p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <img className="rounded-full w-9 h-9" src="https://lh3.googleusercontent.com/a-/ALV-UjVURJRjVcVOH94xbaOn_xHwzph_iopngL1aQkwtw-ssE9YAUtI=w60-h60-p-rp-mo-br100" alt="profile picture" />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div>Eram Farooq</div>
              <div className="text-sm text-gray-500 ">Residential Installation</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default Testimonials;
