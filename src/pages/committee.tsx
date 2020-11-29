import React from 'react';
import Hero from '../components/Hero';
import MemberRow from '../components/MemberRow';
import useQuery from '../hooks/useQuery';

export default function Committee() {
	let excomm = useQuery<SGA.MemberDocument[]>(
		`*[_type == 'member' && committee == 'excomm'] | order (role, year desc)`
	);
	// year desc because seniority 8)

	if (!excomm) {
		return null;
	}

	return (
		<>
			<Hero heading='Executive Committee' />
			<div>
				{excomm.map((member) => {
					return <MemberRow member={member} />;
				})}
			</div>
		</>
	);
}
