import sanityClient from '@sanity/client';

const sanity = sanityClient({
	projectId: 'yi263kzm',
	dataset: 'production',
	useCdn: true,
});

export default sanity;
