import React from 'react';
import Hero from '../components/Hero';
import MemberRow from '../components/MemberRow';
import useQuery from '../hooks/useInitiatives';

export default function ClassCouncil() {
	let members = useQuery<SGA.MemberDocument[]>(
		`*[_type == 'member' && role == 'class'] | order (year desc)`
	);

	if (!members) {
		return null;
	}

	return (
		<>
			<Hero heading='Class Council' />
			{members.map((member) => {
				return <MemberRow key={member._id} member={member}></MemberRow>;
			})}
		</>
	);
}
