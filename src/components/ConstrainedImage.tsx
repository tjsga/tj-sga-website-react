import { CSSProperties } from 'react';

export default function ConstrainedImage({
	alt,
	src,
	style,
}: {
	alt: string;
	src: string;
	style?: CSSProperties;
}) {
	return (
		<div
			style={{
				// required: center the image with flexbox
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				overflow: 'hidden',
				...style,
			}}
		>
			<img
				src={src}
				alt={alt}
				style={{
					minWidth: '100%',
					minHeight: '100%',
					flexShrink: 0,
					objectFit: 'cover',
				}}
			/>
		</div>
	);
}
