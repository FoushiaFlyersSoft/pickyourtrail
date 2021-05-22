import React from 'react';

import Typography from '@material-ui/core/Typography';

import { useStyles } from 'src/components/shared/mainblock/style.js';

import OpenWithIcon from '@material-ui/icons/OpenWith';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import GalleryList from '@sharedComponent/gallery/gallery';
import Draggable from 'react-draggable';

export default function Box() {
	const classes = useStyles();

	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<>
			<Draggable>
				<div>
					<div>
						<Typography className={classes.daybyday1}>Day 1-25th March</Typography>
						<Typography className={classes.morning}>MORNING</Typography>
					</div>
					<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
						<Typography className={classes.linktext}>
							Taj Exotica Resort - Premium Suite <ArrowRightAltIcon className={classes.arrowicon} />
						</Typography>

						<Typography className={classes.drag}>
							<OpenWithIcon className={classes.arrowicon} />
							Drag and swap
						</Typography>
					</div>
					<Typography className={classes.desc}>
						Enjoy convenient pickup from your Dubai hotel and head to the banks of Dubai Creek, where you can step aboard a wooden dhow
						boat and let the hosts lead you to your table for the evening
					</Typography>
					<GalleryList />
				</div>
			</Draggable>
			<div style={{ marginTop: '10%' }}>
				<div>
					<Typography className={classes.morning}>NOON TO EVENING</Typography>
				</div>
				<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
					<Typography className={classes.linktext1}>
						Water surfing in the shores of Elephant beach <ArrowRightAltIcon className={classes.arrowicon} />
					</Typography>
				</div>
				<Typography className={classes.desc}>
					Enjoy convenient pickup from your Dubai hotel and head to the banks of Dubai Creek, where you can step aboard a wooden dhow boat
					and let the hosts lead you to your table for the evening
				</Typography>
				<GalleryList />
			</div>
			<div>
				<Typography className={classes.add}>Add another day</Typography>
				<div
					style={{
						margin: '3% 0',
						color: '#E5E5E5',
						backgroundColor: '#E5E5E5',
						height: 0.5,
						borderColor: '#E5E5E5',
					}}
				/>
			</div>
			<div style={{ marginTop: '9%' }}>
				<div>
					<Typography className={classes.daybyday1}>Day 1-26th March</Typography>
					<Typography className={classes.morning}>MORNING</Typography>
				</div>
				<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
					<Typography className={classes.linktext1}>Visit Viper Islands to experience the beauty of nature</Typography>
				</div>
				<Typography className={classes.desc}>
					Enjoy convenient pickup from your Dubai hotel and head to the banks of Dubai Creek, where you can step aboard a wooden dhow boat
					and let the hosts lead you to your table for the evening
				</Typography>
				<GalleryList />
			</div>
			<div style={{ marginTop: '5%' }}>
				<div>
					<Typography className={classes.morning}>EVENING TO NOON</Typography>
				</div>
				<div style={{ display: 'flex', flexDirection: 'row', marginTop: '4%' }}>
					<Typography className={classes.link}>At leisure. </Typography>
					<Typography className={classes.link1}>
						Find things to do <ArrowRightAltIcon />
					</Typography>
				</div>
			</div>
		</>
	);
}
