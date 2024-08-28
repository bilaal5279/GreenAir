import React, { useEffect, useRef, useState } from 'react';

const WhyUs = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    // Observe the elements
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      // Cleanup function to unobserve elements
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="min-h-screen text-center py-20 px-8 xl:px-0 flex flex-col justify-center">
      <span className="text-black text-lg max-w-lg mx-auto mb-2 capitalize flex items-center justify-center">
        Why Choose Us
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-black ml-3 w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        </svg>
      </span>
      <h1 className="text-black text-4xl md:text-5xl xl:text-6xl font-semibold max-w-3xl mx-auto mb-16 leading-snug">
        Experience, Quality and Trust You Can Count On
      </h1>
      <div className="grid-offer bg-white text-left grid sm:grid-cols-2 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
        {[
          { title: "Expert Installation", content: "With years of hands-on experience serving Birmingham and the West Midlands, GreenAir ensures exceptional HVAC installation services." },
          { title: "Quality Assurance", content: "Our Birmingham-based team is fully trained in the latest HVAC technologies, ensuring top-notch service quality every time." },
          { title: "Tailored Solutions", content: "Whether you require a new installation, a system upgrade, or routine maintenance, we provide personalized services that meet the demands of Birmingham’s diverse climate." },
          { title: "Client Satisfaction", content: "Customer satisfaction is at the core of everything we do. We go the extra mile to exceed expectations, building lasting relationships with our clients." }
        ].map((card, index) => (
          <div
            key={index}
            className="card shadow-lg dark:border-gray-700 p-10 relative"
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <div className="circle hidden md:block"></div>
            <div className="relative lg:pr-52">
              <h2 className="capitalize text-black mb-4 text-2xl xl:text-3xl font-semibold">{card.title}</h2>
              <p className="text-gray-700">{card.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
