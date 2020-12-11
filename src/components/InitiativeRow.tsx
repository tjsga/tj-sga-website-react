import React from 'react';
import imageUrl from '../imageUrl';
import BlockContent from '@sanity/block-content-to-react';
import '../css/article.css';

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
		<div className='d-flex'>
			<div className='article-row-thumbnail'>
				{thumbUrl ? <img src={thumbUrl} alt={initiative.name} /> : null}
			</div>
			<div className='article-row-content'>
				<h3 className='header'>{initiative.name}</h3>
				<BlockContent blocks={initiative.content} />
			</div>
		</div>
	);
}
