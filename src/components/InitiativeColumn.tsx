import React from 'react'
import BlockContent from '@sanity/block-content-to-react';
import imageUrl from '../imageUrl';

export default function InitiativeColumn({ name, thumbnail, content }) {
	let thumbUrl: string | null = null;
	if (thumbnail) {
		thumbUrl = imageUrl(thumbnail).url();
	}

	return <div className="lg:w-1/3 w-full lg:px-4 mb-4">
		<h3 className="text-center font-bold text-3xl text-secondary mb-6">
			{ name }
		</h3>
		{ thumbUrl ?
			<img className="mb-4" src={thumbUrl} alt={name} />
			: null
		}
		<BlockContent blocks={content} style={{fontSize: "1.5rem"}} />
	</div>
}
