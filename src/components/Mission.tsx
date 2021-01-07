import React from 'react';
import '../css/mission.css';
import useMission from '../hooks/useMission';
import BlueButtonLink from './BlueButtonLink';

export default function Mission() {
	let mission = useMission(); // can be null

	return (
		<section className='text-center'>
			<div className='mission-box'>
				<p className='mission-landing-page-text'>“{mission?.vision}”</p>
				<BlueButtonLink href='/mission'>Our Mission</BlueButtonLink>
			</div>
		</section>
	);
}
