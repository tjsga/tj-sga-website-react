import React from 'react';
import { Link } from 'react-router-dom';
import '../css/mission.css';
import useMission from '../hooks/useMission';

export default function Mission() {
	let mission = useMission();
	if (!mission) {
		return null;
	}

	return (
		<section className='text-center'>
			<div className='mission-box'>
				<p className='mission-landing-page-text'>“{mission.vision}”</p>
				<Link to='/mission' className='blue-button'>
					Our Mission
				</Link>
			</div>
		</section>
	);
}
