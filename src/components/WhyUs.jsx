import React from 'react';

const WhyUs = () => {
  return (
    <div>
    <div className="flex flex-col lg:mx-30 md:flex-row m-4 md:m-8 lg:m-32">
      <img src="/WhyUs.webp" alt="Image of kitchen and air conditioning unit" className="w-full md:w-1/4 lg:w-1/3 mr-0 md:mr-8 lg:mr-12  " />
      <div>
        <h1 className="font-300 underline text-3xl my-5">Why us?</h1>
        <p className="font-light text-xl mt-4">
          With over 30+ years of experience in the Air Conditioning sector, we pride ourselves in offering a professional and trust-worthy service around the Birmingham area.
        </p>
        <p className="font-light text-xl mt-4">
          We have carried out many installs in both residential and commercial settings, offering a friendly service bespoke to each customer’s specific needs.
        </p>
        <p className="font-light text-xl mt-4">
          Our main ethos is not only meeting but exceeding client’s expectations, so that we can maintain relationships and continue to deliver successful operations.
        </p>
        <p className="font-light text-xl mt-4">
          All our staff and engineers are fully trained and kept up to date with new training to ensure we are always maintaining, and even improving, the quality and efficiency of the service and reputation we strive to provide.
        </p>
        <p className="font-light text-xl mt-4">
          No matter how big or small the job may be, we aim to provide the best results, giving you peace of mind for your air conditioning needs.
        </p>
      </div>
    </div>
    </div>
  );
}

export default WhyUs;
