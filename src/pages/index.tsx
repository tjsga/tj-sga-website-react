import React from 'react';
import Hero from '../components/Hero';
import NewsAndMission from '../components/NewsAndMission';
import SegmentGroup from '../components/SegmentGroup';

const IndexPage = () => {
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
};

export default IndexPage;
