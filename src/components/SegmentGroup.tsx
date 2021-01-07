import Segment from './Segment';

export const segments = [
	{
		imageUrl: '/images/segments/news-and-happenings.jpg',
		infoUrl: '/news',
		title: 'News and Happenings',
		content:
			'Read about SGA initiatives, goals, and progress from SGA officers, as well as from other student leaders, students, and student organizations.',
	},
	{
		imageUrl: '/images/segments/who-we-are.jpg',
		title: 'Who We Are',
		infoUrl: '/officers',
		content:
			"Learn about your representatives, and how they're working to advance the common agenda that SGA has set to improve your experience at TJ.",
	},
	{
		imageUrl: '/images/segments/get-involved.jpg',
		infoUrl: '/involved',
		title: 'Get Involved',
		content:
			'Any questions or concerns? Have an idea for how SGA could be doing more to advocate for students? Want to get involved? Contact Us!',
	},
];

export default function InfoColumnGroup() {
	return (
		<div className='d-flex'>
			{segments.map((segment) => (
				<Segment key={segment.title} {...segment} />
			))}
		</div>
	);
}
