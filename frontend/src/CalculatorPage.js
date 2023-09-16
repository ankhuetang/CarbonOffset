// pages/index.js

import React, { useEffect, useState } from 'react';
// import axios from 'axios';

const athena_backend_url = process.env.REACT_APP_BACKEND_URL;

const CalculatorPage = () => {
    const [carbonFields, setCarbonFields] = useState([
        { name: 'Tomato', imagePath: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg', carbonCost: 1.99, quantity: 1 },
        { name: 'Potato', imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Patates.jpg/2560px-Patates.jpg', carbonCost: 0.99, quantity: 1 },
        { name: 'Banana', imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/2560px-Bananas_white_background_DS.jpg', carbonCost: 0.49, quantity: 1 },
    ]);

//   const fetchCameras = async () => {
//     const response = await axios.get(
//       `${athena_backend_url}/api/cameras`
//     );
//     const cameraObject = response.data.reduce((acc, cur) => {
//       const { cameraId, ...rest } = cur;
//       acc[cameraId] = rest;
//       return acc;
//     }, {});
//     setCameras(cameraObject);
//   };

//   useEffect(() => {
//     fetchCameras();
//   }, []);


//   const fetchImages = async (date, startTime, endTime) => {
//     if (!date || !startTime || !endTime) {
//       date = '2023-05-03';
//       startTime = '15:45';
//       endTime = '16:45';
//     }
    
//     startTime = startTime.replace(':', '-');
//     startTime = startTime.concat('-00');

//     endTime = endTime.replace(':', '-');
//     endTime = endTime.concat('-00');


//     const start_date = date + '-' + startTime;
//     const end_date = date + '-' + endTime;

//     const response = await axios.get(
//       // `${athena_backend_url}/api/images/date_range?start_date=2023-04-01-09-00-00&end_date=2023-06-01-09-02-00`
//       `${athena_backend_url}/api/images/date_range?start_date=${start_date}&end_date=${end_date}`
//     );
//     setImagesObjects(response.data);
//   };


//   useEffect(() => {
//     fetchImages();
//   }, []);

  return (
    <main className="h-screen flex">
      <div className="flex flex-col flex-grow pr-4 items-center mt-4">
        <h1 className="text-2xl font-semibold mb-4">Carbon Emission Calculator</h1>
        <div className="overflow-y-scroll">
            {
                carbonFields.map((carbonField, index) => (
                    <div key={index} className="flex flex-row items-center mb-4">
                        <img className="w-16 h-16 mr-4" src={carbonField.imagePath} alt={carbonField.name} />
                        <div className="flex flex-col">
                            <div className="flex flex-row items-center">
                                <h2 className="text-xl font-semibold mr-4">{carbonField.name}</h2>
                                <h2 className="text-xl font-semibold mr-4">{carbonField.carbonCost}</h2>
                            </div>
                            <div className="flex flex-row items-center">
                                <h2 className="text-xl font-semibold mr-4">Quantity: {carbonField.quantity}</h2>
                            </div>
                        </div>
                    </div>
                ))

            }
        </div>
      </div>
    </main>
  );
};

export default CalculatorPage;