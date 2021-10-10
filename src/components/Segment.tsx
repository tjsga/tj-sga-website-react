import BlueButtonLink from './BlueButtonLink';
import SegmentHeader from './SegmentHeader';

export default function Segment({ title, content, imageUrl, infoUrl }) {
	return (
		<div style={{ textAlign: 'center', padding: '0px 17px', flex: 1 }}>
			<SegmentHeader>{title}</SegmentHeader>
			<img src={imageUrl} alt={title} />
			<p className='strong-paragraph'>{content}</p>

			<BlueButtonLink href={infoUrl}>MORE INFO</BlueButtonLink>
		</div>
	);
}
