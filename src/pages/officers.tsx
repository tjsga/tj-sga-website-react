import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import MemberRow from '../components/MemberRow';
import sortCommittee from '../lib/sortCommittee';
import sanity from '../sanity';

const officerOrder = [
	'SGA President',
	'SGA Vice President',
	'SGA Treasurer',
	'SGA Secretary',
];

export default function Officers() {
	const [officers, setOfficers] = useState<SGA.MemberDocument[]>();

	useEffect(() => {
		sanity
			.fetch("*[_type == 'member' && committee == $committee]", {
				committee: 'officer',
			})
			.then(setOfficers);
	}, []);

	const officersSorted = sortCommittee(officers ?? [], officerOrder);

	return (
		<>
			<Hero heading='Officers' imageURL='/images/who-we-are/officers.jpg' />
			<main>
				{officersSorted.map((officer) => (
					<MemberRow member={officer} />
				))}
			</main>
		</>
	);
}
