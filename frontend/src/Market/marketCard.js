import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const MarketCard = ({ projectName, company, price }) => {
	return (
		<Card sx={{ width: '18rem' }}>
			<CardContent>
				<Typography variant='h5' component='div'>
					{projectName}
				</Typography>
				<Typography variant='subtitle2' color='textSecondary'>
					{company}
				</Typography>
				<Typography variant='body2' color='textPrimary'>
					Price: {price}
				</Typography>
				<Stack direction='row' spacing={2} mt={2}>
					<Button
						variant='contained'
						sx={{
							backgroundColor: '#4caf50',
							color: '#fff',
							'&:hover': {
								backgroundColor: 'transparent',
								color: '#4caf50',
								border: '1px solid #4caf50',
								boxShadow: 'none',
							},
						}}
					>
						Deposit
					</Button>
					<Button
						variant='contained'
						sx={{
							backgroundColor: '#d43725',
							color: '#fff',
							'&:hover': {
								backgroundColor: 'transparent',
								color: '#d43725',
								border: '1px solid #d43725',
								boxShadow: 'none',
							},
						}}
					>
						Withdraw
					</Button>
				</Stack>
			</CardContent>
		</Card>
	);
};

export default MarketCard;
