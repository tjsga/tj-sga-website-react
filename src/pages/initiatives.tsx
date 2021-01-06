import React from 'react';
import FlexColumn from '../components/FlexColumn';
import Hero from '../components/Hero';
import InitiativeRow from '../components/InitiativeRow';
import useQuery from '../hooks/useQuery';

export default function Initiatives() {
	let initiatives =
		useQuery<SGA.InitiativeDocument[]>('*[_type == "initiative"]') ?? [];

	return (
		<>
			<Hero heading='Initiatives' />
			<main>
				<FlexColumn>
					{initiatives.map((initiative) => (
						<InitiativeRow initiative={initiative} />
					))}
				</FlexColumn>
			</main>
		</>
	);
}
