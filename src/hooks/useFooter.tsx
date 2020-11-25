import React from 'react';
import sanity from '../sanity';
import { SanityDocument } from '@sanity/client/sanityClient';

interface FooterDocument {
	columns: {
		_id: string;
		content: any[];
	}[];
}

export default function useFooter() {
	let [footer, setFooter] = React.useState<
		SanityDocument<FooterDocument> | undefined
	>();

	React.useEffect(() => {
		sanity.getDocument<FooterDocument>('footer').then(setFooter);
	}, []);

	return footer;
}
