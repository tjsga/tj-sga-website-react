import { default as ImageUrlBuilder } from '@sanity/image-url';
import sanity from './sanity';

const builder = ImageUrlBuilder(sanity);

/**
 * Build a URL for an image based on specified attributes
 * @param {SanityImageSource} source The source image
 */
export default function imageUrl(source: any): any {
	return builder.image(source);
}
