// pages/index.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

import DatePicker from '../components/DateTimePicker'
import ImageGallery from '../components/ImageGallery'
import SelectedObjectsFilter from '../components/SelectedObjectsFilter'



// const athena_backend_url = 'http://10.181.97.194:5000';
const athena_backend_url = process.env.REACT_APP_BACKEND_URL;

const Home = () => {
  const [imageObjects, setImagesObjects] = useState([]);
  const [selectedObjectType, setSelectedObjectType] = useState(new Set(['person', 'bicycle', 'car', 'motorcycle', 'airplane', 'bus', 'train', 'truck', 'boat', 'traffic light', 'fire hydrant', 'stop sign', 'parking meter', 'bench', 'bird', 'cat', 'dog', 'horse', 'sheep', 'cow', 'elephant', 'bear', 'zebra', 'giraffe', 'backpack', 'umbrella', 'handbag', 'tie', 'suitcase', 'frisbee', 'skis', 'snowboard', 'sports ball', 'kite', 'baseball bat', 'baseball glove', 'skateboard', 'surfboard', 'tennis racket', 'bottle', 'wine glass', 'cup', 'fork', 'knife', 'spoon', 'bowl', 'banana', 'apple', 'sandwich', 'orange', 'broccoli', 'carrot', 'hot dog', 'pizza', 'donut', 'cake', 'chair', 'couch', 'potted plant', 'bed', 'dining table', 'toilet', 'tv', 'laptop', 'mouse', 'remote', 'keyboard', 'cell phone', 'microwave', 'oven', 'toaster', 'sink', 'refrigerator', 'book', 'clock', 'vase', 'scissors', 'teddy bear', 'hair drier', 'toothbrush']));
  const [cameras, setCameras] = useState({});

  const fetchCameras = async () => {
    const response = await axios.get(
      `${athena_backend_url}/api/cameras`
    );
    const cameraObject = response.data.reduce((acc, cur) => {
      const { cameraId, ...rest } = cur;
      acc[cameraId] = rest;
      return acc;
    }, {});
    setCameras(cameraObject);
  };

  useEffect(() => {
    fetchCameras();
  }, []);


  const fetchImages = async (date, startTime, endTime) => {
    if (!date || !startTime || !endTime) {
      date = '2023-05-03';
      startTime = '15:45';
      endTime = '16:45';
    }
    
    startTime = startTime.replace(':', '-');
    startTime = startTime.concat('-00');

    endTime = endTime.replace(':', '-');
    endTime = endTime.concat('-00');


    const start_date = date + '-' + startTime;
    const end_date = date + '-' + endTime;

    const response = await axios.get(
      // `${athena_backend_url}/api/images/date_range?start_date=2023-04-01-09-00-00&end_date=2023-06-01-09-02-00`
      `${athena_backend_url}/api/images/date_range?start_date=${start_date}&end_date=${end_date}`
    );
    setImagesObjects(response.data);
  };


  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <main className="h-screen flex">
      <div className="flex flex-col flex-grow pr-4 items-center mt-4">
        <h1 className="text-2xl font-semibold mb-4">Athena - Kinshu's Startup</h1>
        <div className="overflow-y-scroll">
          <ImageGallery imageObjects={imageObjects} selectedObjectType={selectedObjectType} cameras={cameras}/>
        </div>
      </div>
      <div className="w-auto min-w-min h-full overflow-y-scroll p-4 border-l">
        <div className="mb-4">
          <DatePicker onDateTimeSelected={fetchImages} />
        </div>
        <SelectedObjectsFilter onFilterChanged={setSelectedObjectType} />
      </div>
    </main>
  );
};

export default Home;