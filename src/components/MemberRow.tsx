import imageUrl from '../lib/imageUrl';
import '../css/article.css';
import RowItemHeader from './RowItemHeader';

export default function MemberRow({ member }: { member: SGA.MemberDocument }) {
	let thumbnail: React.ReactElement | null = null;
	if (member.profile_photo) {
		thumbnail = (
			<img src={imageUrl(member.profile_photo).url()} alt={member.name} />
		);
	}

	return (
		<div className='d-flex my-4'>
			<div className='article-row-thumbnail'>{thumbnail}</div>
			<div className='article-row-content'>
				<RowItemHeader>{member.name}</RowItemHeader>
				<i>
					{member.role}, {member.year}
				</i>
				<br />
				<p>{member.bio}</p>
			</div>
		</div>
	);
}
