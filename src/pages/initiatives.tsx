import React from 'react';
import Hero from '../components/Hero';
import InitiativeRow from '../components/InitiativeRow';
import useQuery from '../hooks/useQuery';

export default function Initiatives() {
	let initiatives = useQuery<SGA.InitiativeDocument[]>(
		'*[_type == "initiative"]'
	);

	return (
		<>
			<Hero heading='Initiatives'></Hero>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				{initiatives && initiatives.map((initiative) => {
					return <InitiativeRow initiative={initiative} />;
				})}
			</div>
		</>
	);
}
