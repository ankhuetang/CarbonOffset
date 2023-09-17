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

const dummyMarketData = [
	{
		projectName: 'Project 1',
		company: 'Company A',
		price: '$1000',
	},
	{
		projectName: 'Project 2',
		company: 'Company B',
		price: '$800',
	},
	{
		projectName: 'Project 3',
		company: 'Company C',
		price: '$1200',
	},
	{
		projectName: 'Project 4',
		company: 'Company D',
		price: '$950',
	},
];

export default function Dashboard() {
	const [marketStatus, setMarketStatus] = useState([]);
	const [type, setType] = useState('gainers');
	const [refreshGL, setRefreshGL] = useState(false);

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

	return (
		<Box sx={{ flexGrow: 1, padding: 2 }}>
			<Stack>
				<Stack
					direction='row'
					alignItems='center'
					spacing={1}
					sx={{
						width: '100%',
					}}
				>
					<Typography
						sx={{
							fontSize: '1.5rem',
							mb: 2,
						}}
					>
						Market Status
					</Typography>
				</Stack>
				<Stack direction='row' alignItems='center' spacing={2}>
					{dummyMarketData.map((data, index) => (
						<MarketCard
							key={index}
							projectName={data.projectName}
							company={data.company}
							price={data.price}
						/>
					))}
				</Stack>
			</Stack>
			<Stack>
				<Stack
					direction='row'
					alignItems='center'
					spacing={1}
					sx={{
						width: '100%',
						mt: 3,
					}}
				>
					<Typography
						sx={{
							fontSize: '1.5rem',
							mb: 2,
						}}
					>
						Top Gainers and losers
					</Typography>
				</Stack>
			</Stack>
			<Stack
				sx={{
					mt: 2,
					overflowY: 'auto',
					height: '600px',
				}}
			>
				<GLTable
					type={type}
					refreshGL={refreshGL}
					setRefreshGL={setRefreshGL}
				/>
			</Stack>
		</Box>
	);
}
