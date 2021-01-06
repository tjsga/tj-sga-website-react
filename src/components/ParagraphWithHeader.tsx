import StrongParagraph from './StrongParagraph';

export default function ParagraphWithHeader({
	title,
	body,
}: {
	title: string;
	body: string;
}) {
	return (
		<div style={{ display: 'flex', textAlign: 'left' }}>
			<div className='flex-1 p-2'>
				<span className='paragraph-with-header-header'>{title}</span>
			</div>
			<div className='flex-2 p-2'>
				<StrongParagraph>{body}</StrongParagraph>
			</div>
		</div>
	);
}
