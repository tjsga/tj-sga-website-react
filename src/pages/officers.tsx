import React from 'react';
import Hero from '../components/Hero';
import MemberRow from '../components/MemberRow';
import useQuery from '../hooks/useInitiatives';

export default function Officers() {
	let officers = useQuery<SGA.MemberDocument[]>(
		`*[_type == 'member' && committee == 'officer']`
	);

	if (!officers) {
		return null;
	}

	return (
		<>
			<Hero heading='Officers' />
			<div>
				{officers.map((officer) => {
					return <MemberRow member={officer} />;
				})}
			</div>
		</>
	);
}
