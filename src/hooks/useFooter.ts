import React from 'react';
import sanity from '../sanity';
import { SanityDocument } from '@sanity/client/sanityClient';

export default function useFooter() {
	let [footer, setFooter] = React.useState<
		SanityDocument<SGA.FooterDocument> | undefined
	>();

	React.useEffect(() => {
		sanity.getDocument<SGA.FooterDocument>('footer').then(setFooter);
	}, []);

	return footer;
}
