import React from 'react';
const Testimonials = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 md:mx-8 lg:mx-12" style={{ gridAutoRows: '1fr' }}>
      <div className=" rounded-lg shadow-sm dark:border-gray-700">
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Expert Installation</h3>
            <p className="my-4">“Green Air exceeded our expectations with their exceptional service. From the initial consultation to the final installation, their team demonstrated professionalism, expertise, and attention to detail. Our air conditioning system works flawlessly, and we couldn't be happier with the results. I highly reccomend GreenAir for anyone with a commercial property.”</p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div>Bonnie Green</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Buisness Owner</div>
            </div>
          </figcaption>
        </figure>
      </div>
      <div className=" rounded-lg shadow-sm dark:border-gray-700">
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Great product with excellent support</h3>
            <p className="my-4">"We highly recommend Green Air for their top-notch air conditioning services. They promptly responded to our service request and quickly diagnosed the issue with our commercial HVAC system. The repair was carried out efficiently, and their team went above and beyond to ensure our business operations were minimally disrupted. Green Air's dedication to customer satisfaction is truly commendable."</p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/alex-jones.png" alt="profile picture" />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div>Alex Jones</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Customer</div>
            </div>
          </figcaption>
        </figure>
      </div>
      <div className=" rounded-lg shadow-sm dark:border-gray-700">
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">A Perfect Choice</h3>
            <p className="my-4">"Choosing Green Air for our air conditioning installation was the best decision we made. Their knowledgeable team guided us through the process, helping us select the most suitable system for our home. The installation was completed seamlessly, and the team left our property clean and tidy. We couldn't be happier with the results”</p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/alex-jones.png" alt="profile picture" />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div>Emma and James</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Commercial Customer</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default Testimonials;
