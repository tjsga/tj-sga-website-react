import Segment from './Segment';

export default function InfoColumnGroup() {
	return (
		<div className='row'>
			<Segment
				imageURL='/images/segment-1.jpg'
				title='News and Happenings'
				content={`Read about SGA initiatives, goals, and progress from SGA officers, as well as from other student leaders, students, and student organizations.`}
				infoURL='/news'
			/>
			<Segment
				imageURL='/images/segment-2.jpg'
				title='Who We Are'
				content={`Learn about your representatives, and how they're working to advance the common agenda that SGA has set to improve your experience at TJ.`}
				infoURL='/officers'
			/>
			<Segment
				imageURL='/images/segment-3.jpg'
				title='Get Involved'
				content={`Any questions or concerns? Have an idea for how SGA could be doing more to advocate for students? Want to get involved? Contact Us!`}
				infoURL='/involved'
			/>
		</div>
	);
}
