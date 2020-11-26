import React from 'react';
import Hero from '../components/Hero';
import SegmentGroup from '../components/SegmentGroup';

import Mission from '../components/Mission';

const IndexPage = () => {
	return (
		<>
			{/* Hero image */}
			<Hero />

			{/* Info columns */}
			<SegmentGroup />

			{/* Initiatives section */}
			{/* <InitiativeList /> */}

			{/* Mission */}
			<Mission />

			{/* News articles section */}
			<section className='container mx-auto px-8 my-8'></section>
		</>
	);
};

export default IndexPage;
