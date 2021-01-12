import React from 'react';
import Hero from '../components/Hero';
import MemberRow from '../components/MemberRow';
import useQuery from '../hooks/useQuery';

export default function Committee() {
	let excomm =
		useQuery<SGA.MemberDocument[]>(
			`*[_type == 'member' && committee == 'excomm'] | order (role, year)`
		) ?? [];
	// year because seniority

	return (
		<>
			<Hero
				heading='Executive Committee'
				imageURL='/images/who-we-are/excomm.jpg'
			/>
			<main>
				{excomm.map((member) => (
					<MemberRow limitPhotoHeight key={member._id} member={member} />
				))}
			</main>
		</>
	);
}
