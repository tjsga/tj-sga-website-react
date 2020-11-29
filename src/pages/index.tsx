import React from 'react';
import Hero from '../components/Hero';
import NewsAndMission from '../components/NewsAndMission';
import SegmentGroup from '../components/SegmentGroup';

export default function IndexPage() {
	return (
		<>
			{/* Hero image */}
			<Hero />

			<hr />

			{/* Info columns */}
			<SegmentGroup />

			<hr />

			{/* Mission */}
			<NewsAndMission />
		</>
	);
}
