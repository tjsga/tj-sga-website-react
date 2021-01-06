import React from 'react';
import Hero from '../components/Hero';
import useMission from '../hooks/useMission';
import '../css/mission.css';
import BlueButtonLink from '../components/BlueButtonLink';
import Centered from '../components/Centered';
import ParagraphWithHeader from '../components/ParagraphWithHeader';

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

const previousLeadershipLink =
	'https://docs.google.com/spreadsheets/d/1a3RYdqrDi1IPG9BKWQ2xhoX3YCPQKUl_FsRLvIVEMPg/edit?usp=drive_open&ouid=0';

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

					<Centered>
						<BlueButtonLink href={previousLeadershipLink}>
							Previous Leadership
						</BlueButtonLink>
					</Centered>
				</main>
			) : null}
		</>
	);
}
