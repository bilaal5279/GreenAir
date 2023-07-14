import React, { useState } from 'react';

const OurWork = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleReadMore = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const projects = [
    {
      id: 1,
      image: "/4.webp",
      title: "Burgers & Sauce",
      description: "Residential AC Installation",
      details: " This project involved installing air conditioning systems in residential homes, providing comfortable and energy-efficient cooling solutions to homeowners. The team at Green Air successfully completed the installation within the specified time frame and ensured customer satisfaction. The project showcased the company's expertise in handling residential AC installations and further strengthened their reputation in the market.",
    },
    {
      id: 2,
      image: "/5.webp",
      title: "Masjid AC Repair",
      description: "Commercial AC Repair",
      details: " In this project, Green Air was hired to repair the AC systems in a commercial building. The team identified the issues with the existing systems, which were causing discomfort to the occupants and affecting their productivity. With their technical skills and experience, Green Air successfully repaired and optimized the AC systems, restoring optimal cooling performance and ensuring a comfortable environment for the employees. The project demonstrated Green Air's ability to handle complex commercial AC repair projects and solidified their position as a trusted service provider in the commercial sector.",
    },
    {
      id: 3,
      image: "/6.webp",
      title: "Local Residential AC Installation",
      description: "Ductless AC System Installation",
      details: "  This project involved the installation of ductless AC systems in a residential complex. Green Air utilized their expertise in ductless AC technology to design and install efficient cooling systems in each residential unit. The ductless systems provided personalized comfort control for the residents and improved energy efficiency. The project showcased Green Air's commitment to modern and eco-friendly cooling solutions and their ability to handle large-scale installations with precision and professionalism.",
    },
  ];

  return (
    <div className="pt-20">
      <h1 className="text-center mt-24 text-4xl font-bold underline">
        Some Of Our Work
      </h1>
      <div className="px-4 sm:px-6 lg:px-2 lg:pl-64">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 mx-auto max-w-7xl mt-10">
          {projects.map((project) => (
            <div key={project.id} className="relative">
              <img
                src={project.image}
                alt="Picture of some work"
                className="w-full"
              />
              <div className="absolute bottom-0 bg-white bg-opacity-75 w-full p-4">
                <p className="text-lg font-medium">{project.title}</p>
                <p className="text-sm text-gray-500">
                  {project.description}
                </p>
                <button
                  className="text-blue-600 hover:underline"
                  onClick={() => handleReadMore(project)}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-80 md:w-96 shadow-xl shadow-black">
            <h2 className="text-2xl font-bold mb-4">
              {selectedProject.title}
            </h2>
            <p className="text-lg mb-4">{selectedProject.details}</p>
            <button
              className="text-blue-600 hover:underline"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

<div className=' '> 
        <h1 className="mt-24 text-2xl md:text-3xl lg:text-4xl font-bold underline text-center">
          Priding ourselves in our work
        </h1>
        <p className="mt-4 text-xl md:text-xl lg:text-xl mb-8 font-extralight px-4 md:px-8 lg:px-32 xl:px-48 2xl:px-96 mx-auto">
          At Green Air, we take immense pride in our work and strive for
          excellence in every air conditioning project we undertake. Our
          commitment to quality and attention to detail is showcased in the
          images above. Each picture tells a story of our unwavering dedication
          to providing superior air conditioning solutions tailored to our
          clients' needs. From residential installations to commercial repairs
          and maintenance, our skilled team of experts ensures that every
          project is executed with the utmost professionalism and craftsmanship.
          With an eye for precision and a focus on customer satisfaction, we go
          above and beyond to deliver outstanding results. These images capture
          the expertise, care, and technical proficiency that have made Green
          Air the trusted choice for air conditioning services throughout
          Birmingham.
        </p>
      </div>
    </div>
  );
};

export default OurWork;
