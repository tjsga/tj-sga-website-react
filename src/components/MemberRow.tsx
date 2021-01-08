import '../css/article.css';
import imageUrl from '../lib/imageUrl';
import ConstrainedImage from './ConstrainedImage';
import RowItemHeader from './RowItemHeader';
import RowItemSubheader from './RowItemSubheader';

export default function MemberRow({
	member,
	limitPhotoHeight = false,
}: {
	member: SGA.MemberDocument;
	limitPhotoHeight?: boolean;
}) {
	let thumbnail = member.profile_photo
		? imageUrl(member.profile_photo).url()
		: undefined;

	return (
		<div className='d-flex my-4'>
			<div style={{ flex: 1, textAlign: 'right' }}>
				{thumbnail ? (
					limitPhotoHeight ? (
						<ConstrainedImage
							src={thumbnail}
							alt={member.name}
							style={{
								marginLeft: 'auto',
								marginRight: '2em',
								width: '10em',
								height: '15em',
							}}
						/>
					) : (
						<div style={{ marginLeft: 'auto', marginRight: '2em' }}>
							<img src={thumbnail} alt={member.name} />
						</div>
					)
				) : null}
			</div>
			<div style={{ flex: 3 }}>
				<RowItemHeader>{member.name}</RowItemHeader>
				<RowItemSubheader>
					{member.role}, {member.year}
				</RowItemSubheader>
				<br />
				<p>{member.bio}</p>
			</div>
		</div>
	);
}
