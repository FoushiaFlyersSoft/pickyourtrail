import React from 'react';

import Typography from '@material-ui/core/Typography';

import { Grid, Paper } from '@material-ui/core';

import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

import { useStyles } from './style';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import Box from './component/box';

export default function MainBlock() {
	const classes = useStyles();

	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<>
			<Typography className={classes.daybyday}>Day by day plan</Typography>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<Paper elevation={3} style={{ width: '600px', padding: ' 1%', margin: '1% 0' }}>
					<div>
						<Grid container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
							<Grid items md={1}>
								<LocationOnIcon className={classes.locationicon} />
								<div className={classes.vl}></div>
								<RadioButtonUncheckedIcon className={classes.locationicon} />
								<div className={classes.v2}></div>
							</Grid>
							<Grid items md={11}>
								<Box />
							</Grid>
						</Grid>
					</div>
				</Paper>
			</div>
			<div style={{ marginTop: '5%' }}>
				<Typography className={classes.daybyday}>Day by day plan</Typography>
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<Paper elevation={3} style={{ width: '600px', padding: ' 1%', margin: '1% 0' }}>
						<div>
							<Grid container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
								<Grid items md={1}>
									<LocationOnIcon className={classes.locationicon} />
									<div className={classes.vl}></div>
									<RadioButtonUncheckedIcon className={classes.locationicon} />
									<div className={classes.v2}></div>
								</Grid>
								<Grid items md={11}>
									<Box />
								</Grid>
							</Grid>
						</div>
					</Paper>
				</div>
			</div>
		</>
	);
}
