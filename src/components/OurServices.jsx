const OurServices = () => {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl lg:text-center flex flex-col justify-center items-center">
          <h2 className="text-base font-semibold leading-7 text-white bg-[#50C878] px-3 rounded-lg uppercase mb-4 lg:mb-8">
            Our Services
          </h2>
          <h1 className="lg:text-7xl text-4xl md:text-5xl font-bold tracking-tight text-black text-center">
            Our&nbsp;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#50C878] via-[#50C878] to-gray-900">
              Services
            </span>
          </h1>
          <p className="mt-6 text-md text-gray-600 max-w-lg text-center">
            Discover our comprehensive services designed to provide the best solutions for your home and business.
          </p>
        </div>

        <div className="mt-16 max-w-5xl sm:mt-20 lg:mt-24 mx-auto">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-black">
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-[#50C878]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-6 w-6 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    />
                  </svg>
                </div>
                Installations
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                With a vast range of experience, Greenair’s specialist install team is confident in finding and carrying out the best solutions for your home and business.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-black">
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-[#50C878]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-6 w-6 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
                    />
                  </svg>
                </div>
                Servicing and Repairs
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                We offer both repairs and maintenance services on your air-conditioning systems to make sure they are always kept in top condition.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-black">
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-[#50C878]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-6 w-6 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                    />
                  </svg>

                </div>
                Customer Support
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Our support team is available around the clock to assist you. Whether it's day or night, we're here to address your queries promptly.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-black">
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-[#50C878]">

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-6 w-6 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                </div>
                Why Maintenance is Essential
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Overtime, neglecting maintenance can cause bacteria and mold build up in your air-con filters. It can also increase its running costs, due to it having to work less efficiently, and increasing its risk of breakdown.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
