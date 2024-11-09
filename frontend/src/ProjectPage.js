// pages/index.js

import React, { useEffect, useState } from 'react';



const ProjectPage = () => {
    const [projects, setProjects] = useState([
        { name: 'Windmill Building Jaipur', imagePath: 'https://www.tourism-of-india.com/blog/wp-content/uploads/2021/02/Dhanaulti.jpg', carbonOffset: 20, pricePerTon: 10, qualityScore: 4.7 },
        { name: 'Solar City Utah', imagePath: 'https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTqKHfY1JPtdqyPGJTyjpBaV5HyTmJ6ucqzDhJ4XlEiHtW3rwm-LecJ8UQvLNDdBWBP', carbonOffset: 10, pricePerTon: 10, qualityScore: 4.7 },
        { name: 'Windmill Building Jaipur', imagePath: 'https://www.tourism-of-india.com/blog/wp-content/uploads/2021/02/Dhanaulti.jpg', carbonOffset: 20, pricePerTon: 10, qualityScore: 4.7 },
        { name: 'Solar City Utah', imagePath: 'https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTqKHfY1JPtdqyPGJTyjpBaV5HyTmJ6ucqzDhJ4XlEiHtW3rwm-LecJ8UQvLNDdBWBP', carbonOffset: 10, pricePerTon: 10, qualityScore: 4.7 },
        { name: 'Windmill Building Jaipur', imagePath: 'https://www.tourism-of-india.com/blog/wp-content/uploads/2021/02/Dhanaulti.jpg', carbonOffset: 20, pricePerTon: 10, qualityScore: 4.7 },
        { name: 'Solar City Utah', imagePath: 'https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTqKHfY1JPtdqyPGJTyjpBaV5HyTmJ6ucqzDhJ4XlEiHtW3rwm-LecJ8UQvLNDdBWBP', carbonOffset: 10, pricePerTon: 10, qualityScore: 4.7 },
        { name: 'Windmill Building Jaipur', imagePath: 'https://www.tourism-of-india.com/blog/wp-content/uploads/2021/02/Dhanaulti.jpg', carbonOffset: 20, pricePerTon: 10, qualityScore: 4.7 },
        { name: 'Solar City Utah', imagePath: 'https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTqKHfY1JPtdqyPGJTyjpBaV5HyTmJ6ucqzDhJ4XlEiHtW3rwm-LecJ8UQvLNDdBWBP', carbonOffset: 10, pricePerTon: 10, qualityScore: 4.7 },
    ]);

    return (
        <div className="flex flex-wrap justify-center">
            {projects.map((project) => (
                <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
                    <img className="w-full" src={project.imagePath} alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{project.name}</div>
                        <p className="text-gray-700 text-base">
                            Carbon Offset: {project.carbonOffset} tons
                        </p>
                        <p className="text-gray-700 text-base">
                            Price Per Ton: ${project.pricePerTon}
                        </p>
                        <p className="text-gray-700 text-base">
                            Quality Score: {project.qualityScore}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><a>Buy</a></span>
                        <span className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><a>Sell</a></span>
                        <input type='number' className='border' placeholder='enter anmount...'></input>
                    </div>
                </div>
            ))}
        </div>
    );
};


export default ProjectPage;