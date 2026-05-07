import React from 'react';
import '../css/gallery.css';

const images = [
	'/images/segments/who-we-are.jpg',
	'/images/segments/who-we-are_2020-2021.jpg',
	'/images/segments/who-we-are_2021-2022.jpg',
	'/images/segments/who-we-are_2023-2024.jpg',
	'/images/segments/who-we-are_2024-2025.jpg',
	'/images/segments/get-involved.jpg',
	'/images/segments/news-and-happenings.jpg',
	// Add more images as needed
];

export default function Gallery() {
	return (
		<div className="gallery-container">
			<h1>Photo Gallery</h1>
			<div className="gallery-grid">
				{images.map((src, index) => (
					<div key={index} className="gallery-item">
						<img src={src} alt={`Gallery image ${index + 1}`} />
					</div>
				))}
			</div>
		</div>
	);
}