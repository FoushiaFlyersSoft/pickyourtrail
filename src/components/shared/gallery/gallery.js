import React, { useState, useEffect } from 'react';
import './style.css';
// Material UI
import { Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { DOCUMENTS_MOCK_DATA } from './documentsMockData';
import nature from 'src/assets/img/nature.jpg';
import { Typography } from 'antd';
export default function GalleryList() {
	const max = 50;

	// Use State for Images.
	const [images, setImages] = useState([]);
	const [limit, setLimit] = useState(3);
	// API
	const api = 'https://jsonplaceholder.typicode.com/photos';
	// On Mount Call API & Filter Data
	useEffect(() => {
		fetchImages();
		console.log(limit);
	}, [limit]);

	// Fetch Data
	const fetchImages = () => {
		// Call the API
		fetch(api)
			.then((res) => res.json())
			.then((data) => {
				// Filter to Even albumId only
				const filterData = data.filter((x) => x.albumId % 2 === 0);
				setImages(filterData);
			})
			.catch((err) => console.log(err));
	};

	const handleShowMoreImages = () => {
		// I'm getting an error her
		if (limit <= max) {
			setLimit(limit + 10);
		}
	};

	return (
		<div style={{ display: 'flex', flexDirection: 'row' }}>
			{DOCUMENTS_MOCK_DATA.slice(0, limit).map((album) => (
				<img className="albumImg" src={album.fileName} className="images" />
			))}
			<div className="overlay">
				<img src={nature} disabled={limit >= max} onClick={handleShowMoreImages} className="images"></img>
				<Typography className="extra">+2</Typography>
			</div>
		</div>
	);
}
