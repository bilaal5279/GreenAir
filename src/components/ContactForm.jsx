import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { FaHome, FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', // Add phone to the form data
    message: '',
  });

  const [formStatus, setFormStatus] = useState('pending'); // 'pending', 'sending', 'sent', or 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');

    emailjs
      .send(
        'service_5hnlmgw',          // Replace with your service ID
        'template_x6zkyy9',         // Replace with your template ID
        formData,                   // Send the full form data including name, email, phone, and message
        'PtqfBwOuNlVWRoe7T'         // Replace with your user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormStatus('sent');
        },
        (error) => {
          console.log(error.text);
          setFormStatus('error');
        }
      );

    // Clear the form data after sending
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div id="contact" className="text-black p-6 flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-4xl w-full flex flex-col md:flex-row mx-auto my-8 md:my-16 bg-white shadow-lg rounded-lg p-6 md:p-10">
        {formStatus === 'sent' ? (
          <div className="w-full text-center">
            <div className="flex justify-center items-center">
              <AiOutlineCheckCircle className="text-6xl md:text-9xl text-[#50C878]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Thank you!</h2>
            <p className="text-lg md:text-xl mb-8">
              Your message has been sent successfully. We will get back to you as soon as possible.
            </p>
          </div>
        ) : (
          <>
            <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-black">Contact Us</h2>
              <p className="text-lg mb-6 md:mb-10 text-gray-700">
                For any quotes, questions, or inquiries, please contact us. We would love to hear from you!
              </p>

              <div className="contact-info">

                <div className="contact-info-item flex items-center mb-4 md:mb-6">
                <div className="contact-info-icon flex justify-center items-center bg-[#50C878] text-white rounded-full h-12 w-12 md:h-16 md:w-16">
                    <FaPhone className="text-xl md:text-2xl" />
                  </div>
                  <div className="contact-info-content ml-4">
                    <h4 className="text-lg md:text-xl font-semibold text-black">WhatsApp</h4>
                    <p className="text-gray-700">07494870984</p>
                  </div>
                </div>

                <div className="contact-info-item flex items-center mb-4 md:mb-6">
                  <div className="contact-info-icon flex justify-center items-center bg-[#50C878] text-white rounded-full h-12 w-12 md:h-16 md:w-16">
                    <FaEnvelope className="text-xl md:text-2xl" />
                  </div>
                  <div className="contact-info-content ml-4">
                    <h4 className="text-lg md:text-xl font-semibold text-black">Email</h4>
                    <p className="text-gray-700">info@greenairac.co.uk</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 md:pl-8">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="form-group">
                  <label htmlFor="name" className="block text-lg font-semibold text-black">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 md:p-4 border border-gray-300 rounded focus:outline-none focus:border-[#50C878]"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="block text-lg font-semibold text-black">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 md:p-4 border border-gray-300 rounded focus:outline-none focus:border-[#50C878]"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="block text-lg font-semibold text-black">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full p-3 md:p-4 border border-gray-300 rounded focus:outline-none focus:border-[#50C878]"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="block text-lg font-semibold text-black">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-3 md:p-4 border border-gray-300 rounded focus:outline-none focus:border-[#50C878]"
                  />
                </div>
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className={`w-full py-3 md:py-4 bg-[#50C878] text-white font-bold rounded-full transition duration-300 ease-in-out ${
                    formStatus === 'sending' ? 'opacity-50 cursor-not-allowed' : 'hover:bg-black'
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
