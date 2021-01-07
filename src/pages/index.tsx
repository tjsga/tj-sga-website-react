import React from 'react';
import Hero from '../components/Hero';
import NewsAndMission from '../components/NewsAndMission';
import SegmentGroup from '../components/SegmentGroup';

export default function IndexPage() {
	return (
		<>
			<Hero />
			<main>
				<SegmentGroup />
				<hr />
				<NewsAndMission />
			</main>
		</>
	);
}
