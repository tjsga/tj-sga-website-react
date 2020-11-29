import React from 'react';
import useQuery from '../hooks/useQuery';
import InitiativeColumn from './InitiativeColumn';

export default function InitiativeList() {
	let initiatives = useQuery<SGA.InitiativeDocument[]>(
		'*[_type == "initiative"]'
	);

	if (!initiatives) {
		return null;
	}

	return (
		<section className='split-thirds'>
			{initiatives.map((initiative) => {
				return <InitiativeColumn key={initiative._id} {...initiative} />;
			})}
		</section>
	);
}
