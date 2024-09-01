import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <div className="px-4 md:px-8 lg:px-12">
      <div className="flex flex-col justify-center items-center mt-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-center">Get in touch</h1>
        <p className="text-center mt-4 text-lg md:text-3xl font-light">
          Like what you&apos;ve read? To request any of our services or to learn more about <br />
          how we can help, please reach out.
        </p>
        <div className="text-center">
          <Link to="/contact">
            <button
              type="button"
              className="mt-12 text-white bg-[#50C878] border border-gray-300 focus:outline-none  focus:ring-4  font-bold rounded-full text-lg md:text-2xl px-4 sm:px-6 lg:px-8 py-2 sm:py-3 "
            >
              Contact Us
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between font-thin mt-16">
      </div>
    </div>
  );
};

export default ContactSection;
