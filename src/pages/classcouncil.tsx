import React from 'react';
import Hero from '../components/Hero';
import LinebreakToBrTag from '../components/LineBreakToBrTag';
import MemberRow from '../components/MemberRow';
import PrimaryHeader from '../components/PrimaryHeader';
import useQuery from '../hooks/useQuery';
import imageUrl from '../lib/imageUrl';
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

export interface ClassCouncilYear {
	year: string;
	members: SGA.MemberDocument[];
	photoUrl: string | null;
	photoDescription: string | null;
}

export default function ClassCouncil() {
	let members = useQuery<SGA.MemberDocument[]>(
		`*[_type == 'member' && committee == 'class'] | order year`
	);

	if (!members) {
		return null;
	}

	let years: ClassCouncilYear[] = [];
	let currentYearMembers: SGA.MemberDocument[] = [];
	let currentYear = '';
	let currentYearPhotoUrl: string | null = null;
	let currentYearPhotoDescription: string | null = null;

	const saveCurrentYear = () => {
		// Clear the members of the current year
		years.push({
			year: currentYear,
			members: sortCommittee(currentYearMembers, roleOrder),
			photoUrl: currentYearPhotoUrl,
			photoDescription: currentYearPhotoDescription,
		});

		currentYearMembers = [];
		currentYearPhotoUrl = null;
		currentYear = '';
	};

	for (let member of members) {
		if (member.year !== currentYear) {
			if (currentYear !== '') {
				saveCurrentYear();
			}
			currentYear = member.year;
		}
		// If the role is 'PHOTO', 'Photo', 'photo', or anything else like that, use its "profile picture"
		// as this Class Council's group photo.
		if (member.role.toLowerCase() === 'photo') {
			currentYearPhotoUrl = imageUrl(member.profile_photo).url();
			currentYearPhotoDescription = member.bio;
		} else {
			currentYearMembers.push(member);
		}
	}

	if (currentYearMembers.length > 0) {
		saveCurrentYear();
	}

	return (
		<>
			<Hero heading='Class Council' />
			<main>
				{years.map(({ year, members, photoUrl, photoDescription }) => (
					<>
						<PrimaryHeader style={{ textAlign: 'center' }}>
							Class Council {year}
						</PrimaryHeader>

						{photoUrl && (
							<div
								style={{
									width: '100%',
									display: 'flex',
									flexDirection: 'column',
									alignContent: 'center',
								}}
							>
								<div style={{ textAlign: 'center', marginBottom: '10px' }}>
									<img
										src={photoUrl}
										alt={'Group photo for Class Council ' + year}
										style={{ maxHeight: '25em' }}
									/>
								</div>
								<span style={{ textAlign: 'center' }}>
									<LinebreakToBrTag text={photoDescription ?? ''} />
								</span>
							</div>
						)}

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
