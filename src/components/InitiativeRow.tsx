import React from 'react';
import imageUrl from '../imageUrl';
import BlockContent from '@sanity/block-content-to-react';

export default function InitiativeRow({
	initiative,
}: {
	initiative: SGA.InitiativeDocument;
}) {
	let thumbUrl: string | null = null;
	if (initiative.thumbnail) {
		thumbUrl = imageUrl(initiative.thumbnail).url();
	}

	return (
		<div style={{ display: 'flex' }}>
			<div style={{ flex: 1, padding: '10px' }}>
				{thumbUrl ? (
					<img className='mb-4' src={thumbUrl} alt={initiative.name} />
				) : null}
			</div>
			<div style={{ flex: 3, padding: '10px' }}>
				<h3>{initiative.name}</h3>
				<BlockContent blocks={initiative.content} />
			</div>
		</div>
	);
}
