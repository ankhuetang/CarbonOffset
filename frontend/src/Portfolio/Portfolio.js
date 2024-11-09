import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Button, Divider, Stack, Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import CircleIcon from '@mui/icons-material/Circle';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import axios from 'axios';
import GLTable from './marketTable';
import MarketCard from './marketCard';
import RefreshIcon from '@mui/icons-material/Refresh';
import moment from 'moment';



// export default function Dashboard() {


	// const getMarketStatus = async () => {
	// 	try {
	// 		const response = await axios.get(
	// 			`${process.env.REACT_APP_BASE_URL}/analysis/market-status`
	// 		);
	// 		if (response.status === 200) {
	// 			console.log(response.data.marketStatus.marketState);
	// 			setMarketStatus(response.data.marketStatus.marketState);
	// 		}
	// 	} catch (err) {
	// 		console.log(err);
	// 		alert('Something went wrong');
	// 	}
	// };

	// const refreshMarketStatus = async () => {
	// 	try {
	// 		const response = await axios.put(
	// 			`${process.env.REACT_APP_BASE_URL}/analysis/market-status/save`
	// 		);
	// 		if (response.status === 200) {
	// 			getMarketStatus();
	// 		}
	// 	} catch (err) {
	// 		console.log(err);
	// 		alert('Something went wrong');
	// 	}
	// };

	// const handleRefreshMarketStatus = async () => {
	// 	refreshMarketStatus();
	// };

	// const handleRefreshGainerLosers = async () => {
	// 	setRefreshGL(true);
	// };

	// useEffect(() => {
	// 	getMarketStatus();
	// }, []);

// }



export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [possessions, setPossessions] = useState([
    { 'company': "Jaipur Co", 'price': "$20.47", 'projectName': 'Jaipur Solar Farm Lot #427' },
    { 'company': "Utah Green Ltd.", 'price': "$49.64", 'projectName': 'Salt Lake Windmill Mfg Center' },
    { 'company': "National Windmill Corp.", 'price': "$118.87", 'projectName': 'National Windmill Mfg CT Center' },
    { 'company': "Hydro LLC", 'price': "$77.89", 'projectName': 'Connecticut River Dam Turbine Center 2' }
  ]);
  const [type, setType] = useState('gainers');
  const [refreshGL, setRefreshGL] = useState(false);
  
  const userId = '650656e036fdf136c66e5b95';

  const apiUrl = 'http://127.0.0.1:5000/'
  
  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     try {
  //       const response = await fetch(apiUrl + '/carboncreditprojects');
  //       const data = await response.json();
  //       setProjects(data);
  //     } catch (error) {
  //       console.error('Failed to fetch projects', error);
  //     }
  //   };
    
  //   const fetchPossessions = async () => {
  //     try {
  //       const response = await fetch(apiUrl + '/users/possessions', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({ user_id: userId }),
  //       });
  //       const data = await response.json();
  //       setPossessions(data);
  //     } catch (error) {
  //       console.error('Failed to fetch possessions', error);
  //     }
  //   };
    
  //   fetchProjects();
  //   fetchPossessions();
  // }, [userId]);



//   useEffect(() => {
//     // Dummy data for projects
//     setProjects([
//       {
//         id: '1',
//         name: 'Forest Restoration',
//         price: '$1000',
//         quantity: 100,
//       },
//       {
//         id: '2',
//         name: 'Solar Farm',
//         price: '$1200',
//         quantity: 200,
//       },
//     ]);

//     // Dummy data for possessions
//     setPossessions([
//       {
//         user_id: '123',
//         projectName: 'Ocean Cleanup',
//         company: 'Eco Corp',
//         price: '$1500',
//       },
//       {
//         user_id: '123',
//         projectName: 'Wind Farm',
//         company: 'Wind Energy Ltd',
//         price: '$1300',
//       },
//     ]);
//   }, [])
  
  return (
    <div className="flex flex-col p-8 bg-white text-black h-screen">
      <div className="mb-6">
        <h2 className="text-4xl font-extrabold mb-4 text-green-500">Carbon Credits Owned</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {possessions.map((data, index) => (
            <MarketCard key={index} {...data} />
          ))}
        </div>
      </div>
      
      <div className="mt-6">
        <h2 className="text-4xl font-extrabold mb-4 text-blue-500">Top Gainers and Losers</h2>
        <div className="overflow-y-auto max-h-[600px] mt-2">
          <GLTable type={type} refreshGL={refreshGL} setRefreshGL={setRefreshGL} />
        </div>
      </div>
    </div>
  );
}
