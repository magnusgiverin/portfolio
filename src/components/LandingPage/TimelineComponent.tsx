import React from 'react';

const TimelineComponent = () => {
  return (
    <section className="py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <h2 className="text-3xl font-bold mb-8 text-white">
          Oljefondets historie
        </h2>

        {/* Timeline */}
        <div className="relative flex items-center">
          {/* Timeline Line */}
          <div className="absolute left-[10%] right-[10%] h-0.5 bg-gray-700 top-[50px] z-0"></div>

          {/* Timeline Events */}
          <div className="grid grid-cols-4 gap-4 w-full relative z-10">
            {/* Event 1 */}
            <div className="text-center">
              <div className="w-[200px] h-[200px] rounded-full border-4 border-blue-400 flex items-center justify-center mx-auto bg-gray-900 text-white text-2xl font-bold">
                1969
              </div>
              <p className="text-gray-300 mt-4">
                Vi oppdager olje i Nordsjøen
              </p>
            </div>

            {/* Event 2 */}
            <div className="text-center">
              <div className="w-[200px] h-[200px] rounded-full border-4 border-blue-400 flex items-center justify-center mx-auto bg-gray-900 text-white text-2xl font-bold">
                1996
              </div>
              <p className="text-gray-300 mt-4">
                De første pengene blir overført til fondet
              </p>
            </div>

            {/* Event 3 */}
            <div className="text-center">
              <div className="w-[200px] h-[200px] rounded-full border-4 border-blue-400 flex items-center justify-center mx-auto bg-gray-900 text-white text-2xl font-bold">
                2019
              </div>
              <p className="text-gray-300 mt-4">
                Verdien på Oljefondet passerer 10 000 milliarder kroner
              </p>
            </div>

            {/* Event 4 */}
            <div className="text-center">
              <div className="w-[200px] h-[200px] rounded-full border-4 border-blue-400 flex items-center justify-center mx-auto bg-gray-900 text-white text-2xl font-bold">
                2023
              </div>
              <p className="text-gray-300 mt-4">
                Verdien på Oljefondet passerer 15 000 milliarder kroner
              </p>
            </div>
          </div>
        </div>

        {/* CTA Link */}
        <div className="mt-8 text-center">
          <a
            href="#"
            className="text-blue-400 hover:text-blue-300 flex items-center justify-center space-x-1"
          >
            <span>Se hele historien</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TimelineComponent;
