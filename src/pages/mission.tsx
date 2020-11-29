import React from 'react';
import Hero from '../components/Hero';
import useMission from '../hooks/useMission';
import '../css/mission.css';

export default function Mission() {
	let mission = useMission();

	return (
		<>
			<Hero heading='Mission and History' />
			{mission ? (
				<div>
					<div className='mission-quote'>
						<span className='mission-quote-text'>“{mission.quote_text}”</span>
						<br />
						<br />
						<span className='mission-quote-author'>
							— {mission.quote_author}
						</span>
					</div>
					<div className='row'>
						<div className='flex-1'>
							<span className='mission-header'>Vision</span>
						</div>
						<div className='flex-2'>
							<p className='mission-para'>{mission.vision}</p>
						</div>
					</div>
					<hr />
					<div className='row'>
						<div className='flex-1'>
							<span className='mission-header'>Mission</span>
						</div>
						<div className='flex-2'>
							<p className='mission-para'>{mission.mission}</p>
						</div>
					</div>
					<div className='text-center'>
						<a
							href='https://docs.google.com/spreadsheets/d/1a3RYdqrDi1IPG9BKWQ2xhoX3YCPQKUl_FsRLvIVEMPg/edit?usp=drive_open&ouid=0'
							className='blue-button'
						>
							Previous Leadership
						</a>
					</div>
				</div>
			) : null}
		</>
	);
}
