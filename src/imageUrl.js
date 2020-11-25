import imageUrlBuilder from '@sanity/image-url';
import sanity from './sanity';

const builder = imageUrlBuilder(sanity);
export default function imageUrl(source) {
	return builder.image(source);
}
