import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('pending');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    emailjs
      .send(
        'service_kr58sww',
        'template_9hrhb59',
        formData,
        'lPEwTeN1eeOE0W7Sp'
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormStatus('sent');
        },
        (error) => {
          console.log(error.text);
          setFormStatus('pending');
        }
      );
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div id="contact" className="text-black p-8 flex items-center justify-center min-h-screen  ">
      <div className="max-w-4xl w-full flex flex-wrap mx-auto my-16 ">
        {formStatus === 'sent' ? (
          <div className="w-full text-center">
            <div className="flex justify-center items-center">
              <AiOutlineCheckCircle className="text-9xl text-green-500" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Thank you!</h2>
            <p className="text-xl mb-8">
              Your message has been sent successfully. We will get back to you as soon as possible.
            </p>
          </div>
        ) : (
          <>
            <div className="w-full lg:w-1/2 lg:pr-8 mt-10 font-sans">
              <h2 className="text-6xl font-bold mb-4 mt-15 font-sans">We would love to hear from you!</h2>
              <h2 className="text-2xl mb-8 font-bold">
                
              </h2>
              <h2 className="text-2xl mb-8 font-bold">
                For any quotes, questions or inquiries, please contact us.
              </h2>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="form-group">
                  <label htmlFor="name" className="block">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border-none rounded shadow-inner bg-gray-200 text-white hover:bg-gray-400 transition duration-300 ease-in-out"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="block">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border-none rounded shadow-inner bg-gray-200 text-white hover:bg-gray-400 transition duration-300 ease-in-out"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="block">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border-none rounded shadow-inner bg-gray-200 text-white hover:bg-gray-400 transition duration-300 ease-in-out"
                  />
                </div>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={formStatus === 'sending'}
                  className={`mt-12 ml-3 text-white bg-black border border-gray-300 focus:outline-none hover:bg-gray-800 focus:ring-4 focus:ring-gray-200 font-bold rounded-full text-2xl sm:text-3xl px-4 sm:px-6 lg:px-8 py-2 sm:py-3 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ${
                    formStatus === 'sending' ? 'cursor-not-allowed' : ''
                  }`}
                  
                >
                  {formStatus === 'sending' ? 'Sending...' : 'Send'}
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
