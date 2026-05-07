import BlueButtonLink from './BlueButtonLink';
import SegmentHeader from './SegmentHeader';

export default function Segment({ title, content, imageUrl, infoUrl }) {
	return (
		<div className="segment-card">
			<div className="segment-image-container">
				<img src={imageUrl} alt={title} className="segment-image" />
			</div>
			<div className="segment-content">
				<SegmentHeader>{title}</SegmentHeader>
				<p className='strong-paragraph'>{content}</p>
				<div style={{ marginTop: 'auto' }}>
					<BlueButtonLink href={infoUrl}>MORE INFO</BlueButtonLink>
				</div>
			</div>
		</div>
	);
}
