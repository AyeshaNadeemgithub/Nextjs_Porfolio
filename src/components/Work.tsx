import React from 'react';
import { data } from '@/data/data';
import type { StaticImageData } from 'next/image'; // Import StaticImageData

// Define the type for each project
interface Project {
  id: number;
  name: string;
  image: StaticImageData; // Use StaticImageData instead of string
  github: string;
  live: string;
}

const Work: React.FC = () => {
  // projects file
  const project: Project[] = data;

  return (
    <div className="w-full h-screen md:h-[250vh] text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
        </div>

        {/* Container for projects */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          {/* Grid Item */}
          {project.map((item) => (
            <div
              key={item.id}
              style={{ backgroundImage: `url(${item.image.src})` }} // Use `image.src` for StaticImageData
              className="shadow-lg shadow-[#040c16] group w-[450px] container rounded-md 
              flex justify-center text-center items-center mx-auto mb-5 content-div"
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  {item.name}
                </span>
                <div className="pt-8 text-center">
                  <a href={item.github} target="_blank" rel="noopener noreferrer">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>
                  <a href={item.live} target="_blank" rel="noopener noreferrer">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
