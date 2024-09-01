import React from 'react';

const OurWork = () => {
  return (
    <section className="about-section py-20 relative bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          
          {/* Content Column */}
          <div className="content-column w-full md:w-1/2 mb-10 md:mb-0">
            <div className="inner-column pt-12 md:pr-24">
              <div className="sec-title mb-10">
                <div className="title text-[#50C878] text-xl font-semibold mb-4">About Us</div>
                <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                  We Are The Experts In <br className="hidden md:block" /> 
                  Air Conditioning Solutions
                </h2>
              </div>
              <div className="text text-gray-700 text-lg leading-relaxed mb-10">
                Green Air is a premier air conditioning company based in Birmingham, England, with over 30 years of experience. Our team of dedicated professionals specialize in providing high-quality air conditioning solutions for both residential and commercial properties. We pride ourselves on our ability to deliver reliable, energy-efficient systems that enhance comfort and improve air quality. Over the decades, we've built a reputation for excellence, driven by our commitment to innovation, customer satisfaction, and sustainable practices. Whether you're looking to install a new system, upgrade your existing one, or need maintenance and repairs, Green Air is here to ensure your environment is always perfect.
              </div>
              <div className="email font-bold text-xl text-black">
                Request Quote: <span className="text-[#50C878]">info@greenairac.co.uk</span>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="image-column w-full md:w-1/2 flex justify-center relative">
            <div className="inner-column relative p-10 md:ml-12">
              <div className="image relative">
                <img src="Aboutus.jpg" alt="About Us" className="w-full block shadow-lg relative z-10" />
                <div className="overlay-box absolute left-10 bottom-12">
                  <div className="year-box relative text-black text-lg font-bold leading-snug pl-32">
                    <span className="number absolute left-0 top-0 w-28 h-28 flex items-center justify-center text-[#50C878] text-5xl border border-black bg-white shadow-md">
                      30
                    </span>
                    Years <br /> Experience <br /> Working
                  </div>
                </div>
              </div>
              {/* Outer Green Border */}
              <div className="border-2 border-[#50C878] absolute right-0 top-0 left-10 bottom-24 -z-0"></div>
              {/* Inner White Border */}
              <div className="border-4 border-white absolute right-2 top-2 left-12 bottom-28 -z-10"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurWork;
