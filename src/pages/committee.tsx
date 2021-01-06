import React from 'react';
import Hero from '../components/Hero';
import MemberRow from '../components/MemberRow';
import useQuery from '../hooks/useQuery';

export default function Committee() {
	let excomm =
		useQuery<SGA.MemberDocument[]>(
			`*[_type == 'member' && committee == 'excomm'] | order (role, year desc)`
		) ?? [];
	// year desc because seniority 8)

	return (
		<>
			<Hero
				heading='Executive Committee'
				imageURL='/images/who-we-are/excomm.png'
			/>
			<main>
				{excomm.map((member) => (
					<MemberRow key={member._id} member={member} />
				))}
			</main>
		</>
	);
}
