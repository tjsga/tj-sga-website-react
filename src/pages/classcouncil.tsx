import React from 'react';
import Hero from '../components/Hero';
import MemberRow from '../components/MemberRow';
import PrimaryHeader from '../components/PrimaryHeader';
import useQuery from '../hooks/useQuery';
import sortCommittee from '../lib/sortCommittee';

const roleOrder = [
	'President',
	'Vice-President',
	'Treasurer',
	'Secretary',
	'Historian',
	'Senator',
	'Sponsor',
];

export default function ClassCouncil() {
	let members = useQuery<SGA.MemberDocument[]>(
		`*[_type == 'member' && committee == 'class'] | order (year desc)`
	);

	if (!members) {
		return null;
	}

	let years: [string, SGA.MemberDocument[]][] = [];
	let currentYearMembers: SGA.MemberDocument[] = [];
	let currentYear = '';

	for (let member of members) {
		if (member.year !== currentYear) {
			if (currentYear !== '') {
				// Clear the members of the current year
				years.push([currentYear, sortCommittee(currentYearMembers, roleOrder)]);
				currentYearMembers = [];
			}
			currentYear = member.year;
		}
		currentYearMembers.push(member);
	}

	return (
		<>
			<Hero heading='Class Council' />
			<main>
				{years.map(([year, members]) => (
					<>
						<PrimaryHeader>Class Council {year}</PrimaryHeader>
						{members.map((member) => (
							<MemberRow
								limitPhotoHeight
								key={member._id}
								member={member}
							></MemberRow>
						))}
					</>
				))}
			</main>
		</>
	);
}
