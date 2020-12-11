import imageUrl from '../imageUrl';
import '../css/article.css';

export default function MemberRow({ member }: { member: SGA.MemberDocument }) {
	let thumbUrl: string | null = null;
	if (member.profile_photo) {
		thumbUrl = imageUrl(member.profile_photo).url();
	}

	return (
		<div className='row'>
			<div className='article-row-thumbnail'>
				{thumbUrl ? (
					<img className='mb-4' src={thumbUrl} alt={member.name} />
				) : null}
			</div>
			<div className='article-row-content'>
				<h3>{member.name}</h3>
				<i>
					{member.role}, {member.year}
				</i>
				<br />
				<p>{member.bio}</p>
			</div>
		</div>
	);
}
