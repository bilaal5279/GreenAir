import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-16">
        <h1 className="text-6xl font-extrabold text-center">Get in touch</h1> 
        <p className="text-center mt-4 text-3xl font-light">Like what you&apos;ve read? To request any of our services or to learn more about <br/> how we can help, please reach out.</p>
        <div className="text-center">
          <Link to ="/contact">
          <button type="button" className="mt-12 ml-3 text-white bg-black border border-gray-300 focus:outline-none hover:bg-gray-800 focus:ring-4 focus:ring-gray-200 font-bold rounded-full text-2xl sm:text-3xl px-4 sm:px-6 lg:px-8 py-2 sm:py-3 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            Contact Us
          </button></Link>
        </div>
      </div>
      <div className="flex justify-between font-thin mx-4 mt-16">
        <footer className="mx-4">
          <p>Copyright © 2023 Greenair Air Conditioning - All Rights Reserved.</p>
        </footer>
        <footer className="mx-4">
          <p>Designed by Adhere Creative</p>
        </footer>
      </div>
    </div>
  );
}

export default ContactSection;
