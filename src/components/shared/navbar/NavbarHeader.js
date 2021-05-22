import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Grid, Input, InputLabel, Select, Tab, Tabs } from '@material-ui/core';
import { Link } from 'react-router-dom';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useStyles } from 'src/components/shared/navbar/NavbarMakeStyles.js';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import './NavbarStyles.css';
import { images } from 'src/assets/img';

import { useHistory } from 'react-router-dom';

import { HomeRoutes } from 'src/routes';
import Avatar from 'antd/lib/avatar/avatar';
import MainBlock from '@sharedComponent/mainblock';
import SideBlock from './../sideblock/sideblock';

export default function NavbarHeader(props) {
	const history = useHistory();
	const theme = useTheme();
	const classes = useStyles();
	const [value, setValue] = React.useState(0);
	const [Delivery, setDelivery] = useState(props.delivery);
	const [Pickup, setPickup] = useState(props.pickup);

	const isMobile = useMediaQuery(theme.breakpoints.down('md'));
	const handleChange = (event, newValue) => {
		setValue(newValue);
		history.push(value);
	};

	const [anchorEl, setAnchorEl] = React.useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};
	const handlerouter = (value) => {
		history.push(value);
	};

	return (
		<div className={classes.grow}>
			<AppBar position="sticky">
				<Toolbar>
					<div container className={classes.headercontainer}>
						<div>
							<img src={images.logo} className={classes.logoimg} />
						</div>

						<div>
							<Avatar>A</Avatar>
						</div>
					</div>
				</Toolbar>
			</AppBar>
			<Grid container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '4%' }}>
				<Grid item md={9}>
					<MainBlock />
				</Grid>
				<Grid item md={3}>
					<SideBlock />
				</Grid>
			</Grid>
		</div>
	);
}
