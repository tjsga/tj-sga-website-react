import React from 'react';
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
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					{initiatives.map((initiative) => (
						<InitiativeRow initiative={initiative} />
					))}
				</div>
			</main>
		</>
	);
}
