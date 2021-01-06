import React from 'react';
import Hero from '../components/Hero';
import useMission from '../hooks/useMission';
import '../css/mission.css';
import BlueButtonLink from '../components/BlueButtonLink';
import Centered from '../components/Centered';
import ParagraphWithHeader from '../components/ParagraphWithHeader';
import { SGA_PREVIOUS_LEADERSHIP_URL } from '../lib/constants';

function MissionQuote({ text, author }) {
	return (
		<div className='mission-quote'>
			<span className='mission-quote-text'>“{text}”</span>
			<br />
			<br />
			<span className='mission-quote-author'>— {author}</span>
		</div>
	);
}

export default function Mission() {
	let mission = useMission();

	return (
		<>
			<Hero heading='Mission and History' />
			{mission ? (
				<main>
					<MissionQuote
						author={mission.quote_author}
						text={mission.quote_text}
					/>

					<ParagraphWithHeader title='Vision' body={mission.vision} />
					<ParagraphWithHeader title='Mission' body={mission.mission} />
					<ParagraphWithHeader title='Inspiration' body={mission.inspiration} />

					<Centered>
						<BlueButtonLink href={SGA_PREVIOUS_LEADERSHIP_URL}>
							Previous Leadership
						</BlueButtonLink>
					</Centered>
				</main>
			) : null}
		</>
	);
}
