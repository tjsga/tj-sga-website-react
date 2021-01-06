import '../css/segment.css';
import BlueButtonLink from './BlueButtonLink';

function SegmentHeader({ children }: { children: React.ReactNode }) {
	return (
		<h3
			style={{
				margin: '1em 0px',
				fontSize: '1.75rem',
				fontWeight: 500,
			}}
		>
			{children}
		</h3>
	);
}

export default function Segment({ title, content, imageURL, infoURL }) {
	return (
		<div className='segment'>
			<SegmentHeader>{title}</SegmentHeader>
			<img src={imageURL} alt={title} />
			<p className='strong-paragraph'>{content}</p>

			<BlueButtonLink href={infoURL}>MORE INFO</BlueButtonLink>
		</div>
	);
}
