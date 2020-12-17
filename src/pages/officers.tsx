import React from 'react';
import Hero from '../components/Hero';
import MemberRow from '../components/MemberRow';
import useQuery from '../hooks/useQuery';

export default function Officers() {
	let officers = useQuery<SGA.MemberDocument[]>(
		`*[_type == 'member' && committee == 'officer']`
	);

	if (!officers) {
		return null;
	}

	return (
		<>
			<Hero heading='Officers' imageURL='/images/who-we-are/officers.jpg' />
			<main>
				{officers
					? officers.map((officer) => {
							return <MemberRow member={officer} />;
					  })
					: null}
			</main>
		</>
	);
}
