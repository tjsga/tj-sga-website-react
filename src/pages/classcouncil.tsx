import React from 'react';
import Hero from '../components/Hero';
import MemberRow from '../components/MemberRow';
import useQuery from '../hooks/useQuery';

export default function ClassCouncil() {
	let members =
		useQuery<SGA.MemberDocument[]>(
			`*[_type == 'member' && role == 'class'] | order (year desc)`
		) ?? [];

	return (
		<>
			<Hero heading='Class Council' />
			<main>
				{members.map((member) => (
					<MemberRow key={member._id} member={member}></MemberRow>
				))}
			</main>
		</>
	);
}
