import BlockContent from '@sanity/block-content-to-react';
import '../css/initiative.css';
import imageUrl from '../lib/imageUrl';

export default function InitiativeColumn({ name, thumbnail, content }) {
	let thumbUrl: string | null = null;
	if (thumbnail) {
		thumbUrl = imageUrl(thumbnail).url();
	}

	return (
		<div>
			<h3 className='header'>{name}</h3>
			{thumbUrl ? (
				<img className='initiative-img' src={thumbUrl} alt={name} />
			) : null}
			<div className='initiative-summary'>
				<BlockContent blocks={content} />
			</div>
		</div>
	);
}
