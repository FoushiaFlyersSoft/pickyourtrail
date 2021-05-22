import React from 'react';

import Typography from '@material-ui/core/Typography';

import { Paper } from '@material-ui/core';

import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { useStyles } from './style';
import { images } from './../../../assets/img/index';

export default function SideBlock() {
	const classes = useStyles();

	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<>
			<Paper elevation={3} style={{ width: '300px', margin: '10% 0', padding: ' 1%', display: 'flex', flexDirection: 'column' }}>
				<div className={classes.container}>
					<div>
						<Typography className={classes.price}>Price per person</Typography>
						<Typography style={{ textDecoration: 'line-through' }}>
							<b>$ 43.540</b>
						</Typography>
					</div>
					<button className={classes.btn}>Unlock deal</button>
				</div>
				<div
					style={{
						margin: '3% 0',
						color: '#bfbaba',
						backgroundColor: '#bfbaba',
						height: 0.5,
						borderColor: '#bfbaba',
					}}
				/>
				<div>
					<div style={{ display: 'flex', flexDirection: 'row', margin: '2% 0' }}>
						<img src={images.iconbg} style={{ width: '20px', height: '20px', marginRight: '4px' }} />
						<Typography className={classes.head}>The pickyourtrail Advantage</Typography>
					</div>
					<div style={{ display: 'flex', flexDirection: 'row' }}>
						<CheckCircleOutlineIcon className={classes.checkicon} />
						<Typography className={classes.list}>All inclusive real time pricing</Typography>
					</div>
					<div style={{ display: 'flex', flexDirection: 'row' }}>
						<CheckCircleOutlineIcon className={classes.checkicon} />
						<Typography className={classes.list}>Instant booking confirmation</Typography>
					</div>
					<div style={{ display: 'flex', flexDirection: 'row' }}>
						<CheckCircleOutlineIcon className={classes.checkicon} />
						<Typography className={classes.list}>Travel concierge throught app</Typography>
					</div>
					<div style={{ display: 'flex', flexDirection: 'row' }}>
						<CheckCircleOutlineIcon className={classes.checkicon} />
						<Typography className={classes.list}>Flexible payment option</Typography>
					</div>
				</div>
			</Paper>
		</>
	);
}
